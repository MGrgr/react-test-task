import clsx from "clsx"
import { Loader } from "../loader"

export const Button = ({
  color = 'primary',
  className: classNameProp,
  children,
  loading,
  disabled,
  ...props
}) => {

  const className = clsx('h-11 outline-none rounded-xl text-sm px-3.5', {
    'bg-link text-white': color === 'primary',
    'bg-bgLink text-link': color === 'light',
    'opacity-50 text-grey': disabled || loading,
    [classNameProp]: classNameProp
  })

  return <button className={className} {...props} disabled={disabled}>
    {children}
    {
      (loading) 
      ? <div className="absolute w-full h-full top-0 left-0 flex flex-row items-center justify-center">
          <Loader className="" size={20} width={4}/>
        </div>
      : undefined
    }
  </button>
}