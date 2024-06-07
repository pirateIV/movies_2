import { NavLink } from "react-router-dom";
import links from "constants/links";

const Navigation = () => {
  return (
    <aside>
      {links.map(({ to, label, activeIcon, defaultIcon }) => (
        <NavLink key={to} to={to} title={label} aria-label={label}>
          {({ isActive }) => (
            <div
              className={`${
                isActive ? `${activeIcon} text-primary` : defaultIcon
              } text-xl sm:text-2xl`}
            ></div>
          )}
        </NavLink>
      ))}
    </aside>
  );
};

export default Navigation;
