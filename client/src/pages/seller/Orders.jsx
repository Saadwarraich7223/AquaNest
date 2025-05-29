import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { BoxIcon, PackageX, TrendingUp } from "lucide-react";
import toast from "react-hot-toast";

const Orders = () => {
  const { currency, axios, isSeller } = useAppContext();
  const [orderType, setOrderType] = useState("Pending Orders");

  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const { data } = await axios.get("/api/order/seller");

      if (data.success) {
        setOrders(data.orders);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeHandler = async (e, id) => {
    try {
      const status = e.target.value;

      const { data } = await axios.post("/api/order/status", {
        status: status,
        id,
      });

      if (data.success) {
        fetchOrders();
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const pendingOrders = orders.filter((order) => order.status !== "Delivered");
  const historyOrders = orders.filter((order) => order.status === "Delivered");

  useEffect(() => {
    if (isSeller) {
      fetchOrders();
    }
  }, [isSeller]);

  return (
    <div className="overflow-y-scroll no-scrollbar flex-1   ">
      <div className="md:p-10 p-4 space-y-4">
        <div className="flex flex-col md:flex-row items-start  md:items-center md:justify-between w-full gap-4 mb-8">
          <h2 className="text-lg font-medium">Orders List</h2>
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
        {orders.length > 0 ? (
          orderType === "Pending Orders" ? (
            pendingOrders.length > 0 ? (
              pendingOrders.map((order, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row  md:items-center gap-5 p-5 max-w-4xl rounded-md border justify-between border-gray-300 "
                >
                  <div className="flex gap-5 max-w-80">
                    <BoxIcon className="w-10 h-10 text-gray-400" />
                    <div>
                      {order.items.map((item, index) => (
                        <div key={index} className="flex flex-col ">
                          <p className="font-medium">
                            {item.product?.name}{" "}
                            <span className="text-primary ">
                              x {item.quantity}
                            </span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-sm md:text-base text-black/60">
                    <p className="text-black/80">
                      {order.address.firstName} {order.address.lastName}
                    </p>
                    <p>
                      {order.address.street}, {order.address.city}
                    </p>
                    <p>
                      {order.address.state},{order.address.zipcode},{" "}
                      {order.address.country}
                    </p>
                    <p></p>
                    <p>{order.address.phone}</p>
                  </div>

                  <p className="font-medium text-lg my-auto">
                    {currency} {order.amount}
                  </p>

                  <div className="flex flex-col text-sm md:text-base text-black/60">
                    <p>Method: {order.paymentType}</p>
                    <p>
                      Date: {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                    <p>Payment: {order.isPayed ? "Paid" : "Not Paid"}</p>
                    <select
                      onChange={(e) => onChangeHandler(e, order._id)}
                      value={order.status}
                      disabled={order.status === "Delivered"}
                      className={`w-full cursor-pointer py-2.5 px-2 shadow-sm border rounded outline-none transition 
                          ${
                            order.status === "Delivered"
                              ? "bg-gray-100 text-gray-400 appearance-none cursor-not-allowed border-gray-300"
                              : "text-primary-dull border-primary/30"
                          }`}
                      name=""
                      id=""
                    >
                      <option value="Order Placed">Order Placed</option>
                      <option value="Being Delivered">Being Delivered</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </div>
                </div>
              ))
            ) : (
              <EmptyOrders
                text="No Pending Orders Yet"
                discription={
                  "You haven’t received any orders. Once you do, they’ll show up here"
                }
              />
            )
          ) : historyOrders.length > 0 ? (
            historyOrders.map((order, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row  md:items-center gap-5 p-5 max-w-4xl rounded-md border justify-between border-gray-300 "
              >
                <div className="flex gap-5 max-w-80">
                  <BoxIcon className="w-10 h-10 text-gray-400" />
                  <div>
                    {order.items.map((item, index) => (
                      <div key={index} className="flex flex-col ">
                        <p className="font-medium">
                          {item.product?.name}{" "}
                          <span className="text-primary ">
                            x {item.quantity}
                          </span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-sm md:text-base text-black/60">
                  <p className="text-black/80">
                    {order.address.firstName} {order.address.lastName}
                  </p>
                  <p>
                    {order.address.street}, {order.address.city}
                  </p>
                  <p>
                    {order.address.state},{order.address.zipcode},{" "}
                    {order.address.country}
                  </p>
                  <p></p>
                  <p>{order.address.phone}</p>
                </div>

                <p className="font-medium text-lg my-auto">
                  {currency} {order.amount}
                </p>

                <div className="flex flex-col text-sm md:text-base text-black/60">
                  <p>Method: {order.paymentType}</p>
                  <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                  <p>Payment: {order.isPayed ? "Paid" : "Not Paid"}</p>
                  <select
                    onChange={(e) => onChangeHandler(e, order._id)}
                    value={order.status}
                    disabled={order.status === "Delivered"}
                    className={`w-full cursor-pointer py-2.5 px-2 shadow-sm border rounded outline-none transition 
                          ${
                            order.status === "Delivered"
                              ? "bg-gray-100 text-gray-400 appearance-none cursor-not-allowed border-gray-300"
                              : "text-primary-dull border-primary/30"
                          }`}
                    name=""
                    id=""
                  >
                    <option value="Order Placed">Order Placed</option>
                    <option value="Being Delivered">Being Delivered</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>
              </div>
            ))
          ) : (
            <EmptyOrders
              text="No Delivered Orders Yet"
              discription={
                "You haven’t delivered any orders. Once you do, they’ll show up here"
              }
            />
          )
        ) : (
          <EmptyOrders
            text="No Orders Yet"
            discription={
              "You haven’t received any orders. Once you do, they’ll show up here"
            }
          />
        )}
      </div>
    </div>
  );
};

const EmptyOrders = ({ text, discription }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
      <PackageX className="w-20 h-20 text-gray-400 mb-6" /> {/* or <Inbox /> */}
      <h2 className="text-xl font-semibold text-gray-700 mb-2">{text}</h2>
      <p className="text-gray-500">{discription}</p>
    </div>
  );
};

export default Orders;
