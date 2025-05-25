import { FaFish, FaShippingFast, FaLeaf, FaSmile } from "react-icons/fa";

import bannerBg from "./bannerBg.jpg";
import banner2 from "./banner2.jpg";
import banner3 from "./banner3.jpg";
import banner4 from "./banner4.jpg";
import bannerSeahorse from "./bannerSeahorse.jfif";
import bannerTurtle from "./bannerTurtle.jfif";
import bannerFish from "./bannerFish.jfif";

import thumbnail1 from "./thumbnail1.jpg";
import thumbnail2 from "./thumbnail2.jpg";
import thumbnail3 from "./thumbnail3.jpg";
import thumbnail4 from "./thumbnail4.jpg";

import fish from "./fish.png";
import fishfood from "./fishfood.png";
import fishtank from "./fishtank.png";
import fishtankAccessories from "./fishtankAccessories.png";

import search_icon from "./search_icon.svg";
import remove_icon from "./remove_icon.svg";
import upload_area from "./upload_area.png";
import star_icon from "./star_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import cart_icon from "./cart_icon.svg";
import nav_cart_icon from "./nav_cart_icon.svg";
import add_icon from "./add_icon.svg";
import refresh_icon from "./refresh_icon.svg";
import product_list_icon from "./product_list_icon.svg";
import order_icon from "./order_icon.svg";
import profile_icon from "./profile_icon.png";
import delivery_truck_icon from "./delivery_truck_icon.svg";
import black_arrow_icon from "./black_arrow_icon.svg";
import white_arrow_icon from "./white_arrow_icon.svg";
import message_icon from "./message_icon.png";

import yellow_fish from "./yellow_fish.jpg";

import white_fish from "./white_fish.jpg";

import neon_tetra1 from "./neon_tetra1.jpg";
import neon_tetra2 from "./neon_tetra2.jpg";

import beta_fish1 from "./beta_fish1.jpg";
import beta_fish2 from "./beta_fish2.jpg";

import fish_flake1 from "./fish_flake1.jpg";
import fish_flake2 from "./fish_flake2.jpg";

import starterkit1 from "./starterkit1.avif";
import starterkit2 from "./starterkit2.avif";

import thermometer1 from "./thermometer1.jpg";
import thermometer2 from "./thermometer2.jpg";

import tank1 from "./tank1.jpg";
import tank2 from "./tank2.jpg";

import worm1 from "./worm1.jpg";
import worm2 from "./worm2.jpg";

import fishnet1 from "./fishnet1.jpg";
import fishnet2 from "./fishnet2.avif";

export const assets = {
  message_icon,
  upload_area,
  thumbnail2,
  white_fish,
  yellow_fish,
  banner2,
  banner3,
  banner4,
  white_arrow_icon,
  black_arrow_icon,
  bannerBg,
  bannerSeahorse,
  bannerTurtle,
  bannerFish,
  search_icon,
  remove_icon,
  star_icon,
  star_dull_icon,
  cart_icon,
  nav_cart_icon,
  add_icon,
  refresh_icon,
  product_list_icon,
  order_icon,
  profile_icon,
  delivery_truck_icon,
};

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { text: "Home", url: "#" },
      { text: "Best Sellers", url: "#" },
      { text: "Offers & Deals", url: "#" },
      { text: "Contact Us", url: "#" },
      { text: "FAQs", url: "#" },
    ],
  },
  {
    title: "Need help?",
    links: [
      { text: "Delivery Information", url: "#" },
      { text: "Return & Refund Policy", url: "#" },
      { text: "Payment Methods", url: "#" },
      { text: "Track your Order", url: "#" },
      { text: "Contact Us", url: "#" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { text: "Instagram", url: "#" },
      { text: "Twitter", url: "#" },
      { text: "Facebook", url: "#" },
      { text: "YouTube", url: "#" },
    ],
  },
];

export const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];

