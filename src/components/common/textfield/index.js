export const TextField = ({
  className,
  type,
  placeholder,
  value,
  onChange,
}) => (
  <input
    className={`h-11 outline-none rounded-xl border-2 bg-white text-sm p-3.5 ${className}`}
    onChange={onChange}
    value={value}
    placeholder={placeholder}
    type={type}
  />
)