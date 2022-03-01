// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// // const commentSchema = new Schema({
// // 	body: { type: String, required: true },
// // });

// const postSchema = new Schema(
// 	{
// 		// _id: { type: Schema.Types.ObjectId },
// 		name: { type: String },
// 		// userName: { type: String, required: true, unique: true },
// 		// comments: [commentSchema],
// 		// likes: [{ type: String }],
// 		// dislikes: [{ type: String }],
// 		// title: { type: String, required: true },
// 		// body: { type: String, required: true },
// 		// date: { type: Date },
// 	},
// 	// {
// 	// 	timestamps: true,
// 	// },
// );

// module.exports = mongoose.model("Post", postSchema);
// // module.exports = mongoose.model("Comment", commentSchema);
// 2/27 code - Hasan

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
	name: { type: String, required: true },
});

const postSchema = new Schema(
	{
		title: { type: String, required: true },
		body: { type: String, required: true },
		date: { type: Date },
		comments: [commentSchema],
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Post", postSchema);
module.exports = mongoose.model("Comment", commentSchema);
//we have pulled out comments successfully. because we were not able to get the 
//embedded comment data to work 

