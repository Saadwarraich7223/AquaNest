import React from "react";
import {
  CircleCheck,
  CircleX,
  PackageCheck,
  Truck,
  CheckCheck,
  Clock,
} from "lucide-react";

const OrderCard = ({ order, currency, index }) => {
  return (
    <div
      key={index}
      className="border border-gray-300 rounded-lg p-4 mb-10 py-5 max-w-4xl "
    >
      <p className="flex justify-between md:items-center text-gray-400 md:font-medium max-md:flex-col">
        <span>OrderId : {order._id}</span>
        <span>Payment : {order.paymentType}</span>
        <span>
          Total Amount : {currency} {order.amount}
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
              <img src={item.product?.image[0]} alt="" className="w-16 h-16" />
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
            <p className="text-primary text-md font-bold">
              Amount : {currency} {item.product?.offerPrice * item.quantity}
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
  );
};

export default OrderCard;
