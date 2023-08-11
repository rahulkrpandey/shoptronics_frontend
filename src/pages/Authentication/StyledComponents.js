export const Container = ({ children }) => {
  return (
    <div className="container h-screen flex items-center justify-center">
      {children}
    </div>
  );
};

export const FormContainer = ({ children }) => {
  return (
    <div className="flex flex-col gap-4 shadow-lg flex-auto max-w-md p-8">
      {children}
    </div>
  );
};

export const Form = ({ children }) => {
  return <form className="flex flex-col">{children}</form>;
};

export const Label = ({ children, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="capitalize mb-2">
      {children}
    </label>
  );
};

export const Input = ({ type, icon, name }) => {
  let placeholder =
    type == "email" ? "e.g. abc@company.com" : "e.g. Abcsd@1234";

  if (name == "first name") {
    placeholder = "e.g. Rahul";
  } else if (name == "last name") {
    placeholder = "e.g. Pandey";
  } else if (name == "address") {
    placeholder = "e.g. A-455 Madhubala Sweets Delhi";
  } else if (name == "number") {
    placeholder = "e.g. 9991119990";
  }
  return (
    <div className="border-2 border-primary rounded-md px-4 py-1 mb-4 flex gap-4">
      {icon}
      <input
        className="outline-none w-full"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export const Button = ({ children, type }) => {
  return (
    <button
      className="bg-primary uppercase font-bold w-2/3 py-2 self-center rounded-lg"
      type={type}
    >
      {children}
    </button>
  );
};

export const OtherOptions = ({ children }) => {
  return <div className="">{children}</div>;
};

export const OptionList = ({ children }) => {
  return (
    <ul className="flex items-center justify-between hover:cursor-pointer capitalize text-primary font-semibold underline">
      {children}
    </ul>
  );
};

export const Option = ({ children }) => {
  return <li className="">{children}</li>;
};
