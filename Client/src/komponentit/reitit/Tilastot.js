import React, { Component } from 'react';
import Häiriöt from "./tilastot/Häiriöt"
import Tavoitteet from "./tilastot/Tavoitteet"
import Häiriöhaku from "./tilastot/Häiriöhaku"
import Tavoitehaku from "./tilastot/Tavoitehaku"
import { addPiirakka, addTavoite } from "./tilastot/tilastoService"
import './Tilastot.css'
import { Paper } from '@material-ui/core';
class tilastot extends Component {
    state = {
        showpiirakka: false,
        showtavoite: false,
        piirakkavastaus: {},
        tavoitevastaus: {}
    }

    lisääPiirakka = (data) => {
        addPiirakka(data).then(async res => {
            console.log(res)
            await this.setState({ showpiirakka: true, piirakkavastaus: res.data })
            console.log(this.state)
        })
    }
    lisääTavoite = (data) => {
        addTavoite(data).then(async res => {
            console.log(res)
            await this.setState({ showtavoite: true, tavoitevastaus: res.data })
            console.log(this.state)
        })
    }

    render() {
        const piirakkatiedot = this.state.piirakkavastaus
        const tavoitetiedot = this.state.tavoitevastaus
        return (
            <div className="koko">
                <div className="tilastot1">
                    <Paper>
                        <Häiriöhaku
                            handleChange={this.handleChange}
                            lisääPiirakka={this.lisääPiirakka}
                        /> </Paper>
                    <div className="tilastot3">
                        <Paper>
                            {this.state.showpiirakka ? <Häiriöt tiedot={piirakkatiedot} /> : ""}
                        </Paper>
                    </div>
                </div>

                <br />
                <div className="tilastot2">
                    <Paper>
                        <Tavoitehaku
                            handleChange={this.handleChange}
                            lisääTavoite={this.lisääTavoite}
                        /></Paper>
                    <div className="tilastot4">
                        <Paper>
                            {this.state.showtavoite ? <Tavoitteet tiedot={tavoitetiedot} /> : ""}
                        </Paper>
                    </div>
                </div>
            </div>
        );
    }
}


export default tilastot;