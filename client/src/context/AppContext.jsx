import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";

import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const currency = import.meta.env.VITE_CURRENCY;

  const [user, setUser] = useState(true);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});

  // Fetch seller status

  const fetchSellerStatus = async () => {
    try {
      const { data } = await axios.get("/api/seller/is-auth");
      if (data.success) {
        setIsSeller(true);
      } else {
        setIsSeller(false);
      }
    } catch (error) {
      setIsSeller(false);
    }
  };

  // fetch user status,user data, cart
  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/api/user/is-auth");

      if (data.success) {
        setUser(data.user);
        setCartItems(data.user.cartItems);
      } else {
        setUser(null);
      }
    } catch (error) {
      setUser(null);
    }
  };

  //  fetchProuducts
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("api/product/list");
      if (data.success) {
        setProducts(data.products);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchUser();
    fetchSellerStatus();
    fetchProducts();
  }, []);

  // update databaseCartItems
  useEffect(() => {
    const updateCart = async () => {
      try {
        const { data } = await axios.post("/api/cart/update", {
          cartItems,
        });
        if (!data.success) {
          console.log(data.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    if (user) {
      updateCart();
    }
  }, [cartItems]);

  // Add to cart
  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }

    setCartItems(cartData);
    toast.success("Added to cart");
  };
  // update cartItem quantity

  const updateCartItem = (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
    toast.success("Quantity updated");
  };

  // Remove from cart
  const removeFromCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId] > 0) {
      cartData[itemId] -= 1;
    }
    if (cartData[itemId] === 0) {
      delete cartData[itemId];
    }
    toast.success("Removed from cart");
    setCartItems(cartData);
  };
  // get total cart items
  const getCartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      totalCount += cartItems[item];
    }
    return totalCount;
  };
  // get total cart amount
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      let itemInfo = products.find((product) => product._id === item);
      if (cartItems[item] > 0) {
        totalAmount += itemInfo.offerPrice * cartItems[item];
      }
    }
    return Math.floor(totalAmount * 100) / 100;
  };

  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    products,
    currency,
    cartItems,
    addToCart,
    updateCartItem,
    removeFromCart,
    searchQuery,
    setSearchQuery,
    getCartAmount,
    getCartCount,
    setCartItems,
    axios,
    fetchProducts,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
