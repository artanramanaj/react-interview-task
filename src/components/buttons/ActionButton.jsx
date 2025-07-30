const ActionButton = ({
  label,
  icon: Icon,
  bgClass = "bg-gray-200",
  textClass = "text-gray-800",
  className = "",
  onClick,
  padding,

  cursor = "cursor-default",
  type = "button",
  iconPosition = "right",
  ...rest
}) => {
  return (
    <button
      type={type}
      {...rest}
      onClick={onClick}
      className={`
        ${padding}
        ${bgClass}
        rounded-lg 
        font-medium 
        flex items-center gap-2 justify-center
        ${textClass} 
        hover:bg-opacity-10
        ${className}
     
        ${cursor}
      `}
    >
      {iconPosition === "left" && Icon && <Icon />}
      {label}
      {iconPosition === "right" && Icon && <Icon />}
    </button>
  );
};

export default ActionButton;
