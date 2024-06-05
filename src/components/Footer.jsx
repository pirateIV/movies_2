const Footer = () => {
  return (
    <footer className="w-full p-10 order-last lg:max-w-[calc(100%-70px)]">
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
            <img src="/tmdb.svg" width="100" height="55" alt="tmdb logo" />
          </a>
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-300/60">
          This project uses the TMDB API but is not endorsed or certified by
          TMDB.
        </p>
      </div>

      <div className="mt-5">
        <div className="flex items-center gap-5 text-lg">
          <a href="https://twitter.com/benabolade">
            <div className="i-simple-icons:twitter"></div>
          </a>

          <a href="https://github.com/pirateIV/react.movies">
            <div className="i-simple-icons:github"></div>
          </a>

          <a href="https://vercel.com">
            <img src="/vercel.svg" width="145" alt="" />
          </a>

          <div>
            Language:&nbsp;
            <select id="langSwitcher" className="rounded text-sm p-1">
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
