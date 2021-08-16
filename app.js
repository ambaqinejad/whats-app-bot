// modules
const http = require("http");
const express = require("express")
require("dotenv").config();
const socketIO = require("socket.io");

const path = require("path");

const indexRouter = require(path.join(__dirname, "routes"));

// initialization
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const server = http.createServer(app);
const io = socketIO(server);


server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});