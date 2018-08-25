import React,{Component} from 'react';
import PropTypes from 'prop-types';
import PerformanceCard from '../../component/PerformanceCard/PerformanceCard';

const PerformList = ({data})=>{

     console.log("performListData",data);
    //  console.log("performList",data.length); 
    // let dateData = data;
    data.forEach((element,index)=>{
        console.log("element",index,element)
    });
    let listOfDate = data.map((info,index)=>{
        console.log("PerformList js info : ",info);
        return <PerformanceCard key={index} date = {info.date} performInfo = {info.performInfo}></PerformanceCard>
    })

    return (

        <div>
              {listOfDate}         
        </div>

    )
}

// class PerformList extends Component {
//     constructor(props){
//         super(props);
//         console.log(props);
//         this.state={
//             data:props
//         }
//     }

//     render(){
//         console.log(this.state.data);
//         console.log(this.state.data[0]);
//         console.log(this.state.data[1]);
//             let listOfDate = this.state.data.map((info,index)=>{
//                 console.log("PerformList js info : ",info);
//                 return <PerformanceCard key={index} date = {info.date} performInfo = {info.performInfo}></PerformanceCard>
//             })
//         return(
//             <div>
//                {listOfDate}
//             </div>
//         )
//     }
// }
export default PerformList;

PerformList.propTypes = {
    data:PropTypes.array
}