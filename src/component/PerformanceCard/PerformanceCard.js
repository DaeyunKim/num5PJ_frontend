import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PerformanceCard extends Component {
    constructor(props){
        super(props);
        console.log("PerformanceList Data : ",this.props);
        this.state = {
            data:this.props,
            date : this.props.date,
            performList: this.props.performList
        }
    }
    

    render() {
    console.log("performlist",this.state.performList);
    const date = (<h1>{this.state.date}</h1>);
    const performlist = this.state.performList.map((name,index)=>{
       return (
        <li key={index}> 공연 : {name.PerformanceName} 장소 : {name.location}</li>
       ) 
    })
    // const name = "date";
        return (
            <div>
                {date}
                <ul>
                    {performlist}
                </ul>
            </div>
        );
    }
}

export default PerformanceCard;

PerformanceCard.propTypes = {
    date:PropTypes.string,
    performList:PropTypes.array
}