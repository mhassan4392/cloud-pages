const Button = ({ children, className = "", disabled, ...rest }) => {
  return (
    <button
      disabled={disabled}
      className={`flex items-center justify-center py-1 px-6 rounded-md bg-primary text-white h-10 ${
        className ? className : ""
      } ${disabled ? "bg-opacity-50" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
