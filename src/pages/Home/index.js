import Message from "../../components/Message";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Category from "../../components/Category";
import { categoryData } from "../../data";
import Products from "../../components/Products";

const Home = () => {
  return (
    <div className="">
      <Message />
      <Navbar />
      <Carousel />
      <Category data={categoryData} />
      <Products heading="featured products" />
      <Footer />
    </div>
  );
};

export default Home;
