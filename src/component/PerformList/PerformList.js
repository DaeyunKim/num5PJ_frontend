import React from 'react';

import PerformanceCard from '../../component/PerformanceCard/PerformanceCard';

const PerformList = ({data})=>{

    //  console.log("performList",data);
    //  console.log("performList",data.length); 
    // console.log(data[0].performInfo)
    const listOfDate = data.map((info,index)=>{
        console.log(info);
        console.log(index);
        return <PerformanceCard key={index} date = {info.date} performList = {info.performInfo}></PerformanceCard>

    })

    return (

        <div>
              {listOfDate}         
        </div>

    )
}
export default PerformList;