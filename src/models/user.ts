import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    default: 18
  },
  pet_name: {
    type: String,
    required: true
  },
  degree: {
    type: [String],
    required: true
  },
});

const User = mongoose.model("User", userSchema)
export default User;
