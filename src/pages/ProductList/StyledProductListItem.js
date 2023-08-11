export const FilterContainer = ({ children }) => {
  return <div className="container mt-10">{children}</div>;
};

export const Filter = ({ children }) => {
  return (
    <div className="w-full flex items-center gap-4 pl-4 uppercase">
      {children}
    </div>
  );
};

export const FilterText = ({ children }) => {
  return <div className="text-xl font-bold">{children}</div>;
};

export const Select = ({ children, onChange }) => {
  return (
    <select className="border-solid border-2 border-black" onChange={onChange}>
      {children}
    </select>
  );
};

export const Option = ({ children, value }) => {
  return (
    <option className="rounded-none" value={value}>
      {children}
    </option>
  );
};
