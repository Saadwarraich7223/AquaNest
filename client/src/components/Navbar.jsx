import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {
    user,
    setUser,
    setShowUserLogin,
    navigate,
    setSearchQuery,
    searchQuery,
    getCartCount,
    axios,
  } = useAppContext();
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logout = async () => {
    try {
      const { data } = await axios.get("/api/user/logout");
      if (data.success) {
        navigate("/");
        setUser(null);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-16 lg:px-20 py-4 max-w-[1440px] mx-auto">
        {/* Brand */}
        <NavLink to="/" onClick={() => setOpen(false)}>
          <h2
            className={`font-display text-2xl font-extrabold tracking-tight transition-colors duration-300 ${scrolled ? "text-on-surface" : "text-black/60"}`}
          >
            Aqua<span className="text-accent">Nest</span>
          </h2>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <NavLinks location={location} scrolled={scrolled} />

          <div
            className={`hidden xl:flex items-center gap-2 border rounded-lg overflow-hidden focus-within:border-accent/40 transition-all duration-300 ${scrolled ? "border-black/8" : "border-black/40"}`}
          >
            <input
              className={`py-2 px-4 w-48 bg-transparent text-sm outline-none font-mono transition-colors duration-300 ${scrolled ? "text-on-surface placeholder-on-surface-muted" : "text-black/40 placeholder-black/60"}`}
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                navigate("/products");
              }}
            />
            <button
              className={`p-2 mr-1 rounded transition-colors ${scrolled ? "bg-black/5 hover:bg-black/8" : "bg-black/10 hover:bg-white/20"}`}
            >
              <img
                src={assets.search_icon}
                alt="search"
                className={`w-4 h-4 transition-opacity ${scrolled ? "opacity-60" : "opacity-100"}`}
              />
            </button>
          </div>

          {/* Cart */}
          <button
            onClick={() => navigate("/cart")}
            className="relative cursor-pointer"
          >
            <img
              src={assets.nav_cart_icon}
              alt="cart"
              className={`w-5 transition-opacity duration-300 ${scrolled ? "opacity-70" : "opacity-100 "}`}
            />
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-3 text-[10px] font-bold text-white bg-accent w-4.5 h-4.5 flex items-center justify-center rounded-full">
                {getCartCount()}
              </span>
            )}
          </button>

          {/* Auth */}
          {!user ? (
            <button
              onClick={() => setShowUserLogin(true)}
              className="cursor-pointer px-6 py-2.5 font-mono text-xs text-white bg-accent hover:bg-accent-bright rounded transition-all duration-300 uppercase tracking-wider shadow-[0_0_15px_rgba(79,191,139,0.15)]"
            >
              Login
            </button>
          ) : (
            <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <img
                src={assets.profile_icon}
                alt="profile"
                className="w-9 cursor-pointer rounded-full border border-black/8"
              />
              {showDropdown && (
                <ul className="absolute top-12 right-0 bg-white border border-black/8 py-2 w-36 rounded-lg text-sm z-40 shadow-xl">
                  <li
                    onClick={() => navigate("/my-orders")}
                    className="px-4 py-2.5 cursor-pointer hover:bg-black/5 transition-colors text-on-surface-muted hover:text-on-surface"
                  >
                    My Orders
                  </li>
                  <li
                    onClick={logout}
                    className="px-4 py-2.5 cursor-pointer hover:bg-black/5 transition-colors text-on-surface-muted hover:text-red-500"
                  >
                    Logout
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-5">
          <button
            onClick={() => navigate("/cart")}
            className="relative cursor-pointer"
          >
            <img
              src={assets.nav_cart_icon}
              alt="cart"
              className="w-5 opacity-70"
            />
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2.5 text-[10px] font-bold text-white bg-accent w-4 h-4 flex items-center justify-center rounded-full">
                {getCartCount()}
              </span>
            )}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className={`transition-colors duration-300 ${scrolled ? "text-on-surface" : "text-white"}`}
          >
            <span className="material-symbols-outlined text-2xl">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute top-full left-0 w-full bg-white border-b border-black/8 py-6 px-6 flex flex-col gap-4 overflow-hidden md:hidden z-50"
            >
              <MobileNavLinks setOpen={setOpen} user={user} />
              <div className="flex gap-3 mt-2">
                {!user ? (
                  <button
                    onClick={() => {
                      setOpen(false);
                      setShowUserLogin(true);
                    }}
                    className="flex-1 cursor-pointer px-6 py-2.5 font-mono text-xs text-white bg-accent rounded uppercase tracking-wider"
                  >
                    Login
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      logout();
                      setOpen(false);
                    }}
                    className="flex-1 cursor-pointer px-6 py-2.5 font-mono text-xs text-on-surface border border-black/10 rounded uppercase tracking-wider"
                  >
                    Logout
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

const NavLinks = ({ location, scrolled }) => {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/products", label: "All Products" },
    { path: "/contact", label: "Contact" },
    { path: "/seller", label: "Dashboard" },
  ];

  return navItems.map((item) => (
    <div key={item.label} className="relative">
      <NavLink
        to={item.path}
        className={`font-mono text-[11px] uppercase tracking-[0.1em] nav-link transition-colors duration-300 ${
          location.pathname === item.path
            ? "text-green-700 font-bold active"
            : scrolled
              ? "text-on-surface-muted hover:text-on-surface"
              : "text-black/70 hover:text-black"
        }`}
      >
        {item.label}
      </NavLink>
    </div>
  ));
};

const MobileNavLinks = ({ setOpen, user }) => {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/products", label: "All Products" },
    { path: "/my-orders", label: "My Orders", show: !!user },
    { path: "/contact", label: "Contact" },
    { path: "/seller", label: "Dashboard" },
  ];

  return navItems
    .filter((item) => item.show !== false)
    .map((item) => (
      <NavLink
        key={item.label}
        to={item.path}
        onClick={() => setOpen(false)}
        className={({ isActive }) =>
          `font-mono text-xs uppercase tracking-[0.1em] px-4 py-3 rounded-lg transition-all duration-200 ${
            isActive
              ? "text-accent bg-accent/10 border-l-2 border-accent"
              : "text-on-surface-muted hover:text-on-surface hover:bg-black/5"
          }`
        }
      >
        {item.label}
      </NavLink>
    ));
};

export default Navbar;
