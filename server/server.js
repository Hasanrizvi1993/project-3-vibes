const path = require("path");
require("dotenv").config({ path: "../.env" });

/* ====== External Modules  ====== */
const express = require("express");
const cors = require("cors");

/* ====== Internal Modules  ====== */

/* ====== Instanced Modules  ====== */
const app = express();
const routes = require("./routes");
const postRouter = require("./routes/posts");
const userRouter = require("./routes/users");
/* ====== System Variables  ====== */

/* ====== App Configuration  ====== */

const config = require("@vibes/config");
// const { domainToASCII } = require("url");
// const { Router } = require("express");
// please explain what this is for??

/* ==== Middleware ==== */
app.use(cors());
app.use(express.static(path.join("build")));
//helps us read body, including body with Postman and req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* ====== Routes & controllers ====== */
app.use("/api", routes);

app.use("/api/posts", postRouter);

app.use("/api/users", userRouter);

app.all("/api/*", (req, res, next) => {
	res.send("these apis are not working");
});

app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

/* ====== Server Listener  ====== */
app.listen(config.PORT, () => {
	console.log(`vibes is live at http://localhost${config.PORT}`);
});
