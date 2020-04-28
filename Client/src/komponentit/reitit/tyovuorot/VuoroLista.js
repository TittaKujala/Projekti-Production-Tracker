import React, { Component } from 'react'
import Vuoro from './Vuoro';

export default class VuoroLista extends Component {
    render() {
        let tulosta = this.props.lista.map((vuoro) => {
            return (<Vuoro lista={vuoro} poista={this.props.poista} key={vuoro.id}/>)
        })
        return (
                <table> 
                    <thead></thead>
                        <tbody>{tulosta}</tbody>
                </table>
        )
    }
}