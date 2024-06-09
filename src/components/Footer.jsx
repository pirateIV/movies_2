import IconTwitter from "./icon/IconTwitter";
import IconGithub from "./icon/IconGithub";
import IconVercel from "./icon/IconVercel";
import LanguageSwitcher from "./LanguageSwitcher";

const Footer = () => {
  return (
    <footer className="w-full p-16 order-last lg:max-w-[calc(100%-70px)]">
      <div className="flex gap-2 items-center my-2">
        <img src="/movies-sm.webp" alt="" />
        <div className="text-xl">React Movies</div>
      </div>

      <div>
        <div className="inline-flex items-center gap-2  my-2">
          <span className="text-sm text-gray-300/60">Made with&nbsp;</span>
          <img src="/R.png" width="78" height="50" alt="react logo" />
        </div>
      </div>

      <div>
        <div className="inline-flex items-center gap-2 my-2">
          <span className="text-sm text-gray-300/60">
            Data Provided by&nbsp;
          </span>
          <a href="https://themoviedb.org">
            <img src="/tmdb.svg" width="100" height="75" alt="tmdb logo" />
          </a>
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-300/60 my-2">
          This project uses the TMDB API but is not endorsed or certified by
          TMDB.
        </p>
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-5 text-lg">
          <IconTwitter />
          <IconGithub />
          <IconVercel />

          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
