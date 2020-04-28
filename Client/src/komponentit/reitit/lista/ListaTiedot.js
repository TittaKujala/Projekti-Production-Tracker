import React, { Component } from 'react';
import { getData } from "./listaService"
import moment from "moment"
import './ListaTiedot.css'
import { Table } from "react-bootstrap"



class ListaPohja extends Component {

    state = {
        Data: []
    }

    componentDidMount = () => {
        this.importData();
    }
    importData = () => {
        getData().then(async res => {
            console.log(res.data)
            await this.setState({ Data: res.data })
            console.log(this.state)
        });
    }



    render() {
        var lista = this.state.Data.map(b => {
            return (
                <tr>
                    <td key={b.id} value={b.id}>{b.id}</td>
                    <td key={b.id} value={b.id}>{moment(b.pvm).format('DD/MM/YYYY')}</td>
                    <td key={b.id} value={b.id}>{b.nimi}</td>
                    <td key={b.id} value={b.id}>{b.tyovuoro}</td>
                    <td key={b.id} value={b.id}>{b.tuotenimi}</td>
                    <td key={b.id} value={b.id}>{b.tehtytunnit}</td>
                    <td key={b.id} value={b.id}>{b.tehdytkappaleet}</td>
                    <td key={b.id} value={b.id}>{b.hairiokesto}</td>
                </tr>);
        })
        return (
          
            <div className="font">
            <Table striped bordered hover variant="dark">
                
                    <tr>
                        <th>#</th>
                        <th>PÄIVÄMÄÄRÄ</th>
                        <th>LINJA</th>
                        <th>TYÖVUORO</th>
                        <th>TUOTTEEN NIMI</th>
                        <th>KESTO</th>
                        <th>TEHDYT KAPPALEET</th>
                        <th>HÄIRIÖN KESTO</th>
                    </tr>
                    <tbody>{lista}</tbody>
                
            </Table>
            </div>
          

            /* /*<div className="table">
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <table>
                    <tr>
                        <th className="td">ID</th>
                        <th>Päivämäärä</th>
                        <th>Linja</th>
                        <th>Työvuoro</th>
                        <th>Tuotteen nimi</th>
                        <th>Kesto</th>
                        <th>Tehdyt kappaleet</th>
                        <th>Häiriön kesto</th>
                    </tr>
                    {lista}
                </table>
            </div> */ 
        );
   }
}

// const taulukko = {
//     margin: "100px",
//     display: 'flex', 
//     justifyContent: 'center',
//     bordercollapse: 'collapse',
//     width: '100%'

// }






export default ListaPohja;