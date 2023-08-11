import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { Container, Image, Icons, Icon } from "./StyledProductItems";
import { Link } from "react-router-dom";
import { useState } from "react";

const Product = ({ product }) => {
  return (
    <Container>
      <Image src={product.img} />
      {/* info */}
      <div className="h-32 container flex flex-col gap-2 text-start text-ellipsis overflow-hidden justify-start whitespace-nowrap px-2.5 w-4/5 relative">
        <h1 className="capitalize "> {product.title} </h1>
        <p className="text-3xl font-light">${product.price}</p>
        <Icons>
          <Icon name="like" id={product._id}>
            <FavoriteBorderOutlinedIcon />
          </Icon>

          <Icon>
            <Link to={`/product/${product._id}`}>
              <SearchOutlinedIcon />
            </Link>
          </Icon>
        </Icons>
      </div>
    </Container>
  );
};

export default Product;
