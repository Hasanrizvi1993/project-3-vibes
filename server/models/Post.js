const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
	body: { type: String, required: true },
});

const postSchema = new Schema(
	{
		_id: { type: Schema.Types.ObjectId },
		name: { type: String, required: true },
		userName: { type: String, required: true, unique: true },
		comments: [commentSchema],
		likes: [{ type: String }],
		dislikes: [{ type: String }],
		title: { type: String, required: true },
		body: { type: String, required: true },
		date: { type: Date },
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Post", postSchema);
