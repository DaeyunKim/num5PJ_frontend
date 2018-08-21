import React, { Component } from 'react';
import PropTypes from 'prop-types';

// class PerformanceCard extends Component {
//     constructor(props){
//         super(props);
        
//         this.state = {
//             data:this.props,
//             date : this.props.date,
//             performList: this.props.performData
//         }
//     }
    

//     render() {
//     console.log("state performlist Card",this.props);
//     // console.log("props Data Card: ",this.props.performList);
//     const date = (<h1>{this.state.date}</h1>);
//     const performlist = this.state.performList.map((name,index)=>{
//         // console.log(name)
//        return (
//         <li key={index}> 공연 : {name.PerformanceName} 장소 : {name.location}</li>
//        ) 
//     })
//     // const name = "date";
//         return (
//             <div>
//                 {date}
//                 <ul>
//                     {performlist}
//                 </ul>
//             </div>
//         );
//     }
// }


const PerformanceCard = ({date,performInfo})=>{

    console.log(" inside card performInfo : ",date,performInfo)
    const dateTitle = (<h1>{date}</h1>);
    const performlist = performInfo.map((name,index)=>{
        // console.log(name)
       return (
        <li key={index}> 공연 : {name.PerformanceName} 장소 : {name.location}</li>
       ) 
    })

    return (
                    <div>
                        {dateTitle}
                        <ul>
                            {performlist}
                        </ul>
                    </div>)
}

export default PerformanceCard;

PerformanceCard.propTypes = {
    date:PropTypes.string,
    performInfo:PropTypes.array
}
