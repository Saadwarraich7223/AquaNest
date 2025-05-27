import toast from "react-hot-toast";
import { useAppContext } from "../../context/AppContext";
import { useEffect, useState } from "react";
import { SquarePen, CircleX } from "lucide-react";

const ProductList = () => {
  const { products, currency, axios, fetchProducts } = useAppContext();
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [editProductId, setEditProductId] = useState(null);
  const [editPrice, setEditPrice] = useState("");
  const [editOfferPrice, setEditOfferPrice] = useState("");

  const deleteProduct = async (id) => {
    try {
      const { data } = await axios.post("/api/product/delete", { id });
      if (data.success) {
        fetchProducts();
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const toggleStock = async (id, inStock) => {
    try {
      const { data } = await axios.post("/api/product/stock", { id, inStock });
      if (data.success) {
        fetchProducts();
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDeleteClick = (id) => {
    setSelectedProductId(id);
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    deleteProduct(selectedProductId);
    setShowConfirm(false);
  };

  const handleEditClick = (product) => {
    setEditProductId(product._id);
    setEditPrice(product.price);
    setEditOfferPrice(product.offerPrice);
  };

  const handleSaveEdit = async () => {
    try {
      const { data } = await axios.post("/api/product/change-price", {
        id: editProductId,
        price: editPrice,
        offerPrice: editOfferPrice,
      });
      if (data.success) {
        fetchProducts();
        toast.success("Price updated");
      } else {
        toast.error("Failed to update price");
      }
      setEditProductId(null);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex-1 no-scrollbar py-5 pt-0 flex overflow-y-scroll flex-col justify-between">
      <div className="w-full md:p-10 p-4">
        <h2 className="pb-4 text-lg font-medium">All Products</h2>
        <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
          <table className="md:table-auto table-fixed w-full overflow-hidden">
            <thead className="text-gray-900 text-sm text-left">
              <tr>
                <th className="px-4 py-3 font-semibold truncate">Product</th>
                <th className="px-4 py-3 font-semibold truncate">Category</th>
                <th className="px-4 py-3 font-semibold truncate">Price</th>
                <th className="px-4 py-3 font-semibold hidden md:block truncate">
                  In Stock
                </th>
                <th className="px-4 py-3 font-semibold truncate">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-500">
              {products.map((product) => (
                <tr key={product._id} className="border-t border-gray-500/20">
                  <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                    <div className="border border-gray-300 rounded p-2">
                      <img
                        src={product.image[0]}
                        alt="Product"
                        className="w-16"
                      />
                    </div>
                    <span className="truncate max-sm:hidden w-full">
                      {product.name}
                    </span>
                  </td>
                  <td className="px-4 py-3">{product.category}</td>
                  <td className="px-4 py-3">
                    {currency} {product.offerPrice}
                  </td>
                  <td className="px-4 hidden md:table-cell py-3">
                    <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                      <input
                        onChange={() =>
                          toggleStock(product._id, !product.inStock)
                        }
                        checked={product.inStock}
                        type="checkbox"
                        className="sr-only peer"
                      />
                      <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
                      <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                    </label>
                  </td>
                  <td className="px-4 py-3 flex gap-2 flex-wrap">
                    <button
                      onClick={() => handleEditClick(product)}
                      className="bg-gray-100 p-2 rounded hover:bg-gray-200 cursor-pointer text-primary"
                    >
                      <SquarePen />
                    </button>
                    <button
                      onClick={() => handleDeleteClick(product._id)}
                      className="bg-gray-100 cursor-pointer text-red-500 p-2 rounded hover:bg-gray-200"
                    >
                      <CircleX />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Confirmation Popup */}
        {showConfirm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-xl p-6 max-w-sm w-80 text-center">
              <h2 className="text-xl font-semibold mb-4">Delete Product?</h2>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete this product? This action cannot
                be undone.
              </p>
              <div className="flex justify-center gap-4">
                <button
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                  onClick={confirmDelete}
                >
                  Yes, Delete
                </button>
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
                  onClick={() => setShowConfirm(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Popup */}
        {editProductId && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
            <div
              className="bg-white
             rounded-xl p-6 max-w-sm w-full mx-4 shadow-xl"
            >
              <h2 className="text-xl font-semibold mb-4 text-center">
                Edit Price
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="">Price</label>
                  <input
                    type="number"
                    value={editPrice}
                    onChange={(e) => setEditPrice(e.target.value)}
                    placeholder="Price"
                    className="border border-gray-300 outline-primary px-4 py-2 rounded"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="">Offer Price</label>
                  <input
                    type="number"
                    value={editOfferPrice}
                    onChange={(e) => setEditOfferPrice(e.target.value)}
                    placeholder="Offer Price"
                    className="border outline-primary border-gray-300 px-4 py-2 rounded"
                  />
                </div>
                <div className="flex gap-4 justify-end pt-2">
                  <button
                    onClick={handleSaveEdit}
                    className="bg-primary cursor-pointer text-white px-4 py-2 rounded hover:bg-primary-dull"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditProductId(null)}
                    className="bg-gray-300 cursor-pointer text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
