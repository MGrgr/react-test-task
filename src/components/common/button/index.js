import clsx from "clsx"

export const Button = ({
  color = 'primary',
  className: classNameProp,
  children,
  ...props
}) => {

  const className = clsx('h-11 outline-none rounded-xl text-sm px-3.5', {
    'bg-link text-white': color === 'primary',
    'bg-bgLink text-link': color === 'light',
    [classNameProp]: classNameProp
  })

  return <button className={className} {...props}>
    {children}
  </button>
}