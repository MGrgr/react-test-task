import { NavLink } from "react-router-dom";

export const Link = ({
  to,
  children
}) => (
  <NavLink 
    to={to}
    className="rounded-md flex flex-row justify-start items-center h-12 px-3.5 text-literalGrey" 
    activeClassName="rounded-md flex flex-row justify-start items-center bg-bgLink h-12 text-link px-3.5"
  >
    <p>{children}</p>
  </NavLink>
)