const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},

		userName: {
			type: String,
			required: true,
			unique: true,
		},

		password: {
			type: String,
			required: true,
			
		},

		email: {
			type: String,
			required: true,
			unique: true,
		},

		currentlyPlaying: { 
			type: String,
			default: "",
		},

		profileImage: {
			type: String,
			default: "",
		},

		location: {
			type: String,
			default: "" 
		},

		savedPosts : {
			type: Array,
			default: [],
		},

		aboutMe: {
			type: String,
			default: ""

		}
	},
	{
		timestamps: true,
	},
);
const User = mongoose.model("User", userSchema);

module.exports = User;
