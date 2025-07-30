const Input = ({
  type,
  bgClass = "bg-primary-white",
  padding = "py-1 px-4",
  width,
  border,
  placeholder = "search...",
  value,
  onChange,
}) => {
  return (
    <>
      <input
        placeholder={placeholder}
        type={type}
        className={`${width} ${bgClass} ${padding}  ${border} focus:outline-none focus:ring focus:ring-primary-blue text-center md:text-start`}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export default Input;
