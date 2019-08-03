import axios from 'axios';

const KEY = 'AIzaSyBp4FuLyUAxgERvFk3pgqJ5hKppopoF3a4';

export default axios.create({
    baseURL: 'http://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});