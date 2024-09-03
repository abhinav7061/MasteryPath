const express = require("express");
const { getAllBlogSummaries, getBlog, createBlog, editBlog, isAuthor } = require("../controller/blogController")
const { isAuthenticatedUser } = require("../middlewares/auth")
const multer = require('multer');
const router = express.Router();

const blogCoverUploadMiddleware = multer({ dest: 'uploads/blog_cover/' });

router.route("/allBlogSummaries").get(getAllBlogSummaries);
router.route("/createBlog").post(blogCoverUploadMiddleware.single('file'), isAuthenticatedUser, createBlog);
router.route("/isAuthor").post(blogCoverUploadMiddleware.single('file'), isAuthenticatedUser, isAuthor);
router.route("/editBlog/:blogId").put(blogCoverUploadMiddleware.single('file'), isAuthenticatedUser, editBlog);
router.route("/getBlog/:id").get(getBlog);

module.exports = router;
