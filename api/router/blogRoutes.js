const express = require("express");
const { getAllBlogs, getBlog, createBlog, editBlog, isAuthor } = require("../controller/blogController")
const { isAuthenticatedUser } = require("../middlewares/auth")
const multer = require('multer');
const router = express.Router();

const blogCoverUploadMiddleware = multer({ dest: 'uploads/blog_cover/' });

router.route("/allBlogs").get(getAllBlogs);
router.route("/createBlog").post(blogCoverUploadMiddleware.single('file'), isAuthenticatedUser, createBlog);
router.route("/isAuthor").post(blogCoverUploadMiddleware.single('file'), isAuthenticatedUser, isAuthor);
router.route("/editBlog/:blogId").put(blogCoverUploadMiddleware.single('file'), isAuthenticatedUser, editBlog);
router.route("/:id").get(getBlog);

module.exports = router;
