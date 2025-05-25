import { useEffect } from "react";
import Banner from "../components/Banner";

import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import Newsletter from "../components/Newsletter";
import WhyChooseUs from "../components/WhyChooseUs";
import { useAppContext } from "../context/AppContext";

const Home = () => {
  const { fetchProducts } = useAppContext();
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <Banner />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <Newsletter />
    </div>
  );
};

export default Home;
