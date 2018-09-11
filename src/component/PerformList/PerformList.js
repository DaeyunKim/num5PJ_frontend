import React,{Component} from 'react';
import PropTypes from 'prop-types';
import PerformanceCard from '../../component/PerformanceCard/PerformanceCard';
import '../../styles/infoWrapper.css';
const PerformList = ({data})=>{

     console.log("performListData",data);

    let listOfDate = data.map((info,index)=>{
        console.log("PerformList js info : ",info);
        return <PerformanceCard key={index} date = {info.date} performInfo = {info.performInfo}></PerformanceCard>
    })

    return (

        <div className="centerContent">
              {listOfDate}         
        </div>

    )
}

export default PerformList;

PerformList.propTypes = {
    data:PropTypes.array
}