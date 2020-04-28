import React, { Component } from 'react';
import {Pie} from "react-chartjs-2"

class Häiriöt extends Component {
    
    render() {
        console.log(this.props.tiedot) // tässä kaikki tiedot
        var työaikayht = parseInt(this.props.tiedot.tyoaikayht)
        var hairioaikayht = parseFloat(this.props.tiedot.hairioaikayht)
        var hairiotonaika = työaikayht-hairioaikayht

        var hairiot = this.props.tiedot.hairiot.map( b => b.hairio)        
        var hairiotkesto = this.props.tiedot.hairiot.map( b => b.hairiokesto)
        console.log(hairiot)

        hairiot.unshift("häiriötön aika")
        hairiotkesto.unshift(hairiotonaika)
        var hairiodata = {
            labels: hairiot,
            datasets: [
                {
                    label: "Häiriöt",
                    data: hairiotkesto, 
                    backgroundColor: ['#00B3E6', '#FFB399', '#FF33FF', '#FFFF99', '#FF6633', 
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
        console.log(hairiodata)
        return (
            <div style={bar}>
                <Pie
                    data= {hairiodata}
                    options={{
                        title: {
                            display:true,
                            text:"Häiriöt",
                            fontSize:25
                        },
                        legend:{
                            display:true,
                            fontSize:50,
                            position:"left",
                            labels:{
                                fontSize:20
                            }
                        },
                        layout:{
                            padding:{
                                left:100
                            }
                        },
                        tooltips:{
                            titleFontSize: 18,
                            bodyFontSize: 18
                        }            
                    }}
            />
            </div>
        );
    }
}

const bar = {

    width:"670px",
    height:"342px"

}

export default Häiriöt;