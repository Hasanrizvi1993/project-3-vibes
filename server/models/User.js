const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
   firstName: {
       type: String,
       required: true,
       unique: true,
   },
   lastName: {
       type: String,
       required: true,
       unique: true,
   },
   email: {
       type: String,
       required: true,
       unique: true,
   },
   password: {
       type: String, 
       required: true,
       //specifies default path selection behavior aka false excludes "password" from query results by default
       select: false
   }
});
const User = mongoose.model("User", userSchema);

module.exports = User;