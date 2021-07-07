import clsx from "clsx"

export const Tab = ({
  className: classNameProp,
  children,
  active
}) => {

  const className = clsx('relative cursor-pointer', {
    'font-bold': active,
    'text-literalGrey': !active,
    [classNameProp]: classNameProp,
  })

  const bottomLineClassName = clsx('absolute top-100 w-full', {
    'border-b-2 border-link shadow-tabActive': active,
  })
  return  <div className={className}>
            {children}
            <div className={bottomLineClassName}/>
          </div>
}