const UserModel = require('../models/user.model');
const { signUpErrors, signInErrors } = require('../utils/errors.utils');


module.exports.signUp = async (req, res) => {
  const {pseudo, email, password} = req.body
  console.log(pseudo, email, password)

  try {
    const user = await UserModel.create({pseudo, email, password });
    res.status(201).json({ user: user._id});
  }
  catch(err) {
    const errors = signUpErrors(err);
    res.status(200).send({ errors })
  }
}

module.exports.signUp2 = async (req, res) => {
  const pseudo = "test"
  const email = "rest@test.fr"
  const password = "monpassword"
  try {
    const user = await UserModel.create({ pseudo:'test2', email:'test2@test.fr', password:'monpassword2' });
    console.log("test", "test.fr", "monpassword")
    res.status(201).json({ user: user._id});
  }
  catch(err) {
    const errors = signUpErrors(err);
    res.status(200).send({ errors })
  }
}

module.exports.signIn = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await UserModel.login(email, password);
    res.status(200).json({ user: user._id})
  } catch (err){
    const errors = signInErrors(err);
    res.status(200).json({ errors });
  }
}

module.exports.logout = (req, res) => {
  res.redirect('/');
}