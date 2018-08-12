import React, { Component } from 'react';
import InfoWrapper from '../../component/InfoWrapper/InfoWrapper';
import PerformList from '../../component/PerformList/PerformList';
import TableComponent from '../../component/TableComponent/TableComponent';
class InfoContainer extends Component {
    
    constructor(props){
        super(props);

    }   
    

    render() {
        // When it using Table Components
        // const performInfo = 
        // {
        //     columns: ['날짜', '공연', '아티스트', '장소'],
        //     rows: [{
        //     'Service': 'Veterinary Assitance',
        //     'Cost/Unit': 50,
        //     'Unit': '1 Hour',
        //     'Units Requested': 12
        //     }, {
        //     'Service': 'Veterinary Assitance',
        //     'Cost/Unit': 50,
        //     'Unit': '1 Hour',
        //     'Units Requested': 12
        //     }]
        // }
        
        //make Performlist for performinfo of list : make list of Performq
        // const performOfDate = performance.map()

        let performData = [
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
        
        return (
            <InfoWrapper>
                {/* <div>
                    2018년 8월 11일 공연이 있습니다.  
                </div> */}
                {/* <TableComponent data = {performInfo}/> */}
                <PerformList data = {performData}></PerformList>
            </InfoWrapper>
        );
    }
}

export default InfoContainer;