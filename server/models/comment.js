const mongoose = require("mongoose");
const Post = require("./Post");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
	body: { type: String, required: true },
});

module.exports = mongoose.model("Comment", commentSchema);
