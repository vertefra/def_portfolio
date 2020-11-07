import User from '../models/userModel.js'

export const getUserInfo = async (req, res) => {
  try {
    console.log('try')
    const user = await User.getUserByID(1)
    console.log(user)
    res.send('ok')
  } catch (err) {
    console.log(err)
    return err
  }
}
