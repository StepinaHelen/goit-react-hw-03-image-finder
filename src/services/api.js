import axios from 'axios';
// axios.defaults.headers.common['Authorization'] =
//   'Bearer 19698449 - a55de06fd7d84dcee8317752d';
const fetchHits = ({ serchQuery = '', currentPage = 1, per_page = 12 }) => {
  return axios.get(
    `https://pixabay.com/api/?key=19698449-a55de06fd7d84dcee8317752d&q=${serchQuery}&image_type=photo&per_page=${per_page}&page=${currentPage}&orientation=horizontal`,
  );
};
export default { fetchHits };
