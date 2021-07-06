import clsx from "clsx"

export const Tab = ({
  className: classNameProp,
  children,
  active
}) => {

  const className = clsx('', {
    'border-b-2 border-link': active,
    [classNameProp]: classNameProp,
  })
  return  <div className={className}>
            {children}
          </div>
}