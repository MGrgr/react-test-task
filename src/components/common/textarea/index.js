import clsx from "clsx";

export const TextArea = ({
  header,
  className: classNameProp,
  ...props
}) => {

  const className = clsx('outline-none rounded-xl border-2 bg-white text-sm p-3.5 mt-3', {
    [classNameProp]: classNameProp
  })
  return <div className="flex flex-col h-full w-full">
    {header && (<h2 className="text-xl font-bold">
      {header}
    </h2>)}
    <textarea 
      className={className}
      {...props}
    >
    </textarea>
  </div> 
}