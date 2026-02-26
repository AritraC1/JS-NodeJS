const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const connectToMongoDb = require("./connection/mongoDbConnection");
const allRoutes = require("./routes/allRoutes");
const { checkForAuthCookie } = require("./middlewares/auth");

dotenv.config();

// Declarations
const app = express();
const PORT_NUMBER = process.env.PORT;

// DB Connection
connectToMongoDb();

// SSR
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthCookie("token"));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", allRoutes);

// Start Server
app.listen(PORT_NUMBER, () => {
  console.log(`The server is running on localhost:${PORT_NUMBER}`);
});
