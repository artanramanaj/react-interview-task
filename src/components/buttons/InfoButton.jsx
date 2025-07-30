import * as Icons from "react-icons/fa";
const InfoButton = ({
  label,
  bgClass = "bg-gray-200",
  textClass = "text-gray-800",
  className = "",
  padding = "py-3 px-6",
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`
        ${padding}
        rounded-lg 
        font-medium 
        ${bgClass} 
        ${textClass}
        ${className}
      `}
    >
      {label}
    </button>
  );
};

export default InfoButton;
