import express from "express";

import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./configs/db.js";
import "dotenv/config";

import userRouter from "./routes/userRoute.js";
import sellerRouter from "./routes/sellerRoute.js";
import connectCloudinary from "./configs/cloudinary.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import addressRouter from "./routes/addressRoute.js";
import orderRouter from "./routes/orderRoute.js";
import { stripeWebhooks } from "./controllers/orderController.js";
import messageRouter from "./routes/messageRoute.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
await connectDB();

// Connect to Cloudinary
await connectCloudinary();

//Allow multiple origins
const allowedOrigins = [
  "http://localhost:5173",
  "https://aqua-nest-saadwarraich7223s-projects.vercel.app",
];

app.post("/stripe", express.raw({ type: "application/json" }), stripeWebhooks);

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

// Routes

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/user", userRouter);
app.use("/api/seller", sellerRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/address", addressRouter);
app.use("/api/order", orderRouter);
app.use("/api/message", messageRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
