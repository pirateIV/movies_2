import { QUERY_LIST } from "constants/lists";
import MediaList from "components/media/MediaList";

const queries = [QUERY_LIST.tv[1], QUERY_LIST.tv[2]];

const TV = () => <MediaList mediaItems={null} mediaList={queries} />;

export default TV;
