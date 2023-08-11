import { useNavigate } from "react-router-dom";
export const Container = ({ children }) => {
  return <div className="container mb-20">{children}</div>;
};

export const CategoryItem = ({ children }) => {
  return (
    <div className="flex justify-around sm:flex-col md:flex-row lg:flex-row sm:gap-5 ">
      {children}
    </div>
  );
};

export const Title = ({ children }) => {
  return (
    <div className="justify-self-end">
      <h1 className="text-2xl  font-bold uppercase ">{children}</h1>
    </div>
  );
};

// export const Title = ({ children }) => {
//   return (
//     <div className="absolute top-0 left-0 w-full flex justify-center items-center h-full bg-transparent">
//       <h1 className="text-2xl text-white font-bold uppercase ">{children}</h1>
//     </div>
//   );
// };

export const Heading = ({ children }) => {
  return (
    <div className="w-full text-center">
      <h1 className="text-4xl text-primary font-bold uppercase mb-4">
        {children}
      </h1>
    </div>
  );
};

export const Image = ({ src }) => {
  return (
    <div className="w-80 h-96">
      <img src={src} className="w-full h-full object-contain" />
    </div>
  );
};

export const CategoryItemContainer = ({ children, url }) => {
  const navigate = useNavigate();
  const navigateHandler = (url) => {
    console.log("clicked");
    navigate(url);
  };
  return (
    <div
      className="hover:cursor-pointer hover:scale-105 ease-in-out duration-300 relative flex flex-col items-center justify-center  rounded-md flex-1 w-96 self-center shadow-lg bg-gray-100"
      onClick={() => navigateHandler(url)}
    >
      {children}
    </div>
  );
};
