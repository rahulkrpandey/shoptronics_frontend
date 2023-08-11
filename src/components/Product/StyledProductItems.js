import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserLikedProductReducer } from "../../redux/utils/updateUserLikedProductReducer";

export const Container = ({ children }) => {
  return (
    <div className="w-72 h-96 mb-8 flex align-center items-center relative flex-col shadow-md rounded-md bg-gray-200 justify-end">
      {children}
    </div>
  );
};

export const Image = ({ src }) => {
  return (
    <div className="w-full h-64 px-2 py-4">
      <img
        src={src}
        alt="products"
        className="w-full h-full object-scale-down"
      />
    </div>
  );
};

export const Icons = ({ children }) => {
  return (
    <div
      className={`w-full flex justify-center items-end absolute top-0 left-0 h-full gap-8`}
    >
      {children}
    </div>
  );
};

export const Icon = ({ children, name, id }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const [liked, setLiked] = useState(
    user ? user.likedProducts.includes(id) : false
  );
  const clickHandler = (e) => {
    if (!id) {
      return;
    }

    !user && alert("you have to log in to like products");
    user && setLiked((prev) => !prev);
  };

  useEffect(() => {
    setLiked(user ? user.likedProducts.includes(id) : false);
  }, [user]);

  // console.log(user);
  useEffect(() => {
    user && updateUserLikedProductReducer(dispatch, id, liked);
  }, [liked]);

  return (
    <div
      onClick={clickHandler}
      className={`w-10 h-10 mb-2 flex justify-center items-center  text-white rounded-full hover:cursor-pointer 
    hover:scale-110 hover:transition duration-150 ease-in-out
    hover:bg-gray-800 ${
      name && name === "like" && liked ? "bg-gray-800" : "bg-gray-400"
    }`}
    >
      {children}
    </div>
  );
};
