const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const User = require("../models/User");

// @desc    Register User
// @route   POST /api/v1/auth/register
// @access  Public
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  //Create User
  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  sendTokenResponse(user, 200, res);
});

// @desc    Login User
// @route   POST /api/v1/auth/login
// @access  Private
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate Email & Password
  if (!email || !password) {
    return next(new ErrorResponse("Please Provide an Email and Password", 400));
  }

  // Check for user
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorResponse("Invalid Credentials", 401));
  }

  // Check if password matches
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return next(new ErrorResponse("Invalid Credentials", 401));
  }
  sendTokenResponse(user, 200, res);
});

// @desc    Get current logged in user
// @route   POST /api/v1/auth/login
// @access  Private
exports.getMe = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({ success: true, data: user });
});

// @desc    Forgot Password
// @route   POST /api/v1/auth/forgotpassword
// @access  Public
exports.forgotPassword = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new ErrorResponse("There is no user with that email", 404));
  }

  // Get reset token
  const resetToken = user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });
  res.status(200).json({ success: true, data: user });
});

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  // Create Token
  const token = user.getSignedJwtToken();
  const options = {
    expire: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV) {
    options.secure = true;
  }
  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({ success: true, token });
};
