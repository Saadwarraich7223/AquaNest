import Message from "../models/Message.js";

//  add message : /api/message/add
export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      res.json({ success: false, message: "Missing Details" });
    }
    // const existingEmail = await Message.findOne({ email });
    // if (existingEmail) {
    //   res.json({
    //     success: false,
    //     message: "Can not send more than one message",
    //   });
    // }

    await Message.create({ name, email, message });
    res.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// message isRead toggle : /api/message/read
export const readMessage = async (req, res) => {
  try {
    const { id } = req.body;
    await Message.findByIdAndUpdate(id, { isRead: true });
    res.json({ success: true, message: "Message marked as read" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// get messageList : /api/message/list

export const messageList = async (req, res) => {
  try {
    const messages = await Message.find({}).sort({ createdAt: -1 });
    res.json({ success: true, messages });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// delete message : /api/message/delete

export const deleteMessage = async (req, res) => {
  try {
    const { id } = req.body;
    await Message.findByIdAndDelete(id);
    res.json({ success: true, message: "Message deleted" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
