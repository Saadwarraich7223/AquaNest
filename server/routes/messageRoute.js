import express from "express";
import {
  deleteMessage,
  messageList,
  readMessage,
  sendMessage,
} from "../controllers/messageController.js";
import authSeller from "../middlewares/authSeller.js";

const messageRouter = express.Router();

messageRouter.post("/send", sendMessage);
messageRouter.get("/list", authSeller, messageList);
messageRouter.post("/delete", authSeller, deleteMessage);
messageRouter.post("/read", authSeller, readMessage);

export default messageRouter;
