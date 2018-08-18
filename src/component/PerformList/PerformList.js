import React from 'react';

import PerformanceCard from '../../component/PerformanceCard/PerformanceCard';

const PerformList = ({data})=>{

     console.log("performListData",data);
    //  console.log("performList",data.length); 
    let dateData = data;
    let listOfDate = dateData.map((info,index)=>{
        // console.log("PerformList js info : ",info.performInfo);
        return <PerformanceCard key={index} date = {info.date} performInfo = {info.performInfo}></PerformanceCard>
    })

    return (

        <div>
              {listOfDate}         
        </div>

    )
}
export default PerformList;