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
import fishTankAccessories from "./fishTankAccessories.png";

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
    image: fishTankAccessories,
    bgColor: "rgba(78, 205, 196, 0.4)", // Aquatic teal with 70% opacity
  },
];
