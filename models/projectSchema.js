import mongoose from 'mongoose'

const projectSchema = mongoose.Schema({
  projectName: { type: String },
  description: { type: String },
  img: { type: String },
  github: { type: String },
  live: { type: String },
  tags: [
    {
      tagName: String,
    },
  ],
})

const User = mongoose.model('User', userSchema)

export default User
