import { QUERY_LIST } from "constants/lists";
import MediaList from "components/media/MediaList";

const queries = [QUERY_LIST.movie[1], QUERY_LIST.movie[2], QUERY_LIST.movie[3]];

const Movies = () => <MediaList mediaList={queries} />;

export default Movies;
