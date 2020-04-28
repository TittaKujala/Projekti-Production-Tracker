import React, { Component } from 'react'
import Hairio from './Hairio';

export default class HairioLista extends Component {
    render() {
        let tulosta = this.props.lista.map((hairio) => {
            return (<Hairio lista={hairio} poista={this.props.poista} key={hairio.id}/>)
        })
        return (
                <table> 
                    <thead></thead>
                        <tbody>{tulosta}</tbody>
                </table>
        )
    }
}
