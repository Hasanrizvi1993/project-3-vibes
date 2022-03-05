require("dotenv").config({ path: "../.env" });

/* ====== External Modules  ====== */
const express = require("express");
const cors = require("cors");
const path = require("path");

/* ====== Internal Modules  ====== */

/* ====== Instanced Modules  ====== */
const app = express();
const routes = require("./routes");
const postRouter = require("./routes/posts");
const userRouter = require("./routes/users");

const authRouter = require("./routes/auth")

const commentRouter = require("./routes/comments");

/* ====== System Variables  ====== */

/* ====== App Configuration  ====== */

const config = require("@vibes/config");
// const { domainToASCII } = require("url");
// const { Router } = require("express");
// please explain what this is for??

/* ==== Middleware ==== */
app.use(cors());

app.use(express.static(path.join("build"))); ///COMMENTING OUT TO DEBUG

//helps us read body, including body with Postman and req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

/* ====== Routes & controllers ====== */
app.use("/api", routes);

app.use("/api/posts", postRouter);

app.use("/api/users", userRouter);

app.use("/api/auth", authRouter)


app.use("/api/comments", commentRouter);


/*app.all("/api/*", (req, res, next) => {
	res.send("these apis are not working");
});
8?

app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, "build", "index.html"));
}); // COMMENTING OUT FOR DEBUGGING


/* ====== Server Listener  ====== */
app.listen(config.PORT, () => {
	console.log(`vibes is live at http://localhost${config.PORT}`);
});
