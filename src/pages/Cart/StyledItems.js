import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { BASE_URL } from "../../requestMethods";
import { Elements } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { updateUserPurchasesReducer } from "../../redux/utils/updateUserPurchasesReducer";
import { emptyCart } from "../../redux/cartSlice";
import { useNavigate, useParams } from "react-router-dom";

export const Button = ({ children }) => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  // const [refreeShare, setRefreeShare] = useState(0);
  // const [filteredProduct, setFilteredProduct] = useState(null);
  let filteredProduct = null;

  const clickHandler = (e) => {
    if (!user.currentUser) {
      navigate("/login");
    } else {
      const username = localStorage.getItem("username");
      const productid = localStorage.getItem("productid");

      if (username && productid && username !== user.currentUser._id) {
        const filteredProducts = cart.products
          .filter((product) => product._id === productid)
          .map(({ _id, quantity, title, price }) => ({
            id: _id,
            profit: (price * quantity * 0.05).toFixed(2) - 0,
            quantity,
            title,
            price,
          }));
        // setFilteredProduct(filteredProducts[0]);
        filteredProduct = filteredProducts.length > 0 && filteredProducts[0];
      }

      updateUserPurchasesReducer(dispatch, cart.products);

      const sendRefreeShare = async (filteredProduct) => {
        console.log("first");
        try {
          const res = await axios.post(
            `${BASE_URL}/referrals/`,
            {
              username: user.currentUser._id,
              refereeUsername: username,
              product: filteredProduct,
            },
            {
              headers: { token: `Bearer ${user.currentUser.accessToken}` },
            }
          );
          console.log(res);
          filteredProduct = null;
        } catch (err) {
          console.log(err);
        }
      };

      const sendOrder = async (refreeShare) => {
        console.log("second");
        const reqProducts = cart.products.map(({ _id, quantity }) => ({
          productId: _id,
          quantity,
        }));
        try {
          const res = await axios.post(
            `${BASE_URL}/orders/`,
            {
              userId: user.currentUser._id,
              amount: cart.total - refreeShare,
              address: user.currentUser.address,
              products: reqProducts,
            },
            {
              headers: { token: `Bearer ${user.currentUser.accessToken}` },
            }
          );
          console.log(res);
          dispatch(emptyCart());
        } catch (err) {
          console.log(err);
        }
      };

      filteredProduct && sendRefreeShare(filteredProduct);
      let share =
        username !== user.currentUser._id && filteredProduct
          ? filteredProduct.profit
          : 0;
      console.log(share);
      sendOrder(share);
    }
  };
  return (
    <button
      className="text-lg px-2 py-1 bg-black text-white uppercase rounded-md"
      onClick={clickHandler}
      disabled={!cart || cart.products.length === 0}
    >
      {children}
    </button>
  );
};

/*
const stripePromise = loadStripe(
  "pk_test_51LV1sRSEdjfuZjo4ZnJyOkPu6o4jIlEGOTJC9dWZhUrSxzjMFkLYEPtrwZUuWqTR5hHirFLK8lfnI5BTebXqsppk0039exEumt"
);

export const Button = ({ children }) => {
  const [option, setOption] = useState({
    clientSectet: "",
  });

  useEffect(() => {
    const getClientSecret = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/checkout/secret`, {
          amount: 5000,
        });

        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };

    getClientSecret();
  }, []);

  return (
    <Elements stripe={stripePromise} options={option}>
      <form>
        <PaymentElement />
        <button className="text-lg px-2 py-1 bg-black text-white uppercase rounded-md">
          {children}
        </button>
      </form>
    </Elements>
  );
};
*/

// export const Button = ({ children }) => {
//   // const STRIPE_KEY = process.env.STRIPE_PUBLISHABLE_KEY;
//   const STRIPE_KEY =
//     "pk_test_51LV1sRSEdjfuZjo4ZnJyOkPu6o4jIlEGOTJC9dWZhUrSxzjMFkLYEPtrwZUuWqTR5hHirFLK8lfnI5BTebXqsppk0039exEumt";

//   const [stripeToken, setStripeToken] = useState(null);

//   const user = useSelector((state) => state.user);

//   const onToken = (token) => {
//     setStripeToken(token);
//   };

//   useEffect(() => {
//     const makePayment = async () => {
//       try {
//         console.log("sending req...");
//         const res = await axios.post(`${BASE_URL}/checkout/payment`, {
//           tokenId: stripeToken.id,
//           amount: 2000,
//         });
//         console.log(res);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     stripeToken && makePayment();
//   }, [stripeToken]);

