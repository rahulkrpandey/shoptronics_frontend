import DeleteIcon from "@mui/icons-material/Delete";

import {
  Container,
  Title,
  TopContainer,
  Button,
  CartInfo,
  Span,
  Wrapper,
  WrapperProduct,
  CartProduct,
  Image,
  Info,
  ProductInfo,
  ProductTitle,
  Price,
  ProductId,
  Quantity,
  Amount,
  WrapperSummary,
  Hr,
  TitleSummary,
  SubTotal,
  EstimatedShipping,
  ShippingDiscount,
  Total,
} from "./StyledItems";

import Navbar from "../../components/Navbar";
import Message from "../../components/Message";
import Footer from "../../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/cartSlice";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const deleteItemFromCart = (product) => {
    dispatch(deleteProduct(product));
  };

  return (
    <Container>
      <Message />
      <Navbar />
      <Title>your cart</Title>
      <Wrapper>
        <WrapperProduct>
          {cart.products.length === 0 ? (
            <h1 className="capitalize self-center font-bold h-">
              your cart is empty
            </h1>
          ) : (
            cart.products.map((product) => (
              <CartProduct key={product._id}>
                <Image src={product.img} />
                <Info>
                  <ProductInfo>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductId> {product._id} </ProductId>
                    <Price>$ {product.price * product.quantity}</Price>
                  </ProductInfo>
                </Info>
                <Quantity>
                  <Amount>{product.quantity}</Amount>
                  <DeleteIcon onClick={() => deleteItemFromCart(product)} />
                </Quantity>
              </CartProduct>
            ))
          )}
          <Hr />
        </WrapperProduct>
        <WrapperSummary display={cart.products.length}>
          <TitleSummary>order summary</TitleSummary>
          <SubTotal>{cart.total.toFixed(2)}</SubTotal>
          <EstimatedShipping>
            {(cart.total * 0.02).toFixed(2)}
          </EstimatedShipping>
          <ShippingDiscount>{(cart.total * 0.015).toFixed(2)}</ShippingDiscount>
          <Total>{(cart.total * 1.005).toFixed(2)}</Total>
          <Button>checkout now</Button>
        </WrapperSummary>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
