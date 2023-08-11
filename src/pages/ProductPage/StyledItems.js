export const Wrapper = ({ children }) => {
  return (
    <div className="container flex justify-around mt-10 sm:flex-col md:flex-row lg:flex-row">
      {children}
    </div>
  );
};

export const ImageContainer = ({ children }) => {
  return (
    <div className="flex-1 flex justify-center items-center h-[40vh] ">
      {children}
    </div>
  );
};

export const InfoContainer = ({ children }) => {
  return (
    <div className="flex-1 flex flex-col gap-4 pl-8 sm:mt-10 lg:mt-0 md:mt-0">
      {children}
    </div>
  );
};

export const Image = ({ src }) => {
  return <img className="h-full object-scale-down" src={src} alt="product" />;
};

export const Title = ({ children }) => {
  return (
    <div className="">
      <h1 className="uppercase font-semibold text-2xl">{children}</h1>
    </div>
  );
};

export const Price = ({ children }) => {
  return <div className="text-4xl font-light">{children}</div>;
};

export const Container = ({ children }) => {
  return <div className="flex gap-40">{children}</div>;
};

export const Quantity = ({ children }) => {
  return (
    <div className="flex gap-4  items-center hover:cursor-pointer">
      {children}
    </div>
  );
};

export const Amount = ({ children }) => {
  return (
    <div className="text-xl border-2 border-sky-400 w-10 rounded-md flex justify-center items-center hover:cursor-text">
      {children}
    </div>
  );
};

export const Button = ({ children }) => {
  return <button className="">{children}</button>;
};

export const Desc = ({ children }) => {
  return <p className="">{children}</p>;
};