//   return (
//     <StripeCheckout
//       stripeKey="pk_test_51LV1sRSEdjfuZjo4ZnJyOkPu6o4jIlEGOTJC9dWZhUrSxzjMFkLYEPtrwZUuWqTR5hHirFLK8lfnI5BTebXqsppk0039exEumt"
//       // name={user.currentUser.firstName}
//       // discription="Your total is $20"
//       // image={require("../../assets/images/1.png")}
//       token={onToken}
//       amount={2000}
//     >
//       <button className="text-lg px-2 py-1 bg-black text-white uppercase rounded-md">
//         {children}
//       </button>
//     </StripeCheckout>
//   );
// };

export const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

export const Title = ({ children }) => {
  return (
    <div className="container text-center mt-10">
      <h1 className="uppercase text-4xl font-light">{children}</h1>
    </div>
  );
};

export const TopContainer = ({ children }) => {
  return <div className="container flex justify-around">{children}</div>;
};

export const CartInfo = ({ children }) => {
  return <div className="flex gap-10 ">{children}</div>;
};

export const Span = ({ children }) => {
  return (
    <span className="text-lg capitalize underline hover:cursor-pointer">
      {children}
    </span>
  );
};

export const Wrapper = ({ children }) => {
  return (
    <div className="container flex mt-10 justify-between px-4 sm:flex-col md:flex-row lg:flex-row">
      {children}
    </div>
  );
};

export const WrapperProduct = ({ children }) => {
  return <div className="flex-1 flex flex-col gap-8">{children}</div>;
};

export const WrapperSummary = ({ children, display }) => {
  return (
    <div
      className={`w-1/4 border-2 border-gray-800 rounded-md flex flex-col gap-5 py-5 px-4 sm:self-center sm:w-96   ${
        display === 0 && "hidden"
      }`}
    >
      {children}
    </div>
  );
};

export const CartProduct = ({ children }) => {
  return <div className="flex gap-20 width-full">{children}</div>;
};

export const Image = ({ src }) => {
  return (
    <div className="w-56 flex items-center justify-center">
      <img src={src} alt="product" className="w-3/4" />
    </div>
  );
};

export const Info = ({ children }) => {
  return <div className="">{children}</div>;
};

export const ProductInfo = ({ children }) => {
  return <div className="flex flex-col gap-5 justify-around">{children}</div>;
};

export const ProductTitle = ({ children }) => {
  return (
    <div className="">
      <h1 className="text-xl uppercase">
        <b className="font-semibold">Product: </b>
        {children}
      </h1>
    </div>
  );
};

export const ProductId = ({ children }) => {
  return (
    <div className="">
      <h1 className="text-xl">
        <b className="font-semibold">ID: </b>
        {children}
      </h1>
    </div>
  );
};

export const Price = ({ children }) => {
  return (
    <div className="">
      <h1 className="text-4xl font-light">{children}</h1>
    </div>
  );
};

export const Quantity = ({ children }) => {
  return (
    <div className="flex gap-3 self-center justify-self-end justify-center items-center hover:cursor-pointer">
      {children}
    </div>
  );
};

export const Amount = ({ children }) => {
  return (
    <div className="w-10 flex justify-center align-center text-2xl border-2 border-black rounded-md hover:cursor-text">
      {children}
    </div>
  );
};

export const Hr = () => {
  return (
    <div className="w-full text-center">
      <hr className="border-none h-[2px] bg-gray-200 w-full " />
    </div>
  );
};

export const TitleSummary = ({ children }) => {
  return (
    <div className="w-full text-center">
      <h1 className="text-2xl font-light uppercase">{children}</h1>
    </div>
  );
};

export const SubTotal = ({ children }) => {
  return (
    <div className="flex justify-between">
      <b>Subtotal:</b>
      <h1 className="text-lg">${children}</h1>
    </div>
  );
};

export const EstimatedShipping = ({ children }) => {
  return (
    <div className="flex justify-between">
      <b>Estimated Shipping:</b>
      <h1 className="text-lg">${children}</h1>
    </div>
  );
};

export const ShippingDiscount = ({ children }) => {
  return (
    <div className="flex justify-between">
      <b>Shipping Discount:</b>
      <h1 className="text-lg">-${children}</h1>
    </div>
  );
};

export const Total = ({ children }) => {
  return (
    <div className="flex justify-between">
      <b>Total:</b>
      <h1 className="text-lg">${children}</h1>
    </div>
  );
};
