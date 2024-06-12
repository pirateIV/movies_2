const buildURL = (imagePath, size) =>
  `https://movies-proxy.vercel.app/ipx/f_webp&s_${size}/tmdb/${imagePath}`;

const MediaItemImage = ({ imagePath, title }) => (
  <div className="media-item">
    {imagePath && (
      <img
        width="400"
        height="600"
        src={buildURL(imagePath, "400x600")}
        srcSet={`${buildURL(imagePath, "400x600")}
            1x, ${buildURL(imagePath, "800x1200")} 2x`}
        alt={`movie title: ${title}`}
      />
    )}
  </div>
);

export default MediaItemImage;
