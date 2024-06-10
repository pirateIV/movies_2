import { NavLink } from "react-router-dom";
import NAV_LINKS from "constants/links";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <aside>
      {NAV_LINKS.map((link) => (
        <NavLink
          to={link.to}
          key={link.to}
          title={t(link.label)}
          aria-label={t(link.label)}
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
