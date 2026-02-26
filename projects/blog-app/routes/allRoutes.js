const express = require("express");
const multer = require("multer");
const User = require("../models/user");
const Blog = require("../models/blog");
const Comment = require("../models/comments");

const router = express.Router();

// ------------- MULTER STORAGE ------------- //
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // null - custom error or null
    cb(null, "projects/blog-app/public/uploads");
  },

  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

// ------------- HOME ROUTERS ------------- //

router.get("/", async (req, res) => {
  const allBlogs = await Blog.find({})
    .populate("createdBy", "fullName") // In Mongoose, .populate() replaces a referenced ObjectId with the actual document from another collection - Like SQL JOIN
    .sort({ createdAt: -1 });
  res.render("home", {
    user: req.user,
    blogs: allBlogs,
  });
});

// ------------- AUTH ROUTERS ------------- //

router.get("/signin", (req, res) => {
  return res.render("signin");
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.post("/signup", async (req, res) => {
  const { fullName, email, password } = req.body;

  await User.create({
    fullName,
    email,
    password,
  });

  return res.redirect("signin");
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await User.matchPasswordAndGenerateToken(email, password);

    return res.cookie("token", token).redirect("/");
  } catch (error) {
    return res.render("signin", {
      error: "Incorrect email or password",
    });
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("token").redirect("signin");
});

// ------------- MY BLOG ROUTERS ------------- //
router.get("/my-blogs", async (req, res) => {
  const blogs = await Blog.find({ createdBy: req.user._id })
      .populate("createdBy", "fullName")
      .sort({ createdAt: -1 });

  return res.render("myBlogs", {
    user: req.user,
    blogs,
  });
});

// ------------- BLOG ROUTERS ------------- //
router.get("/add-new", (req, res) => {
  return res.render("addBlog", {
    user: req.user,
  });
});

router.post("/blog", upload.single("coverImage"), async (req, res) => {
  const { title, body } = req.body;

  const blog = await Blog.create({
    title,
    body,
    coverImageUrl: `/uploads/${req.file.filename}`,
    createdBy: req.user._id,
  });

  return res.redirect(`/${blog._id}`);
});

router.get("/:id", async (req, res) => {
  // fetch and populate creator info so template can access fullName
  const blog = await Blog.findById(req.params.id).populate(
    "createdBy",
    "fullName",
  );

  // fetch latest 5 comments, sorted by newest first
  const comments = await Comment.find({ blogId: req.params.id })
    .populate("createdBy", "fullName")
    .sort({ createdAt: -1 })
    .limit(5);

  blog.comments = comments;

  return res.render("individualBlog", {
    user: req.user,
    blog,
  });
});

router.post("/blogs/:blogId/comment", async (req, res) => {
  await Comment.create({
    content: req.body.content,
    blogId: req.params.blogId,
    createdBy: req.user._id,
  });

  return res.redirect(`/${req.params.blogId}`);
});


module.exports = router;
