const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const multer = require("multer");

dotenv.config();

// Declarations
const app = express();
const PORT_NUMBER = process.env.PORT;
// const upload = multer({ dest: "projects/image-uploader/uploads/" }); // dest is file destination (Multer instance)

// storage
const storage = multer.diskStorage({
  // req - user's original request, file - file that needs tp be uploaded, cb - call back
  destination: function (req, file, cb) {
    // null - custom error or null
    cb(null, "projects/image-uploader/uploads/");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage })

// SSR
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false })); // helps in parsing form data

// Routes
app.get("/", (req, res) => {
  return res.render("homepage");
});

app.post("/upload", upload.single("profileImage"), (req, res) => {
  console.log(req.body);
  console.log(req.file);

  return res.redirect("/");
});

// Start Server
app.listen(PORT_NUMBER, () => {
  console.log(`The server is running successfully on localhost:${PORT_NUMBER}`);
});
