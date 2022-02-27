const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var favoriteArtistsSchema = new Schema({ name: String });

const userProfileSchema = new Schema({
	aboutMe: { type: String },
	profileimage: { type: URL },
	favoriteArtists: [favoriteArtistsSchema],
});

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

		userProfile: [userProfileSchema],

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
