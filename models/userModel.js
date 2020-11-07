import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  name: { type: String },
  description: { type: String },
  email: { type: String },
  phone: { type: String },
  twitter: { type: String },
  linkedin: { type: String },
  github: { type: String },
})

const User = mongoose.model('User', userSchema)

User.prototype.getUserByID = async id => {
  try {
    const user = await User.findById(id)
    return user
  } catch (err) {
    return err
  }
}

export default User
