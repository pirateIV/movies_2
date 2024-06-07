// import { use } from "i18next";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  console.log(i18n.language)

  return (
    <div>
      Language:&nbsp;
      <select id="langSwitcher" className="rounded text-sm p-1">
        {/*   */}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
