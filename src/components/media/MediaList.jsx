import { useTranslation } from "react-i18next";
import MediaLink from "./MediaLink";

const MediaList = ({ mediaList }) => {
  const { t } = useTranslation();

  return (
    <>
      {mediaList.map((media, i) => (
        <div key={i} className="popular">
          <div className="header">
            <h1>{media.title}</h1>
            <MediaLink media={media}>{t("Explore more")}</MediaLink>
          </div>
          <div className="content">
            <MediaLink media={media}>
              <div className="media-item">
                <div className="flex flex-col items-center justify-around opacity-45 translate-y-1/2">
                  <div
                    className={`${media.type === "movie" ? "i-ph-film-strip" : "i-ph-television-simple"} text-4xl`}
                  ></div>
                  <div>{t("Explore more")}</div>
                </div>
              </div>
            </MediaLink>
          </div>
        </div>
      ))}
    </>
  );
};

export default MediaList;
