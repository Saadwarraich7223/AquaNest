import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const { currency, addToCart, removeFromCart, cartItems, navigate } =
    useAppContext();
  // Animation variants
  const cardVariants = {
    hover: {
      y: -8,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
    initial: {
      y: 0,
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.4 },
    },
    initial: {
      scale: 1,
    },
  };

  const buttonVariants = {
    tap: { scale: 0.95 },
    hover: {
      backgroundColor: "rgba(var(--color-primary-rgb), 0.2)",
      borderColor: "rgba(var(--color-primary-rgb), 0.6)",
    },
  };

  return (
    product && (
                      
    <motion.div
  className="relative bg-white border border-gray-200 rounded-2xl shadow-md transition-all hover:shadow-lg sm:min-w-36 min-w-36 max-w-56 w-full cursor-pointer"
  variants={cardVariants}
  initial="initial"
  whileHover="hover"
  onClick={() => {
    navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
>
  {/* Image */}
  <div className="w-full h-[150px] rounded-t-2xl overflow-hidden flex items-center justify-center bg-gray-50">
    <motion.img
      variants={imageVariants}
      className="w-full h-full object-cover"
      src={product.image[0]}
      alt={product.name}
    />
  </div>

  {/* Product Details */}
  <div className="px-4 py-3 text-sm text-gray-700 space-y-2">
    <p className="text-[10px] uppercase tracking-widest font-semibold text-primary/70">
      {product.category}
    </p>

    <motion.p className="text-base font-semibold text-gray-900 leading-snug truncate">
      {product.name}
    </motion.p>

    {/* Stars */}
    <div className="flex items-center gap-0.5">
      {Array(5)
        .fill("")
        .map((_, i) => (
          <motion.img
            key={i}
            whileHover={{ scale: 1.2 }}
            src={i < 4 ? assets.star_icon : assets.star_dull_icon}
            alt=""
            className="w-[14px] h-[14px]"
          />
        ))}
      <p className="ml-1 text-xs text-gray-500">({4})</p>
    </div>

    {/* Price Section */}
    <div className="pt-2">
      <p className="text-lg font-bold text-primary">
        {currency} {product.offerPrice}
      </p>
      <p className="text-xs line-through text-gray-400">
        {currency} {product.price}
      </p>
    </div>

    {/* Add to Cart */}
    <div onClick={(e) => e.stopPropagation()} className="pt-2">
      {!cartItems[product._id] ? (
        <motion.button
          onClick={() => addToCart(product._id)}
          whileTap="tap"
          whileHover="hover"
          variants={buttonVariants}
          className="flex items-center justify-center gap-2 bg-primary/10 text-primary border border-primary/30 w-full h-[36px] rounded-full font-medium text-sm transition-all hover:bg-primary/20"
        >
          <motion.img
            src={assets.cart_icon}
            alt="cartIcon"
            className="w-4 h-4"
            whileHover={{ rotate: 10 }}
          />
          Add
        </motion.button>
      ) : (
        <motion.div
          className="flex items-center justify-center gap-2 bg-primary/10 border border-primary/30 w-full h-[36px] rounded-full select-none"
          whileHover={{
            backgroundColor: "rgba(var(--color-primary-rgb), 0.15)",
          }}
        >
          <motion.button
            onClick={() => removeFromCart(product._id)}
            className="text-lg px-2 h-full font-bold text-primary"
            whileTap={{ scale: 0.9 }}
          >
            -
          </motion.button>
          <motion.span
            className="w-5 text-center font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            key={cartItems[product._id]}
          >
            {cartItems[product._id]}
          </motion.span>
          <motion.button
            onClick={() => addToCart(product._id)}
            className="text-lg px-2 h-full font-bold text-primary"
            whileTap={{ scale: 0.9 }}
          >
            +
          </motion.button>
        </motion.div>
      )}
    </div>
  </div>

  {/* Sale Badge */}
  {product.price - product.offerPrice > 500 && (
    <motion.div
      className="absolute top-2 left-2 bg-primary text-white text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
    >
      SALE
    </motion.div>
  )}
</motion.div>

    )
  );
};

export default ProductCard;
