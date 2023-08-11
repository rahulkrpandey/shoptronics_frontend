export const Container = ({ children }) => {
  return (
    <div className="container flex justify-between items-start p-2 gap-16 bg-bgc mt-10 sm:flex-col lg:flex-row md:flex-row">
      {children}
    </div>
  );
};

export const Left = ({ children }) => {
  return (
    <div className="container flex-auto flex flex-col gap-4 px-8">
      {children}
    </div>
  );
};

export const Title = ({ children }) => {
  return (
    <h1 className="uppercase text-white text-2xl font-bold">{children}</h1>
  );
};

export const Info = ({ children }) => {
  return (
    <div className="text-[#f7f7f7] text-lg flex flex-col gap-2 ">
      {children}
    </div>
  );
};

export const Center = ({ children }) => {
  return (
    <div className="container  flex-auto flex flex-col item-center  gap-4 px-8">
      {children}
    </div>
  );
};

export const Icon = ({ children }) => {
  return (
    <span className="text-[#f7f7f7] text-lg  hover:cursor-pointer capitalize">
      {children}
    </span>
  );
};

export const Right = ({ children }) => {
  return (
    <div className="container flex-auto px-8 flex flex-col gap-4">
      {children}
    </div>
  );
};

export const Address = ({ children }) => {
  return <p className="">{children}</p>;
};

export const MobNo = ({ children }) => {
  return <span className="">{children}</span>;
};

export const Email = ({ children }) => {
  return <span className="">{children}</span>;
};
