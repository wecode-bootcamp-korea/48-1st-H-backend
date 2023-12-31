const express = require("express");
const threadController = require("../controllers/threadController");
const threadRouter = express.Router(); 
const { loginRequired } = require('../utils/tokenValidate')

threadRouter.post("/post", loginRequired,threadController.threadCreate);
threadRouter.get("/post", loginRequired, threadController.showProfileAndNickname);

module.exports = { threadRouter };
