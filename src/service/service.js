import axios from 'axios';
//공연정보 알아오기 
export function loadStoreInfo (){
    return axios.get("http://localhost:3001/jazz");
}
//가게 리스트 받아오기
export function loadStoreName(){
    
    return axios.get("http://localhost:3001/jazz/location");
}