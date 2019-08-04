import axios from 'axios';

const KEY = 'AIzaSyByf49K9LetgIrEtqdym2Q2hueCUrP5EPE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});