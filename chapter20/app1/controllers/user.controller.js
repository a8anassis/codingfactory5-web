const User = require('../models/user.model')


exports.findAll = async(req, res) => {
  console.log("Find all users");

  try {
    const result = await User.find();
    res.status(200).json({data: result});
  } catch (err) {
    console.log(`Problem in reading users, ${err}`)
  }
}

exports.findOne = async(req, res) => {
  console.log("Find a user");

  const username = req.params.username;
  try {
    const result = await User.findOne({ username: username})
    res.status(200).json({data: result});
  } catch(err) {
    console.log(`Problem in reading user, ${err}`)
  }
}