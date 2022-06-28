import axios from "axios";

const KEY = "AIzaSyD7op0R-a7Aayb6XLky5cN037Sfl-zaBvU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 7,
    key: KEY,
  },
});
