import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Tab = ({ to, label, className, ...rest }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-center w-32 py-2 ${className} ${
          isActive ? "bg-slate-700 text-white" : "bg-slate-300 text-slate-800"
        }`
      }
    >
      {label}
    </NavLink>
  );
};

Tab.propTypes = {
  to: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
};

export default Tab;
