import axios from 'axios';
//공연정보 알아오기 
export function getJazzInfo() {
    // return axios.get("http://localhost:3001/jazz");
    return axios.get("https://us-central1-mycalender-187407.cloudfunctions.net/app/jazz");
    // return axios.get("http://localhost:5000/mycalender-187407/us-central1/app/jazz");
}
//가게 리스트 받아오기
export function getStoreNames() {
    // return axios.get("http://localhost:3001/jazz/location");
    return axios.get("https://us-central1-mycalender-187407.cloudfunctions.net/app/jazz/location");
    // return axios.get("http://localhost:5000/mycalender-187407/us-central1/app/jazz/location");
}