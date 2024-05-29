import { NavLink } from "react-router-dom";
import "@assets/css/_icons.css";

// prettier-ignore
const links = [
  { to: "/", label: "Home", activeIcon: "i-ph-house-fill", defaultIcon: "i-ph-house" },
  { to: "/movies", label: "Movies", activeIcon: "i-ph-film-strip-fill", defaultIcon: "i-ph-film-strip" },
  { to: "/tv", label: "TV Shows", activeIcon: "i-ph-television-simple-fill", defaultIcon: "i-ph-television-simple" },
  { to: "/search", label: "Search", activeIcon: "i-ph-magnifying-glass-fill", defaultIcon: "i-ph-magnifying-glass" },
];

const SidebarNav = () => {
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

export default SidebarNav;
