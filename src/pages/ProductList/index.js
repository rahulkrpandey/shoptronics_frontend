import React from "react";
import Message from "../../components/Message";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Products from "../../components/Products";

import {
  FilterContainer,
  Filter,
  FilterText,
  Select,
  Option,
} from "./StyledProductListItem";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [sort, setSort] = useState("newest");
  const sortHandler = (e) => {
    setSort(e.target.value);
  };
  return (
    <div>
      <Message />
      <Navbar />
      <FilterContainer>
        <Filter>
          <FilterText>sort products:</FilterText>
          <select
            onChange={sortHandler}
            className="border-solid border-2 border-black"
          >
            <option value="newest" className="rounded-none">
              Newest
            </option>
            <option value="desc" className="rounded-none">
              Price high to low
            </option>
            <option value="asc" className="rounded-none">
              Price low to high
            </option>
          </select>
        </Filter>
      </FilterContainer>
      <Products category={cat} sort={sort} />
      <Footer />
    </div>
  );
};

export default ProductList;
