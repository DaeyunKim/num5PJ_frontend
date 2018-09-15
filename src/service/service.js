import axios from 'axios';
//공연정보 알아오기 
export function getJazzInfo() {
    return axios.get("http://localhost:3001/jazz");
}
//가게 리스트 받아오기
export function getStoreNames() {
    return axios.get("http://localhost:3001/jazz/location");
}