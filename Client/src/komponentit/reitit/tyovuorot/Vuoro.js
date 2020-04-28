import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
export default class Vuoro extends Component {
    poista = () => {
        this.props.poista(this.props.lista.id) 
    }
    render() {
        return (
            <tr>
                <td style={tilaa}>{this.props.lista.tyovuoro}</td> <br/><br/>
                <td><Button size="small"  variant="outlined" color="secondary" onClick={this.poista} startIcon={<DeleteIcon />}>Poista</Button> </td>
            </tr>
        )
    }
}

const tilaa = {
    padding: "10px"
}