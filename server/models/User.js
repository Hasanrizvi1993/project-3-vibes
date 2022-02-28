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
			//specifies default path selection behavior aka false excludes "password" from query results by default
			select: false,
		},

		email: {
			type: String,
			required: true,
			unique: true,
		},

		currentlyPlaying: { type: String },

		profileImage: {
			type: String,
			default: "",
		},

		location: {
			type: String,
		},
	},
	{
		timestamps: true,
	},
);
const User = mongoose.model("User", userSchema);

module.exports = User;
