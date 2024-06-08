import { NavLink } from "react-router-dom";
import NAV_LINKS from "constants/links";

const Navigation = () => {
  return (
    <aside>
      {NAV_LINKS.map((link) => (
        <NavLink
          to={link.to}
          key={link.to}
          title={link.label}
          aria-label={link.label}
        >
          {({ isActive }) => (
            <div
              className={`${
                isActive
                  ? `${link.activeIcon}
                 text-primary`
                  : link.defaultIcon
              } text-xl sm:text-2xl`}
            ></div>
          )}
        </NavLink>
      ))}
    </aside>
  );
};

export default Navigation;
