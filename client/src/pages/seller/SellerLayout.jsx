import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AlignRight, X } from "lucide-react";
import toast from "react-hot-toast";

const SellerLayout = () => {
  const { axios, navigate, setIsSeller, products } = useAppContext();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showSidebar, setShowSidebar] = useState(false);
  const [newMessages, setNewMessages] = useState(0);

  const fetchMessages = async () => {
    try {
      const { data } = await axios.get("/api/message/list");
      if (data.success) {
        setNewMessages(data.messages.filter((msg) => !msg.isRead).length);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [newMessages, setNewMessages]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setSidebarCollapsed(true);
        setShowSidebar(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarLinks = [
    { name: "Add Product", path: "/seller", icon: assets.add_icon },
    {
      name: "Product List",
      path: "/seller/product-list",
      icon: assets.product_list_icon,
    },
    { name: "Orders", path: "/seller/orders", icon: assets.order_icon },
    { name: "Messages", path: "/seller/messages", icon: assets.message_icon },
  ];

  const logout = async () => {
    try {
      const { data } = await axios.get("/api/seller/logout");
      if (data.success) {
        toast.success(data.message);
        setIsSeller(false);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="bg-slate-50 overflow-hidden">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Aqua<span className="text-primary">Nest</span>
          </h2>
        </Link>
        <div className="flex items-center gap-4">
          <p className="text-gray-700 font-medium hidden sm:block">Hi! Admin</p>

          {/* Show Sidebar Button on Mobile */}
          {isMobile && (
            <button
              onClick={() => setShowSidebar(true)}
              className="text-2xl cursor-pointer text-primary font-bold transition-all hover:text-blue-800"
              aria-label="Open Navbar"
            >
              {showSidebar ? <X /> : <AlignRight />}
            </button>
          )}

          {/* Logout only on Desktop */}
          {!isMobile && (
            <button
              onClick={logout}
              className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-2 rounded-full font-medium shadow hover:scale-105 transition-transform"
            >
              Logout
            </button>
          )}
        </div>
      </header>

      {/* Mobile Overlay */}
      {isMobile && showSidebar && (
        <div
          onClick={() => setShowSidebar(false)}
          className="fixed inset-0 bg-black/30 z-30"
        ></div>
      )}

      {/* Layout: Sidebar + Content */}
      <div className="flex relative">
        {/* Sidebar */}
        <aside
          className={`${
            isMobile
              ? `fixed top-[70px] right-0 h-[calc(100vh-72px)] z-40 transition-transform duration-300 bg-white/20 backdrop-blur-xl shadow-lg border-l border-white/80 ${
                  showSidebar ? "translate-x-0" : "translate-x-full"
                } w-64`
              : `sticky top-[81px] transition-width duration-400 z-10 bg-white/80 backdrop-blur-xl border-r border-white/20 shadow-xl ${
                  sidebarCollapsed ? "w-24" : "w-64"
                }`
          } flex flex-col justify-between`}
        >
          {/* Top: Toggle + Links */}
          <div className="relative pt-2">
            {!isMobile && (
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="absolute cursor-pointer -right-3 top-2 w-6 h-6 bg-blue-500 text-white rounded-full md:flex items-center justify-center shadow text-xs z-20"
              >
                {sidebarCollapsed ? ">" : "<"}
              </button>
            )}

            {/* Navigation Links */}
            <nav className="mt-5 space-y-2 px-2">
              {sidebarLinks.map((item) => (
                <NavLink
                  end={item.path === "/seller"}
                  to={item.path}
                  key={item.name}
                  onClick={() => setShowSidebar(false)}
                  className={({ isActive }) =>
                    `flex items-center py-3 px-4 gap-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-blue-100 text-blue-600 font-medium"
                        : "hover:bg-gray-100 text-gray-700"
                    }`
                  }
                >
                  <img src={item.icon} alt="" className="w-5 h-5" />

                  <span
                    className={`text-sm md:${
                      sidebarCollapsed && "hidden"
                    } flex items-center  gap-2`}
                  >
                    {item.name}

                    {/* Show badge only for Messages link */}
                    {item.name === "Messages" && newMessages > 0 && (
                      <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                        {newMessages}
                      </span>
                    )}
                    {item.name === "Product List" && products.length > 0 && (
                      <span className="ml-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                        {products.length}
                      </span>
                    )}
                  </span>
                </NavLink>
              ))}
            </nav>

            {/* Logout in Sidebar for all devices */}
            <div className="mt-6 px-4">
              <button
                onClick={logout}
                className="w-full cursor-pointer md:hidden bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-2 rounded-lg text-sm shadow hover:scale-[1.02] transition-transform"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Bottom: Footer */}
          <div className="px-4 py-4 border-t border-gray-200 mt-auto">
            <div className="text-xs text-gray-500 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Online</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 w-full transition-all duration-300 overflow-hidden h-[calc(100vh-81px)] overflow-y-auto custom-scrollbar">
          <div className="p-4">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default SellerLayout;
