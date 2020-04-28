import React, { Component } from 'react';
import ListaTiedot from "./lista/ListaTiedot"
import './Lista.css'

class Lista extends Component {
    render() {
        return (
            <div className="taustakuva">
                <ListaTiedot/>
            </div>
        );
    }
}

export default Lista;