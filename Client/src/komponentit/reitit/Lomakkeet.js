import React, { Component } from 'react';
import TuotteetPohja from './tuotteet/TuotteetPohja';
import LinjaPohja from './linjat/LinjaPohja';
import VuoroPohja from './tyovuorot/VuoroPohja';
import HairioPohja from './hairiot/HairioPohja';
import './Lomakkeet.css';
import { Paper } from '@material-ui/core';

class Lomakkeet extends Component {
    render() {
        return (
            <div>
                <br></br>
                <h3>Pohjatietoja</h3>
                <div className="kuva">
                <div className="test">
                    <Paper>
                        <VuoroPohja />
                    </Paper>
                    <Paper>
                        <LinjaPohja />
                    </Paper>
                    <Paper>
                        <TuotteetPohja />
                    </Paper>
                    <Paper>
                        <HairioPohja />
                    </Paper>
                
                </div>
                </div>
            </div>
        );
    }
}



export default Lomakkeet;