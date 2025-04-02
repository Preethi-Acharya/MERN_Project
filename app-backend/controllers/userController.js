const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const getProfile = async (req, res) => {
    console.log("userprofile*******", req.user);
  try {
    const userId = req.user.userId;

    // Find the user by their ID and exclude password field
    const user = await User.findById(userId).select('-password');
    console.log("user...", user);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getProfile };
