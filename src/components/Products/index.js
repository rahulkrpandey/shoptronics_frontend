import { Container, Heading } from "./StyledFeaturedProductItems";
import { featuredProducts } from "../../data";
import Product from "../Product";
import { useState, useEffect, createFactory } from "react";
import axios from "axios";

const Products = ({ category, sort, heading: head }) => {
  let heading;
  if (category === "mobile") {
    heading = "mobile and tablets";
  } else if (category === "accessories") {
    heading = "accessories";
  } else if (head) {
    heading = head;
  } else {
    heading = "laptops and desktops";
  }

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:5000/api/products?category=${category}`
            : "http://localhost:5000/api/products"
        );

        setProducts(res.data);
        setFilteredProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getProducts();
  }, [category]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) => {
        return [...prev].sort((a, b) => a.createdAt - b.createdAt);
      });
    } else if (sort === "asc") {
      setFilteredProducts((prev) => {
        return [...prev].sort((a, b) => a.price - b.price);
      });
    } else {
      setFilteredProducts((prev) => {
        return [...prev].sort((a, b) => b.price - a.price);
      });
    }
  }, [sort]);

  console.log(filteredProducts);

  return (
    <Container>
      <Heading>{heading}</Heading>
      {/* {featuredProducts.map((product) => (
        <Product product={product} key={product.id} />
      ))} */}
      {category
        ? filteredProducts.map((product) => (
            <Product product={product} key={product._id} />
          ))
        : filteredProducts
            .slice(0, 8)
            .map((product) => <Product product={product} key={product._id} />)}
    </Container>
  );
};

export default Products;
