const Button = ({ isCancel, txt = "", onClick, customClassName = "" }) => {
  const buttonColor = isCancel
    ? "bg-red-500 hover:bg-red-600 focus-ring-green-300"
    : "bg-green-500 hover:bg-green-600 focus:ring-green-300";

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2  text-white text-base font-medium rounded-md  w-28  shadow-sm focus:outline-none focus:ring-2 ${buttonColor} ${customClassName}`}
    >
      {txt}
    </button>
  );
};

export default Button;
