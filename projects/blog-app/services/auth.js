const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const createTokenForUser = (user) => {
  const payload = {
    _id: user._id,
    email: user.email,
    profileImage: user.profileImage,
    role: user.role,
    fullName: user.fullName,
  };

  const token = jwt.sign(payload, JWT_SECRET);

  return token;
};

const validateToken = (token) => {
  const payload = jwt.verify(token, JWT_SECRET);
  return payload;
};

module.exports = {
  createTokenForUser,
  validateToken,
};
