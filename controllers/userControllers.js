import User from '../models/userModel.js'

export const getUserIndex = async (req, res) => {
  try {
    console.log('try')
    res.render('user/Index')
  } catch (err) {
    console.log(err)
    return err
  }
}
