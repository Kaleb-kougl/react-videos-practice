import axios from 'axios';

const YOUTUBE_KEY = 'AIzaSyBDDDtTXpeV7FYOIVep0SqoxC5oDZhj4R0';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: YOUTUBE_KEY
  }
});