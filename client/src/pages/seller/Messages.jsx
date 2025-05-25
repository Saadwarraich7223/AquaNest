import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { MdDeleteForever } from "react-icons/md";
import { RefreshCcw } from "lucide-react";
import toast from "react-hot-toast";

const Messages = () => {
  const [expandedMessage, setExpandedMessage] = useState(null);
  const { axios } = useAppContext();
  const [messages, setMessages] = useState([]);

  // const messages = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     email: "john.doe@example.com",
  //     message:
  //       "Hello! I'm interested in your aquarium products. Could you please provide more information about the pricing and availability of your premium fish tanks? I'm particularly looking for something around 50 gallons with LED lighting system. Also, do you offer installation services?",
  //     createdAt: "2024-01-15T10:30:00Z",
  //     read: false,
  //   },
  //   {
  //     id: 2,
  //     name: "Sarah Johnson",
  //     email: "sarah.j@email.com",
  //     message:
  //       "I recently purchased a filter system from your store and I'm having some issues with the installation. The manual isn't very clear about the setup process. Could someone help me with this?",
  //     createdAt: "2024-01-14T14:22:00Z",
  //     read: true,
  //   },
  //   {
  //     id: 3,
  //     name: "Mike Wilson",
  //     email: "mike.wilson@company.com",
  //     message:
  //       "Great service! The delivery was fast and the products are exactly as described. I'll definitely be ordering again soon. Thanks for the excellent customer service.",
  //     createdAt: "2024-01-13T09:15:00Z",
  //     read: true,
  //   },
  //   {
  //     id: 4,
  //     name: "Emily Davis",
  //     email: "emily.davis@gmail.com",
  //     message:
  //       "Do you have any discounts available for bulk orders? I'm looking to set up multiple aquariums for my office space and would need around 5-6 complete setups. Please let me know about any special pricing options.",
  //     createdAt: "2024-01-12T16:45:00Z",
  //     read: false,
  //   },
  // ];

  const toggleMessage = async (message) => {
    const { _id, isRead } = message;

    // Toggle expand/collapse
    setExpandedMessage((prev) => (prev === _id ? null : _id));

    // Only call readMessage if it's unread
    if (!isRead) {
      await readMessage(_id);
      // Update local state to reflect read
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg._id === _id ? { ...msg, isRead: true } : msg
        )
      );
    }
  };

  const getMessages = async () => {
    try {
      const { data } = await axios.get("/api/message/list");
      if (data.success) {
        const sortedMessages = data.messages.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setMessages(sortedMessages);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const readMessage = async (msg) => {
    if (msg.isRead) return;
    try {
      const { data } = await axios.post("/api/message/read", { id: msg._id });
      if (data.success) {
        toast.success(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const [isRotating, setIsRotating] = useState(false);

  const reloadMessages = () => {
    getMessages();
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 1000);
  };
  const deleteMessage = async (id) => {
    try {
      const { data } = await axios.post("/api/message/delete", { id });
      if (data.success) {
        toast.success(data.message);
        getMessages();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="max-w-4xl overflow-y-scroll no-scrollbar  mx-auto p-6 bg-gray-50">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Messages</h1>
          <button
            onClick={() => reloadMessages()}
            className="p-2 cursor-pointer"
          >
            <RefreshCcw
              className={`w-6 h-6 transition-transform ${
                isRotating ? "animate-spin" : ""
              }`}
            />
          </button>
        </div>
        <p className="text-gray-600">
          Click on any message to expand and view full details
        </p>
      </div>

      <div className="space-y-4">
        {messages?.map((msg) => (
          <div
            key={msg._id}
            className={`border rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-200 ${
              msg.isRead
                ? "bg-white border-gray-200"
                : "bg-blue-50 border-blue-200"
            }`}
            onClick={() => {
              toggleMessage(msg);
              readMessage(msg);
            }}
          >
            {/* Unread indicator */}
            {!msg.isRead && (
              <div className="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full"></div>
            )}

            <div className="p-6">
              {/* Header */}
              <div className="flex items-start  justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/70 rounded-full flex items-center justify-center text-white font-semibold">
                      {msg.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">
                        {msg.name}
                      </h3>
                      <p className="text-gray-500 text-sm">{msg.email}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className={`text-gray-400 text-xl transform transition-transform duration-200 ${
                      expandedMessage === msg._id ? "rotate-180" : ""
                    }`}
                  >
                    ↓
                  </span>
                  <button
                    onClick={() => deleteMessage(msg._id)}
                    className="cursor-pointer text-red-700 px-1 py-1 rounded bg-gray-300"
                  >
                    <MdDeleteForever size={22} />
                  </button>
                </div>
              </div>

              {/* Status and Date */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    msg.isRead
                      ? "bg-gray-100 text-gray-600"
                      : "bg-primary-dull text-white"
                  }`}
                >
                  {msg.isRead ? "Read" : "Unread"}
                </span>
                <span className="text-gray-500 text-sm">
                  {formatDate(msg.createdAt)}
                </span>
              </div>

              {/* Expandable Message Content */}
              {expandedMessage === msg._id && (
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-medium text-gray-700 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Message Details
                  </h4>
                  <div className="bg-gray-50 rounded-lg p-4 border">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {msg.message}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {messages.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white text-2xl">📫</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No Messages
          </h3>
          <p className="text-gray-500">You don't have any messages yet.</p>
        </div>
      )}
    </div>
  );
};

export default Messages;
