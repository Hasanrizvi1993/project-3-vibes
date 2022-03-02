const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
	{
		title: { type: String, required: true },
		body: { type: String, required: true },
		userId: { type: String, required: true },
		date: { type: Date },
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Post", postSchema);

//we have pulled out comments successfully. because we were not able to get the
//embedded comment data to work
