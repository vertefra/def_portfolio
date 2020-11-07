import User from '../models/userModel.js'

export const getUserIndex = async (req, res) => {
  try {
    const user = await User.findOne({})
    console.log('User from mongo=> ', user)
    res.render('user/Index', { user })
  } catch (err) {
    res.send(err)
  }
}
