import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";
import { Link, NavLink, Outlet } from "react-router-dom";
import toast from "react-hot-toast";

const SellerLayout = () => {
  const { axios, navigate, setIsSeller } = useAppContext();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) setSidebarCollapsed(true);
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
    <div className=" bg-slate-50 overflow-hidden">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Aqua<span className="text-primary">Nest</span>
          </h2>
        </Link>
        <div className="flex items-center gap-4">
          <p className="text-gray-700 font-medium hidden sm:block">Hi! Admin</p>
          <button
            onClick={logout}
            className="bg-gradient-to-r cursor-pointer from-red-500 to-pink-600 text-white px-6 py-2 rounded-full font-medium shadow hover:scale-105 transition-transform"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Sidebar + Main Content Wrapper */}
      <div className="flex transition-all duration-500">
        {/* Sidebar */}
        <aside
          className={` sticky top-[81px] z-10 bg-white/80 backdrop-blur-xl border-r border-white/20 shadow-xl  transition-all duration-300 ${
            sidebarCollapsed ? "w-24" : "w-64"
          } flex flex-col justify-between`}
        >
          {/* Top: Toggle + Links */}
          <div className="relative pt-6">
            {/* Toggle Button */}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="absolute -right-3 hidden top-2 w-6 h-6 bg-blue-500 text-white rounded-full md:flex items-center justify-center shadow text-xs z-20"
            >
              {sidebarCollapsed ? ">" : "<"}
            </button>

            {/* Links */}
            <nav className="mt-5 space-y-2 px-2">
              {sidebarLinks.map((item) => (
                <NavLink
                  end={item.path === "/seller"}
                  to={item.path}
                  key={item.name}
                  className={({ isActive }) =>
                    `flex items-center py-3 px-4 gap-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-blue-100 text-blue-600 font-medium"
                        : "hover:bg-gray-100 text-gray-700"
                    }`
                  }
                >
                  <img src={item.icon} alt="" className="w-5 h-5" />
                  {!sidebarCollapsed && (
                    <span className="text-sm">{item.name}</span>
                  )}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Bottom: Footer */}
          <div className="px-4 py-4 border-t border-gray-200">
            <div className="text-xs text-gray-500 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              {!sidebarCollapsed && <span>Online</span>}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main
          className={`flex-1 transition-all duration-300 overflow-hidden h-[calc(100vh-81px)] overflow-y-auto custom-scrollbar`}
        >
          <div className="p-4">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default SellerLayout;
