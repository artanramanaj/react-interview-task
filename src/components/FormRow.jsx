const FormRow = ({
  type = "text",
  name,
  defaultValue,
  labelText,
  placeholder,
}) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-1">
        {labelText || name}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          defaultValue={defaultValue || ""}
          placeholder={placeholder}
          required
          className="w-full bg-primary-gray rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-primary-blue"
          rows={4}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          defaultValue={defaultValue || ""}
          placeholder={placeholder}
          required
          className="w-full bg-primary-gray rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-primary-blue"
        />
      )}
    </div>
  );
};

export default FormRow;
