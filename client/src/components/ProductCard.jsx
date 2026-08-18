import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const { currency, addToCart, removeFromCart, cartItems, navigate } =
    useAppContext();

  if (!product) return null;

  return (
    <motion.div
      className="relative bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 min-w-[140px] max-w-[220px] w-full cursor-pointer"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onClick={() => {
        navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      {/* Image */}
      <div className="w-full aspect-square overflow-hidden bg-gray-50 flex items-center justify-center">
        <img
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          src={product.image[0]}
          alt={product.name}
          loading="lazy"
        />
      </div>

      {/* Details */}
      <div className="px-3.5 py-3 space-y-1.5">
        <p className="text-[10px] uppercase tracking-widest font-semibold text-primary/60">
          {product.category}
        </p>

        <p className="text-sm font-semibold text-gray-900 leading-snug truncate">
          {product.name}
        </p>

        {/* Stars - Static, no hover */}
        <div className="flex items-center gap-0.5">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <img
                key={i}
                src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                alt=""
                className="w-3 h-3"
              />
            ))}
          <p className="ml-1 text-[10px] text-gray-400">(4)</p>
        </div>

        {/* Price */}
        <div className="pt-1">
          <p className="text-base font-bold text-primary">
            {currency} {product.offerPrice}
          </p>
          <p className="text-[11px] line-through text-gray-400">
            {currency} {product.price}
          </p>
        </div>

        {/* Cart Controls */}
        <div onClick={(e) => e.stopPropagation()} className="pt-1.5">
          {!cartItems[product._id] ? (
            <button
              onClick={() => addToCart(product._id)}
              className="flex items-center justify-center gap-1.5 bg-primary/10 text-primary border border-primary/20 w-full h-9 rounded-full font-medium text-xs transition-all duration-200 hover:bg-primary/20 cursor-pointer"
            >
              <img
                src={assets.cart_icon}
                alt="cart"
                className="w-3.5 h-3.5"
              />
              Add to Cart
            </button>
          ) : (
            <div className="flex items-center justify-center gap-1 bg-primary/10 border border-primary/20 w-full h-9 rounded-full select-none">
              <button
                onClick={() => removeFromCart(product._id)}
                className="text-base px-2.5 h-full font-bold text-primary hover:text-red-500 transition-colors"
              >
                -
              </button>
              <span className="w-6 text-center text-sm font-medium">
                {cartItems[product._id]}
              </span>
              <button
                onClick={() => addToCart(product._id)}
                className="text-base px-2.5 h-full font-bold text-primary hover:text-green-600 transition-colors"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Sale Badge */}
      {product.price - product.offerPrice > 400 && (
        <div className="absolute top-2.5 left-2.5 bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
          SALE
        </div>
      )}
    </motion.div>
  );
};

export default ProductCard;
