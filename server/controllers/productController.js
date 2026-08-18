import { v2 as cloudinary } from "cloudinary";
import Product from "../models/Product.js";

// Add product : /api/product/add
export const addProduct = async (req, res) => {
  console.log("\n================ ADD PRODUCT =================");

  try {
    console.log("Request received: POST /api/product/add");

    console.log("Request body:");
    console.log(req.body);

    console.log("Request files:");
    console.log(req.files);

    // Check productData
    if (!req.body.productData) {
      console.error("ERROR: productData is missing from request body");

      return res.status(400).json({
        success: false,
        message: "productData is missing",
      });
    }

    // Parse product data
    let productData;

    try {
      console.log("Parsing productData...");

      productData = JSON.parse(req.body.productData);

      console.log("productData parsed successfully:");
      console.log(productData);
    } catch (parseError) {
      console.error("JSON PARSE ERROR");
      console.error("Message:", parseError.message);
      console.error("Name:", parseError.name);
      console.error("Stack:", parseError.stack);
      console.error("Full error:", parseError);

      return res.status(400).json({
        success: false,
        message: "Invalid productData JSON",
        error: parseError.message,
      });
    }

    // Check uploaded images
    const images = req.files;

    if (!images || images.length === 0) {
      console.error("ERROR: No images received");

      return res.status(400).json({
        success: false,
        message: "No images uploaded",
      });
    }

    console.log("Number of images received:", images.length);

    // Upload images to Cloudinary
    console.log("Starting Cloudinary uploads...");

    const imagesUrl = await Promise.all(
      images.map(async (item, index) => {
        console.log("\n----------------------------------------");
        console.log(`Uploading image ${index + 1} of ${images.length}`);
        console.log("----------------------------------------");

        console.log("File information:");
        console.log({
          fieldname: item.fieldname,
          originalname: item.originalname,
          encoding: item.encoding,
          mimetype: item.mimetype,
          destination: item.destination,
          filename: item.filename,
          path: item.path,
          size: item.size,
        });

        try {
          console.log("Sending image to Cloudinary...");

          const result = await cloudinary.uploader.upload(item.path, {
            resource_type: "image",
          });

          console.log("Cloudinary upload successful");

          console.log("Cloudinary response:");
          console.log({
            public_id: result.public_id,
            secure_url: result.secure_url,
            url: result.url,
            resource_type: result.resource_type,
            format: result.format,
            width: result.width,
            height: result.height,
          });

          return result.secure_url;
        } catch (cloudinaryError) {
          console.error("\nCLOUDINARY UPLOAD ERROR");
          console.error("----------------------------------------");
          console.error("Message:", cloudinaryError.message);
          console.error("Name:", cloudinaryError.name);
          console.error("HTTP Code:", cloudinaryError.http_code);
          console.error("Code:", cloudinaryError.code);
          console.error("Error object:");
          console.error(cloudinaryError);
          console.error("Stack:");
          console.error(cloudinaryError.stack);
          console.error("----------------------------------------");

          throw cloudinaryError;
        }
      }),
    );

    console.log("\nAll images uploaded successfully");

    console.log("Image URLs:");
    console.log(imagesUrl);

    // Create product
    console.log("\nCreating product in MongoDB...");

    console.log("Product data being saved:");
    console.log({
      ...productData,
      image: imagesUrl,
    });

    const product = await Product.create({
      ...productData,
      image: imagesUrl,
    });

    console.log("Product created successfully");
    console.log("Product ID:", product._id);

    console.log("================ ADD PRODUCT SUCCESS =================\n");

    return res.json({
      success: true,
      message: "Product added successfully",
    });
  } catch (error) {
    console.error("\n================ ADD PRODUCT ERROR =================");

    console.error("Error message:", error.message);
    console.error("Error name:", error.name);
    console.error("Error code:", error.code);
    console.error("HTTP code:", error.http_code);

    console.error("Full error:");
    console.error(error);

    console.error("Error stack:");
    console.error(error.stack);

    console.error("====================================================\n");

    return res.status(500).json({
      success: false,
      message: error.message,
      error: error.name,
      code: error.code,
      http_code: error.http_code,
    });
  }
};

