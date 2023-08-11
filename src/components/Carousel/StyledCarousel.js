export const Container = ({ children }) => {
  return <div className="container mb-16">{children}</div>;
};

export const Image = ({ src }) => {
  return (
    <div className="h-[80vh] w-full flex justify-center items-center">
      <img src={src} className="h-full" />
    </div>
  );
};

export const Info = ({ children }) => {
  return <p className="flex justify-center items-center">{children}</p>;
};
