import React, { Component } from 'react';
import {Bar} from "react-chartjs-2"

class Tavoitteet extends Component {
    
    render() {
        console.log(this.props.tiedot)
        var tuotenro = this.props.tiedot.map( b => b.tuotenro) 
        var vuoro = this.props.tiedot.map(b => b.tyovuoro)       
        var hairiotmukanapros = this.props.tiedot.map( b => b.hairiotmukanapros)
        console.log(tuotenro)
        console.log(vuoro)
        console.log(hairiotmukanapros)
        var tavoitedata = {
            labels: vuoro,
            datasets: [
                {
                    label: "Tehokkuus",
                    data: hairiotmukanapros, 
                    backgroundColor: ['#00B3E6','#00B3E6','#00B3E6', '#FFB399', '#FFB399',
                    '#FFB399', '#FF33FF','#FF33FF','#FF33FF', '#FFFF99', '#FF6633', 
                    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
                    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
                    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
                    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
                    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
                    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
                    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
                    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
                    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'],
                    borderWidth:1,
                    borderColor:'#777',
                    hoverBorderWidth:3,
                    hoverBorderColor:'#000'
                }
            ]
        }
        console.log(tavoitedata)
        return (
            <div style={bar}>
                <Bar
                    data={tavoitedata}
                    options={{
                        title: {
                            display:true,
                            text:"Tehokkuus",
                            fontSize:25
                        },
                        legend:{
                            display:false,
                        },
                        tooltips:{
                            titleFontSize: 18,
                            bodyFontSize: 18
                        },  
                        layout:{
                            padding:{
                                left:100
                            }
                        },
                        scales: {
                            fontSize:20,
                            yAxes: [{
                              ticks: {
                                beginAtZero: true,
                                min: 0,
                                fontSize: 18
                              }    
                           }],
                           xAxes: [{
                             ticks: {
                               fontSize: 18
                             }    
                          }]
                        }
                                             
                    }}
            />
            </div>
        );
    }
}

const bar = {
    width:"670px",
    height:"350px"
}

export default Tavoitteet;