// module
const express = require('express');

const path = require('path');

const pageRouter = require(path.join(__dirname, 'page'));
// const apiRouter = require(path.join(__dirname, 'api'));

// initialization
const router = express.Router();

router.use("/", pageRouter);
// router.use("/api", apiRouter);

module.exports = router