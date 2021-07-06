export const Select = ({
  className,
  children,
  value,
  onChange,
}) => (
  <select
  className={`h-11 outline-none rounded-xl border-2 bg-white text-sm px-3.5  ${className}`}
    onChange={onChange}
    value={value}
  >
    {children}
  </select>
)