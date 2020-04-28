import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
export default class Linja extends Component {
    poista = () => {
        this.props.poista(this.props.lista.id)
    }
    render() {
        return (
            <tr style={list}>
                <td style={tilaa}>{this.props.lista.nimi}</td><br/><br/>
                <td><Button size="small"  
                        variant="outlined" 
                        color="secondary" 
                        onClick={this.poista} 
                        startIcon={<DeleteIcon />}>Poista
                    </Button> 
                </td>
            </tr>
        )
    }
}

const list = {
    textAlign: "left"
}

const poista = {
    color: "red"
}

const tilaa = {
    padding: "10px"
}