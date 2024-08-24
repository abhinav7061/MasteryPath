const User = require("../models/userSchema");
const Blog = require("../models/blogSchema");
const { sendErrorResponse } = require("../lib/sendError");
const { renameFileUploadedByMulter } = require("../lib/renameFileUploadedByMulter");
const { deleteFile } = require("../lib/deleteFile");

exports.getAllBlogs = async (req, res) => {
    const blogs = await Blog.find()
        .populate('author', ['name'])
        .sort({ createdAt: -1 })
        .limit(20);
    return res.json(blogs);
};

exports.getBlog = async (req, res) => {
    const { id } = req.params;
    const postDoc = await Blog.findById(id).populate('author', ['name']);
    res.json({
        success: true,
        data: postDoc
    });
};

exports.isAuthor = async (req, res) => {
    try {
        const userId = req.user._id;
        const authorId = req.body.authorId;
        res.status(200).json({
            success: userId == authorId,
        });
    } catch (error) {
        sendErrorResponse(res, 400, error.message);
    }
}

exports.createBlog = async (req, res) => {
    try {
        const { originalname, path } = req.file;
        const authorId = req.user._id;
        const ulr = await renameFileUploadedByMulter(originalname, path);
        const { title, summary, content } = req.body;
        console.log({ authorId, title, summary, content });
        await Blog.create({
            title,
            summary,
            content,
            cover: ulr,
            author: authorId,
        });

        res.json({
            success: true,
            message: 'Blog created successfully'
        });
    } catch (error) {
        sendErrorResponse(res, 401, error)
    }
};

exports.editBlog = async (req, res) => {
    try {
        const { title, summary, content } = req.body;
        const { blogId } = req.params;
        const authorId = req.user._id;
        const postDoc = await Blog.findById(blogId);
        // console.log({
        //     postDoc,
        //     authorId: authorId.toString(),
        //     postAuthor: postDoc.author.toString(),
        //     test: postDoc.author.toString() !== authorId.toString()
        // })
        if (!postDoc) {
            return sendErrorResponse(res, 404, 'Post not found');
        }
        if (postDoc.author.toString() !== authorId.toString()) {
            return sendErrorResponse(res, 400, 'You are not the author');
        }
        let newUrl = null;
        if (req.file) {
            const { originalname, path } = req.file;
            const folderPath = path.substring(0, path.lastIndexOf('/'));
            newUrl = await renameFileUploadedByMulter(originalname, path);
            await deleteFile(folderPath, postDoc.cover);
        }
        postDoc.title = title;
        postDoc.summary = summary;
        postDoc.content = content;
        postDoc.cover = newUrl ? newUrl : postDoc.cover;
        await postDoc.save();
        res.json({
            success: true,
            message: 'Blog Updated Successfully'
        });
    } catch (error) {
        sendErrorResponse(res, 401, error)
    }
};
