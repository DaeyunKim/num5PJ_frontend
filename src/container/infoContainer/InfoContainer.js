import React, { Component } from 'react';
import InfoWrapper from '../../component/InfoWrapper/InfoWrapper';
import PerformList from '../../component/PerformList/PerformList';
import LoadingBar from '../../component/LoadingBar';
import * as service from '../../service/service';
// import NativeSelect from '@material-ui/core/NativeSelect';
// import axios from 'axios';
import '../../styles/infoWrapper.css';

class InfoContainer extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            storeInfo : "전체",
            origin_performData:"",
            storeList:[],
            filter_performData:"",
        }
    }  

    //selectBox 가게 정보 바뀔때 
    handleChange= (e) => {
        let filterID = e.target.value;
        let performData = this.state.origin_performData;
    
        if(filterID==="전체"){
            this.setState({
                storeInfo:e.target.value,
                origin_performData:this.state.origin_performData
            })
        }else{
            console.log("filter 할아이디 값 : ",filterID)
            let performFilter= performData.map((d)=>{
                console.log("데이터 row",d);
                 var performFilter = d.performInfo.filter((perform)=>perform.location===e.target.value);
                 let data = {
                     date: d.date,
                     performInfo:  performFilter
                 }
                 return data;
             })
             console.log("filter한 데이터 : ", performFilter)
             this.setState({
                 storeInfo : e.target.value,
                 filter_performData : performFilter
             })             
        }
    }

    //데이터 받아오기전의 초기 상태 (default )
    initData = () => {
        console.log("loadData");
        const performData = [
            {
            date: new Date('1000-11-11').toLocaleDateString('se'),
            performInfo : [
                {
                    PerformanceName : '데이터 로딩중',
                    location : '잠시만 기다려주세요'
                }
            ] 
            }
        ]
        //데이터베이스에서 가게에 대한 정보만 가지고오는방법 vs 일자별 정보를 가지고와서 javascript에서 필터할 때
        const storeList = ["로딩중"] ;
        this.setState({
            storeInfo: this.state.storeInfo,
            storeList :storeList,
            origin_performData: performData,
            filter_performData:[],
            loaded : false
        });
    }

    /**
     * Jazz 정보를 불러온다.
     */
    getJazzData = async () => {
        //await 로 불러오기 
        const storeList = ["전체"];
         await service.getJazzInfo()
         .then(response => {
            console.log(response.data);
            this.setState({
                storeInfo: this.state.storeInfo,
                origin_performData: response.data.result,
                storeList :storeList,
                filter_performData:[],
                loaded : true
            });
         });

        await service.getStoreNames()
        .then(response => {
            // response.data.result;
            response.data.result.splice(0, 0, "전체");
            this.setState({
                ...this.state,storeList:response.data.result,
                loaded : true
            })
        })
        

    }
    componentWillMount(){
        this.initData();//default 데이터 로징 전에 출력 하는 곳 
        this.getJazzData();//데이터베이스를 설치 안할시에는 우선 이부분 주석처리하고 하기 
    }

    render() {
        const selectBox = this.state.storeList.map((d,index) => {
            return <option key={index} value={d}>{d}</option>
        })
        //filter로 할지 아니면 전체로 할지 정하기 
        const filterData = () => {
            if(this.state.storeInfo === "전체"){
                // console.log("after Filter",this.state.filter_performData);
                return (!this.state.loaded) ?
                <LoadingBar /> : <PerformList data = {this.state.origin_performData} />;
            }else{
                // console.log("after Filter",this.state.filter_performData);
                return (!this.state.loaded) ?
                <LoadingBar /> :  <PerformList data = {this.state.filter_performData} />;
            }
        }

        return (   
            <InfoWrapper>
                <div className="txtCenter">
                    2018년 8월 11일 공연이 있습니다.  
                    <label> 가게 정보</label>
                    <select native={"true"} value={this.state.storeInfo} onChange={this.handleChange}>
                        {selectBox}
                    </select>
                </div>
                {filterData()}
            </InfoWrapper>
        );
    }
}

export default InfoContainer;