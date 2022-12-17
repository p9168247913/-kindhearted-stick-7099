const { Schema, model } = require("mongoose");



const UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  role: {
    type: String,
    enum: ["admin", "user", "instructor"],
    default: "user",
  },
  password: String,
  age: Number,
});

const UserModel = model("user", UserSchema);
module.exports = UserModel;