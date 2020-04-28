import React, { Component } from 'react'
import Linja from './Linja';

export default class LinjaLista extends Component {
    render() {
        let tulosta = this.props.lista.map((linja) => {
            return (<Linja lista={linja} poista={this.props.poista} key={linja.id}/>)
        })
        return (
                <table> 
                    <thead></thead>
                        <tbody>{tulosta}</tbody>
                </table>
        )
    }
}