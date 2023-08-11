import Message from "../../components/Message";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import {
  Wrapper,
  ImageContainer,
  Image,
  InfoContainer,
  Title,
  Price,
  Container,
  Quantity,
  Amount,
  Button,
  Desc,
} from "./StyledItems";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { publicRequest, BASE_URL } from "../../requestMethods";
import { addProduct } from "../../redux/cartSlice";
const REACT_APP_BASE_URL = "http://localhost:3000";

const ProductPage = () => {
  const user = useSelector((state) => state.user.currentUser);
  const { id, username, productid } = useParams();
  console.log(id, username, productid);
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  if (username && productid) {
    localStorage.setItem("username", username);
    localStorage.setItem("productid", productid);
  }

  useEffect(() => {
    const getProduct = async () => {
      const res = await publicRequest.get(`/products/find/${id}`);
      setProduct(res.data);
    };

    getProduct();
  }, [id]);

  const handleQuantity = (option) => {
    if (option === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({
        ...product,
        quantity,
      })
    );

    setQuantity(1);
  };

  const copyText = (e) => {
    navigator.clipboard.writeText(e.target.value);
  };

  return (
    <div>
      <Message />
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Price>${product.price}</Price>
          <Container>
            <Quantity>
              <AddIcon onClick={() => handleQuantity("increase")} />
              <Amount>{quantity}</Amount>
              <RemoveIcon onClick={() => handleQuantity("decrease")} />
            </Quantity>
            <button
              onClick={handleClick}
              className="border-2 border-sky-500 px-4 py-2 uppercase rounded-md text-sky-800 font-semibold hover:bg-sky-800 hover:text-white hover:border-white"
            >
              add to cart
            </button>
          </Container>
          <Desc>{product.desc}</Desc>
          {/* refer container */}
          <div className={`${!user && "hidden"} flex gap-40 items-center`}>
            <h1 className="font-medium">Refer this product</h1>
            <button
              onClick={copyText}
              value={`${REACT_APP_BASE_URL}/product/${id}/${user?.username}/${id}`}
              className="border-2 border-blue-400 rounded px-4 py-2 text-sky-800"
            >
              COPY TO CLICK
            </button>
          </div>
        </InfoContainer>
      </Wrapper>

      <Footer />
    </div>
  );
};

export default ProductPage;
