import User from '../models/userModel.js'

export const getAdminIndex = async (req, res) => {
  try {
    const user = await User.findOne({})
    res.render('admin/Index', { user })
  } catch (err) {
    console.log(err)
  }
}
