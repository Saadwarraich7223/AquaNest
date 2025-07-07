import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import ProductCategory from "./pages/ProductCategory";
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import MyOrders from "./pages/MyOrders";
import AddAddress from "./pages/AddAddress";
import Login from "./components/Login";
import { useAppContext } from "./context/AppContext";
import ContactUs from "./pages/ContactUs";
import ToTopScroller from "./components/ToTopScroller";
import SellerLayout from "./pages/seller/SellerLayout";
import SellerLogin from "./components/seller/SellerLogin";
import AddProduct from "./pages/seller/AddProduct";
import ProductList from "./pages/seller/ProductList";
import Orders from "./pages/seller/Orders";
import PaymentLoader from "./components/PaymentLoader";
import Messages from "./pages/seller/Messages";
import AquanestLoading from "./components/AquanestLoading";

const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller");

  const [loading, setLoading] = useState(true);
  const { showUserLogin, isSeller } = useAppContext();

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("aquanestLoaded");

    if (alreadyLoaded) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("aquanestLoaded", "true");
      }, 3000); // Adjust time as needed

      return () => clearTimeout(timer);
    }
  }, []);

  if (loading) {
    return <AquanestLoading />;
  }

  return (
    <div className="body text-default bg-gray-300/10 min-h-screen text-gray-700 ">
      {isSellerPath ? null : <Navbar />}
      {showUserLogin ? <Login /> : null}
      <ToTopScroller />
      <Toaster />
      <div
        className={`${isSellerPath ? "" : "px-1 md:px-6 lg:px-8 xl:px-12"}`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/add-adress" element={<AddAddress />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/loader" element={<PaymentLoader />} />
          <Route
            path="/seller"
            element={isSeller ? <SellerLayout /> : <SellerLogin />}
          >
            <Route index element={isSeller ? <AddProduct /> : null} />
            <Route path="/seller/product-list" element={<ProductList />} />
            <Route path="/seller/orders" element={<Orders />} />
            <Route path="/seller/messages" element={<Messages />} />
          </Route>
        </Routes>
      </div>
      {!isSellerPath && <Footer />}
    </div>
  );
};

export default App;
