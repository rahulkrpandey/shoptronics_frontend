import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Container, Logo, Nav, NavList, Input } from "./StyledNavbar";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../redux/userSlice";
import { emptyCart } from "../../redux/cartSlice";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const quantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();

  // handling logout
  const logoutHandler = (e) => {
    dispatch(emptyCart());
    dispatch(logOut());
  };
  return (
    <Container>
      <Input />
      <Logo />
      <nav className="flex-auto max-w-sm">
        <ul className="flex justify-between items-center hover:cursor-pointer">
          <li className="uppercase text-white">
            <Link to={"/"}>home</Link>
          </li>
          <li className="uppercase text-white">
            <Link to={"/"}>profile</Link>
          </li>
          <li className="uppercase text-white">
            {!user.currentUser && <Link to={"/login"}>login</Link>}
            {user.currentUser && <span onClick={logoutHandler}>logout</span>}
          </li>
          <li className="uppercase text-white">
            <Link to={"/cart"}>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