// Get product list : /api/product/list
export const productList = async (req, res) => {
  console.log("\n================ PRODUCT LIST =================");

  try {
    console.log("Request received: GET /api/product/list");

    console.log("Searching products in MongoDB...");

    const products = await Product.find({});

    console.log("Products found:", products.length);

    console.log("Products:");
    console.log(products);

    console.log("================ PRODUCT LIST SUCCESS =================\n");

    return res.json({
      success: true,
      products,
    });
  } catch (error) {
    console.error("\n================ PRODUCT LIST ERROR =================");

    console.error("Error message:", error.message);
    console.error("Error name:", error.name);
    console.error("Error code:", error.code);
    console.error("HTTP code:", error.http_code);

    console.error("Full error:");
    console.error(error);

    console.error("Error stack:");
    console.error(error.stack);

    console.error("====================================================\n");

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get single product : /api/product/:id
export const productById = async (req, res) => {
  console.log("\n================ PRODUCT BY ID =================");

  try {
    console.log("Request received");

    console.log("Request params:");
    console.log(req.params);

    console.log("Request body:");
    console.log(req.body);

    const { id } = req.params;

    console.log("Product ID:", id);

    if (!id) {
      console.error("ERROR: Product ID is missing");

      return res.status(400).json({
        success: false,
        message: "Product ID is required",
      });
    }

    console.log("Searching product in MongoDB...");

    const product = await Product.findById(id);

    if (!product) {
      console.error("Product not found");
      console.error("Requested ID:", id);

      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    console.log("Product found:");
    console.log(product);

    console.log("================ PRODUCT BY ID SUCCESS =================\n");

    return res.json({
      success: true,
      product,
    });
  } catch (error) {
    console.error("\n================ PRODUCT BY ID ERROR =================");

    console.error("Error message:", error.message);
    console.error("Error name:", error.name);
    console.error("Error code:", error.code);
    console.error("HTTP code:", error.http_code);

    console.error("Request params:");
    console.error(req.params);

    console.error("Full error:");
    console.error(error);

    console.error("Error stack:");
    console.error(error.stack);

    console.error("====================================================\n");

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Change product stock : /api/product/stock
export const changeStock = async (req, res) => {
  console.log("\n================ CHANGE STOCK =================");

  try {
    console.log("Request received: POST /api/product/stock");

    console.log("Request body:");
    console.log(req.body);

    const { id, inStock } = req.body;

    console.log("Product ID:", id);
    console.log("New stock status:", inStock);

    if (!id) {
      console.error("ERROR: Product ID is missing");

      return res.status(400).json({
        success: false,
        message: "Product ID is required",
      });
    }

    console.log("Updating product stock...");

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { inStock },
      { new: true },
    );

    if (!updatedProduct) {
      console.error("Product not found");
      console.error("Requested ID:", id);

      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    console.log("Stock updated successfully");

    console.log("Updated product:");
    console.log(updatedProduct);

    console.log("================ CHANGE STOCK SUCCESS =================\n");

    return res.json({
      success: true,
      message: "Stock updated",
    });
  } catch (error) {
    console.error("\n================ CHANGE STOCK ERROR =================");

    console.error("Error message:", error.message);
    console.error("Error name:", error.name);
    console.error("Error code:", error.code);
    console.error("HTTP code:", error.http_code);

    console.error("Request body:");
    console.error(req.body);

    console.error("Full error:");
    console.error(error);

    console.error("Error stack:");
    console.error(error.stack);

    console.error("====================================================\n");

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Change product price : /api/product/price
export const changePrice = async (req, res) => {
  console.log("\n================ CHANGE PRICE =================");

  try {
    console.log("Request received: POST /api/product/price");

    console.log("Request body:");
    console.log(req.body);

    const { id, price, offerPrice } = req.body;

    console.log("Product ID:", id);
    console.log("Price:", price);
    console.log("Offer price:", offerPrice);

    if (!id) {
      console.error("ERROR: Product ID is missing");

      return res.status(400).json({
        success: false,
        message: "Product ID is required",
      });
    }

    console.log("Updating product price...");

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        price,
        offerPrice,
      },
      {
        new: true,
      },
    );

    if (!updatedProduct) {
      console.error("Product not found");
      console.error("Requested ID:", id);

      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    console.log("Price updated successfully");

    console.log("Updated product:");
    console.log(updatedProduct);

    console.log("================ CHANGE PRICE SUCCESS =================\n");

    return res.json({
      success: true,
      message: "Price updated",
    });
  } catch (error) {
    console.error("\n================ CHANGE PRICE ERROR =================");

    console.error("Error message:", error.message);
    console.error("Error name:", error.name);
    console.error("Error code:", error.code);
    console.error("HTTP code:", error.http_code);

    console.error("Request body:");
    console.error(req.body);

    console.error("Full error:");
    console.error(error);

    console.error("Error stack:");
    console.error(error.stack);

    console.error("====================================================\n");

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete product : /api/product/delete
export const deleteProduct = async (req, res) => {
  console.log("\n================ DELETE PRODUCT =================");

  try {
    console.log("Request received: DELETE /api/product/delete");

    console.log("Request body:");
    console.log(req.body);

    const { id } = req.body;

    console.log("Product ID:", id);

    if (!id) {
      console.error("ERROR: Product ID is missing");

      return res.status(400).json({
        success: false,
        message: "Product ID is required",
      });
    }

    console.log("Deleting product from MongoDB...");

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      console.error("Product not found");
      console.error("Requested ID:", id);

      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    console.log("Product deleted successfully");

    console.log("Deleted product:");
    console.log(deletedProduct);

    console.log("================ DELETE PRODUCT SUCCESS =================\n");

    return res.json({
      success: true,
      message: "Product deleted",
    });
  } catch (error) {
    console.error("\n================ DELETE PRODUCT ERROR =================");

    console.error("Error message:", error.message);
    console.error("Error name:", error.name);
    console.error("Error code:", error.code);
    console.error("HTTP code:", error.http_code);

    console.error("Request body:");
    console.error(req.body);

    console.error("Full error:");
    console.error(error);

    console.error("Error stack:");
    console.error(error.stack);

    console.error("====================================================\n");

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
