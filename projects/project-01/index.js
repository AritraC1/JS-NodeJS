const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const allRoutes = require("./routes/allRoutes");

dotenv.config();

// Declarations
const app = express();
const PORT_NUMBER = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api", allRoutes);

app.listen(PORT_NUMBER, () => {
  console.log(`The server is running on localhost:${PORT_NUMBER}`);
});
