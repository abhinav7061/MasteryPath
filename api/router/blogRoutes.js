const express = require("express");
const { getAllBlogSummaries, getBlog, createBlog, editBlog, isBlogWriter, deleteBlog } = require("../controller/blogController")
const { isAuthenticatedUser, checkBlogAuthor } = require("../middlewares/auth")
const multer = require('multer');
const router = express.Router();

const blogCoverUploadMiddleware = multer({ dest: 'uploads/blog_cover/' });

router.route("/allBlogSummaries").get(getAllBlogSummaries);
router.route("/createBlog").post(blogCoverUploadMiddleware.single('file'), isAuthenticatedUser, createBlog);
router.route("/isAuthor/:blogId").post(blogCoverUploadMiddleware.single('file'), isAuthenticatedUser, checkBlogAuthor, isBlogWriter);
router.route("/editBlog/:blogId").put(blogCoverUploadMiddleware.single('file'), isAuthenticatedUser, checkBlogAuthor, editBlog);
router.route("/deleteBlog/:blogId").delete(isAuthenticatedUser, checkBlogAuthor, deleteBlog);
router.route("/getBlog/:id").get(getBlog);

module.exports = router;
