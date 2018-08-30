import React, { Component } from 'react';
import InfoWrapper from '../../component/InfoWrapper/InfoWrapper';
import PerformList from '../../component/PerformList/PerformList';
import TableComponent from '../../component/TableComponent/TableComponent';
import data from '../../data/data.json';
import axios from 'axios';
class InfoContainer extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            storeInfo : "전체",
            // storeInfo : "jazz Alley",
            origin_performData:"",
            storeList:[],
            filter_performData:"",
        }
        // this.handleChange = this.handleChange.bind(this);
    }   


    //selectBox 가게 정보 바뀔때 
    handleChange=(e)=>{
        // alert("change Store");
        // console.log(e.target.value);
        debugger;
        let filterID = e.target.value;
        let performData = this.state.origin_performData;
        // console.log("filterData : ",performData)
    
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
                //  console.log("pre: ", data);
                 return data;
             })
             console.log("filter한 데이터 : ", performFilter)
             this.setState({
                 storeInfo : e.target.value,
                 filter_performData : performFilter
             })
             console.log("데이터 변경 : ",this.state)
        }

      

    }
    // componentDidMount(){

    // }

    //rendering하기 전에 state에 데이터 삽입
    loadData=()=>{
    // componentWillMount(){
        console.log("loadData");
            const performData = [
                {
                date: new Date('2018-08-10').toLocaleDateString('se'),
                performInfo : [
                    {
                        PerformanceName : 'Sloppy notes',
                        location : 'jazz Alley'
                    },
                    {
                        PerformanceName : 'Brass Monkeys ',
                        location : 'all that jazz'
                    },
                    {
                        PerformanceName : 'Wave',
                        location : 'all that jazz'
                    },
                    {
                        PerformanceName : 'Sloppy notes',
                        location : 'jazz Alley'
                    }
                ] 
                },
                {
                    date: new Date('2018-08-11').toLocaleDateString('se'),
                    performInfo : [
                        {
                        PerformanceName : 'Sloppy notes',
                        location : 'jazz Alley'
                        },
                        {
                        PerformanceName : 'Brass Monkeys ',
                        location : 'all that jazz'
                        },
                        {
                        PerformanceName : 'Wave',
                        location : 'all that jazz'
                        },
                        {
                        PerformanceName : 'Sloppy notes',
                        location : 'jazz Alley'
                        }
                    ] 
                }
            ]
            //데이터베이스에서 가게에 대한 정보만 가지고오는방법 vs 일자별 정보를 가지고와서 javascript에서 필터할때
            const storeList = ["전체","jazz Alley","all that jazz"] ;

            // console.log(storeList);
            // console.log(performData);
            // console.log(storeInfo);

            this.setState({
                storeInfo: this.state.storeInfo,
                origin_performData: performData,
                storeList :storeList,
                filter_performData:[]
            });
            
    }

    loadDataFile = ()=>{
        console.log("loadData");
        //가게 이름 정보 
        const storeList = ["전체","jazz Alley","all that jazz"] ;
        console.log("1",data.result);
        var orinData=null;
        axios.get("http://localhost:3001/jazz")
        .then(res=>{
            console.log(res.data);
            orinData = res.data;
        })
        .catch(error=>console.log(error));
        this.setState({
            storeInfo: this.state.storeInfo,
            origin_performData: orinData,
            storeList :storeList,
            filter_performData:[]
        });
    }
    //backend에서 불러오기
    loadDatafromBack=()=>{
        //await 로 불러오기 
        // fetch("http://localhost:3001/jazz")
        // .then((res)=>console.log(res.json()))
        // .catch(err=>console.log(err));
        const url = "http://localhost:3001/jazz";
        return axios.get(url)
    }
    componentWillMount(){
        this.loadData();
        // this.loadDataFile();
        //await
        // const data = this.loadDatafromBack();
        // console.log("init Data : ",data)
    }
    render() {
 
        // this.loadData();
        console.log("render : state : ",this.state);
        // this.loadDataFile();
        // console.log("origin : ",this.state.origin_performData);
        // console.log("filter",this.state.filter_performData);

        const selectBox = this.state.storeList.map((d,index)=>{
            return <option key={index} value={d}>{d}</option>
        })
        //filter로 할지 아니면 전체로 할지 정하기 
        const filter_Data = ()=>{
            if(this.state.storeInfo==="전체"){
                console.log("after Filter",this.state.filter_performData);
                return <PerformList data = {this.state.origin_performData}></PerformList>;
            }else{
                console.log("after Filter",this.state.filter_performData);
                return <PerformList data = {this.state.filter_performData}></PerformList>;
            }
        }
        
        // console.log("truefalse : ",(this.state.storeInfo==="전체"),this.state.filter_performData)
        // console.log("필터 선택 데이터 : ",filterData)
        return (   
            <InfoWrapper>
                <div>
                    2018년 8월 11일 공연이 있습니다.  
                    <label> 가게 정보</label>
                    {/* <select value={this.state.storeInfo} onChange={changeStoreInfo()}> */}
                    <select value={this.state.storeInfo} onChange={this.handleChange}>
                        {selectBox}
                    </select>
                </div>
                {/* <TableComponent data = {performInfo}/> */}
                {/* <PerformList data = {this.state.origin_performData}></PerformList> */}
                {filter_Data()}
            </InfoWrapper>
        );
    }
}

export default InfoContainer;