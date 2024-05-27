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
    <aside className="w-full flex items-center bg-black absolute bottom-0 left-0 right-0 order-2 lg:static lg:order-1 lg:flex-col justify-evenly border-t border-gray-600 p-5 lg:border-t-0 border-r lg:w-auto lg:min-h-screen">
      {links.map(({ to, label, activeIcon, defaultIcon }) => (
        <NavLink key={to} to={to} title={label} aria-label={label}>
          {({ isActive }) => (
            <div
              className={`${
                isActive ? `${activeIcon} text-primary` : defaultIcon
              } text-2xl`}
            ></div>
          )}
        </NavLink>
      ))}
    </aside>
  );
};

export default SidebarNav;
