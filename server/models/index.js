const mongoose = require("mongoose");
const db = mongoose.connection;
const dbUrl = process.env.DATABASE_URL;

mongoose
	.connect(dbUrl)
	.then(() => {
		console.log(`MongoDB connected at ${db.host}:${db.port}! Success! `);
	})
	.catch((err) => console.log(`failed mongodb at Error: ${err}`));

module.exports = {
	User: require("./User"),
	Post: require("./Post"),
};
