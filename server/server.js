/* ====== External Modules  ====== */
const express = require("express");
/* ====== Internal Modules  ====== */

/* ====== Instanced Modules  ====== */
const app = express();

/* ====== System Variables  ====== */

/* ====== App Configuration  ====== */
const config = require("@vibes/config");

/* ====== Routes & controllers ====== */

	
/* ====== Server Listener  ====== */
app.listen(config.PORT, () =>{
    console.log(`vibes is live at http://localhost${config.PORT}`);
});