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
import OrderCard from "../components/OrderCard";

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
  const [orderType, setOrderType] = useState("Pending Orders");

  const fetchMyOrders = async () => {
    try {
      const { data } = await axios.get("/api/order/user");
      if (data.success) {
        setMyOrders(data.orders);
      } else {
        toast.error("No orders placed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const pendingOrders = myOrders.filter(
    (order) => order.status !== "Delivered"
  );
  const historyOrders = myOrders.filter(
    (order) => order.status === "Delivered"
  );

  useEffect(() => {
    if (user) {
      fetchMyOrders();
    }
  }, [user]);

  return (
    <div className="mt-16 pb-16">
      <div className="flex flex-col md:flex-row items-start  md:items-center md:justify-between w-full gap-4 mb-8">
        <div className="flex flex-col items-start gap-2  w-max ">
          <p className="text-2xl font-medium ">My Orders</p>
          <div className="w-20 h-1 bg-primary rounded-full "></div>
        </div>
        <select
          onChange={(e) => setOrderType(e.target.value)}
          value={orderType}
          className=" px-4 py-2.5 bg-white text-gray-700 border border-gray-300 rounded-lg shadow-md focus:outline-none   focus:shadow-primary/20 transition-all duration-200 cursor-pointer "
          name=""
          id=""
        >
          <option value="Pending Orders">🕓 Pending Orders</option>
          <option value="History">📜 History</option>
        </select>
      </div>
      {myOrders.length > 0 ? (
        orderType === "Pending Orders" ? (
          pendingOrders.length > 0 ? (
            pendingOrders.map((order, index) => (
              <OrderCard order={order} currency={currency} key={index} />
            ))
          ) : (
            <NoOrders text="No Pending Orders" navigate={navigate} />
          )
        ) : historyOrders.length > 0 ? (
          historyOrders.map((order, index) => (
            <OrderCard order={order} currency={currency} key={index} />
          ))
        ) : (
          <NoOrders text="No Delivered Orders" navigate={navigate} />
        )
      ) : (
        <NoOrders text={"No orders Yet"} navigate={navigate} />
      )}
    </div>
  );
};

export default MyOrders;