export const dummyProducts = [
  // Fish
  {
    _id: "fish001",
    name: "Neon Tetra",
    category: "Fish",
    price: 50,
    offerPrice: 40,
    image: [neon_tetra1, neon_tetra2],
    description: [
      "Brightly colored small schooling fish",
      "Peaceful and easy to care for",
      "Ideal for community tanks",
    ],
    createdAt: "2025-05-20T10:00:00.000Z",
    updatedAt: "2025-05-20T10:05:00.000Z",
    inStock: true,
  },

  // Food
  {
    _id: "food001",
    name: "Premium Flake Fish Food",
    category: "Food",
    price: 300,
    offerPrice: 250,
    image: [fish_flake1, fish_flake2],
    description: [
      "High-quality flakes for tropical fish",
      "Rich in proteins and vitamins",
      "Promotes vibrant colors and healthy growth",
    ],
    createdAt: "2025-05-21T08:00:00.000Z",
    updatedAt: "2025-05-21T08:10:00.000Z",
    inStock: true,
  },

  // Habitats
  {
    _id: "habitat001",
    name: "Aquarium Starter Kit 20L",
    category: "Habitats",
    price: 450,
    offerPrice: 400,
    image: [starterkit1, starterkit2],
    description: [
      "Complete setup with tank, filter, and light",
      "Ideal for beginners",
      "Easy to assemble and maintain",
    ],
    createdAt: "2025-05-19T09:30:00.000Z",
    updatedAt: "2025-05-19T09:40:00.000Z",
    inStock: true,
  },

  // Accessories
  {
    _id: "accessory001",
    name: "Aquarium Thermometer",
    category: "Accessories",
    price: 150,
    offerPrice: 120,
    image: [thermometer1, thermometer2],
    description: [
      "Accurate temperature readings",
      "Easy to attach inside tank",
      "Durable and waterproof",
    ],
    createdAt: "2025-05-22T11:00:00.000Z",
    updatedAt: "2025-05-22T11:10:00.000Z",
    inStock: true,
  },

  // Another Fish
  {
    _id: "fish002",
    name: "Betafish",
    category: "Fish",
    price: 300,
    offerPrice: 270,
    image: [beta_fish1, beta_fish2],
    description: [
      "Popular colorful reef fish",
      "Hardy and adaptable",
      "Symbiotic with sea anemones",
    ],
    createdAt: "2025-05-15T09:00:00.000Z",
    updatedAt: "2025-05-15T09:10:00.000Z",
    inStock: true,
  },

  // Another Food
  {
    _id: "food002",
    name: "Freeze-Dried Bloodworms",
    category: "Food",
    price: 180,
    offerPrice: 150,
    image: [worm1, worm2],
    description: [
      "Rich protein treat for all fish types",
      "Helps with coloration and health",
      "Easy to store and feed",
    ],
    createdAt: "2025-05-23T07:00:00.000Z",
    updatedAt: "2025-05-23T07:05:00.000Z",
    inStock: true,
  },

  // Another Habitat
  {
    _id: "habitat002",
    name: "Aquatic Plant Decoration",
    category: "Habitats",
    price: 700,
    offerPrice: 600,
    image: [tank1, tank2],
    description: [
      "Realistic artificial aquatic plants",
      "Safe for fish and easy to clean",
      "Enhances aquarium aesthetics",
    ],
    createdAt: "2025-05-18T10:00:00.000Z",
    updatedAt: "2025-05-18T10:10:00.000Z",
    inStock: true,
  },

  // Another Accessory
  {
    _id: "accessory002",
    name: "Fish Net",
    category: "Accessories",
    price: 80,
    offerPrice: 70,
    image: [fishnet1, fishnet2],
    description: [
      "Durable nylon net for safe fish handling",
      "Lightweight and easy to use",
      "Suitable for all aquarium sizes",
    ],
    createdAt: "2025-05-20T14:30:00.000Z",
    updatedAt: "2025-05-20T14:40:00.000Z",
    inStock: true,
  },
];

export const categories = [
  {
    text: "Aquatic Fish",
    path: "Fish",
    image: fish,
    bgColor: "rgba(255, 224, 102, 0.4)", // Vibrant yellow with 70% opacity
  },
  {
    text: "Fish Food",
    path: "Food",
    image: fishfood,
    bgColor: "rgba(255, 107, 107, 0.4)", // Coral red with 70% opacity
  },
  {
    text: "Tanks & Aquariums",
    path: "Habitats",
    image: fishtank,
    bgColor: "rgba(192, 246, 107, 0.4)", // Bright green with 70% opacity
  },
  {
    text: "Tank Accessories",
    path: "Accessories",
    image: fishtankAccessories,
    bgColor: "rgba(78, 205, 196, 0.4)", // Aquatic teal with 70% opacity
  },
];

export const whyChooseUs = [
  {
    title: "Premium Fish",
    description:
      "Handpicked, healthy fish from trusted breeders to ensure top quality.",
    icon: FaFish,
    emojiBg: "bg-blue-100",
  },
  {
    title: "Fast Delivery",
    description: "Swift and safe delivery right to your tank — nationwide.",
    icon: FaShippingFast,
    emojiBg: "bg-green-100",
  },
  {
    title: "Eco-Friendly",
    description:
      "Sustainable practices that care for aquatic life and the planet.",
    icon: FaLeaf,
    emojiBg: "bg-emerald-100",
  },
  {
    title: "Happy Customers",
    description: "Thousands of satisfied aquarists love our fish and service.",
    icon: FaSmile,
    emojiBg: "bg-yellow-100",
  },
];
