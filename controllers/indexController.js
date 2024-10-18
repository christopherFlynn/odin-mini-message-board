// controllers/indexController.js

const asyncHandler = require("express-async-handler");

const getMessages = asyncHandler(async (req, res) => {
  //const messages = await db.getMessages();

  if (!messages) {
  }

  //for loop each message into a variable and send to send
  //Format message
  res.send("Hello World!");
});

module.exports = { getMessages };
