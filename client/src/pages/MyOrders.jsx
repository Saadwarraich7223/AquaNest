import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import {
  CircleCheck,
  CircleX,
  PackageCheck,
  Truck,
  CheckCheck,
  Clock,
} from "lucide-react";
import toast from "react-hot-toast";

import { motion } from "framer-motion";
import { FaFish, FaShoppingBag } from "react-icons/fa";

const NoOrders = ({ navigate }) => {
  return (
    <div className=" flex items-center py-10 justify-center shadow-lg bg-slate-100">
      <motion.div
        className="text-center max-w-md mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Icon Container */}
        <motion.div
          className="relative mb-6"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Background Circle */}
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto relative">
            {/* Main Shopping Bag Icon */}
            <FaShoppingBag className="text-3xl text-blue-400" />

            {/* Floating Fish Icon */}
            <motion.div
              className="absolute -top-2 -right-2"
              animate={{
                y: [-2, 2, -2],
                rotate: [-5, 5, -5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                <FaFish className="text-sm text-teal-500" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            No Orders Yet
          </h3>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Your aquatic adventure is waiting to begin! Browse our collection of
            beautiful fish and aquarium essentials.
          </p>

          <motion.button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/products")}
          >
            <span>Start Shopping</span>
            <FaFish className="text-sm" />
          </motion.button>
        </motion.div>

        {/* Subtle decorative bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-200 rounded-full opacity-30"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${30 + Math.random() * 40}%`,
              }}
              animate={{
                y: [-10, -20, -10],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { currency, axios, user, navigate } = useAppContext();

  const fetchMyOrders = async () => {
    try {
      const { data } = await axios.get("/api/order/user");
      if (data.success) {
        setMyOrders(data.orders);
        console.log(data.orders);
      } else {
        toast.error("No orders placed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchMyOrders();
    }
  }, [user]);

  return (
    <div className="mt-16 pb-16">
      <div className="flex flex-col items-start gap-2 w-max mb-8">
        <p className="text-2xl font-medium ">My Orders</p>
        <div className="w-20 h-1 bg-primary rounded-full "></div>
      </div>
      {myOrders.length > 0 ? (
        myOrders.map((order, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-4 mb-10 py-5 max-w-4xl "
          >
            <p className="flex justify-between md:items-center text-gray-400 md:font-medium max-md:flex-col">
              <span>OrderId : {order._id}</span>
              <span>Payment : {order.paymentType}</span>
              <span>
                Total Amount : {currency}
                {order.amount}
              </span>
            </p>
            {order.items.map((item, index) => (
              <div
                key={index}
                className={`relative bg-white text-gray-500/70 ${
                  order.items.length !== index + 1 && "border-b"
                } border-gray-300 flex flex-col md:flex-row md:items-center justify-between p-4 py-5 gap-5 md:gap-16 w-full max-w-4xl`}
              >
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="bg-primary/10 p-4 rounded-lg  gap-4">
                    <img
                      src={item.product?.image[0]}
                      alt=""
                      className="w-16 h-16"
                    />
                  </div>
                  <div className="ml-4">
                    <h2 className="font-medium text-xl text-gray-800">
                      {item.product?.name}
                    </h2>
                    <p>Category : {item.product?.category}</p>
                  </div>
                </div>

                <div className="flex flex-col justify-center md:ml-8 h-20 mb-4 md:mb-0  ">
                  <p>Quantity : {item.quantity || "1"}</p>

                  <p>Date : {new Date(order.createdAt).toLocaleDateString()}</p>
                  <p className="mt-auto flex items-center gap-2 text-md text-gray-600">
                    <span className="text-primary-dull">
                      {order.status === "Order Placed" && (
                        <PackageCheck className="w-5 h-5 text-blue-500" />
                      )}
                      {order.status === "Being Delivered" && (
                        <Truck className="w-5 h-5  text-yellow-500 animate-bounce" />
                      )}
                      {order.status === "Delivered" && (
                        <CheckCheck className="w-5 h-5  text-green-600" />
                      )}
                    </span>
                    <span
                      className={`font-medium ${
                        order.status === "Delivered"
                          ? "text-green-600"
                          : order.status === "Being Delivered"
                          ? "text-yellow-600"
                          : "text-blue-600"
                      }`}
                    >
                      {order.status}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col ">
                  <p className="text-primary/70 text-lg font-medium">
                    Amount : {currency}
                    {item.product?.offerPrice * item.quantity}
                  </p>
                  <p
                    className={`${
                      order.isPayed ? "text-green-500/80" : "text-red-500/80"
                    }   font-medium flex gap-1 flex-row`}
                  >
                    <span>
                      {order.isPayed ? (
                        <CircleCheck width={20} />
                      ) : (
                        <CircleX width={20} />
                      )}
                    </span>
                    {order.isPayed ? "Paid" : "Not Paid"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))
      ) : (
        <NoOrders navigate={navigate} />
      )}
    </div>
  );
};

export default MyOrders;
