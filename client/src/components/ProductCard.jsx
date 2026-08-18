import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const { currency, addToCart, removeFromCart, cartItems, navigate } =
    useAppContext();

  if (!product) return null;

  return (
    <motion.div
      className="relative glass-card rounded-xl overflow-hidden cursor-pointer group transition-all duration-300 hover:border-black/10 hover:-translate-y-1 min-w-[140px] max-w-[220px] w-full"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onClick={() => {
        navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <div className="w-full aspect-square overflow-hidden bg-surface-elevated flex items-center justify-center">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={product.image[0]}
          alt={product.name}
          loading="lazy"
        />
      </div>

      <div className="px-3.5 py-3.5 space-y-1.5">
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent/70">
          {product.category}
        </p>

        <p className="text-sm font-semibold text-on-surface leading-snug truncate">
          {product.name}
        </p>

        <div className="flex items-center gap-0.5">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <img
                key={i}
                src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                alt=""
                className="w-3 h-3 opacity-70"
              />
            ))}
          <p className="ml-1 text-[10px] text-on-surface-muted">(4)</p>
        </div>

        <div className="pt-1">
          <p className="text-base font-bold text-accent">
            {currency} {product.offerPrice}
          </p>
          <p className="text-[11px] line-through text-on-surface-muted/60">
            {currency} {product.price}
          </p>
        </div>

        <div onClick={(e) => e.stopPropagation()} className="pt-1.5">
          {!cartItems[product._id] ? (
            <button
              onClick={() => addToCart(product._id)}
              className="flex items-center justify-center gap-1.5 bg-accent/10 text-accent border border-accent/20 w-full h-9 rounded-lg font-medium text-xs transition-all duration-200 hover:bg-accent/20 cursor-pointer"
            >
              <img src={assets.cart_icon} alt="cart" className="w-3.5 h-3.5" />
              Add to Cart
            </button>
          ) : (
            <div className="flex items-center justify-center gap-1 bg-accent/10 border border-accent/20 w-full h-9 rounded-lg select-none">
              <button
                onClick={() => removeFromCart(product._id)}
                className="text-base px-2.5 h-full font-bold text-on-surface hover:text-red-500 transition-colors"
              >
                -
              </button>
              <span className="w-6 text-center text-sm font-medium text-on-surface">
                {cartItems[product._id]}
              </span>
              <button
                onClick={() => addToCart(product._id)}
                className="text-base px-2.5 h-full font-bold text-on-surface hover:text-accent transition-colors"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>

      {product.price - product.offerPrice > 400 && (
        <div className="absolute top-2.5 left-2.5 bg-accent text-white text-[10px] font-bold px-2.5 py-1 rounded shadow-sm">
          SALE
        </div>
      )}
    </motion.div>
  );
};

export default ProductCard;
