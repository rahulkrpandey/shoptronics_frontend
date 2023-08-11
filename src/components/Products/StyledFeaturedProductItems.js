export const Container = ({ children }) => {
  return (
    <div className="container flex flex-wrap justify-center gap-12 mt-10">
      {children}
    </div>
  );
};

export const Heading = ({ children }) => {
  return (
    <div className="w-full text-center">
      <h1 className="text-4xl text-primary font-bold uppercase mb-4">
        {children}
      </h1>
    </div>
  );
};
