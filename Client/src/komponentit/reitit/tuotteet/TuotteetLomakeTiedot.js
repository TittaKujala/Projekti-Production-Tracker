import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
//import TextField from "material-ui/TextField";
import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import AppBar from "material-ui/AppBar";
import TuotteetLista from './TuotteetLista';
// import './Tuotteet.css';
import RaisedButton from "material-ui/RaisedButton";


export default class TuotteetLomakeTiedot extends Component {

    //syötteiden tarkastaminen ja siirtyminen seuraavaan vaiheeseen
    //tai virheilmoituksen näyttäminen lomakkeella
    cont = async (e) => {
        e.preventDefault();
        let check = await this.props.checkValues();
        if (check) {
            this.props.nextStep();
        } else {
            console.log("syöte virheellinen tai löytyy jo kannasta");
        }
    }

    render() {
        const { values, handleChange } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <div style={shadow}>
                        <AppBar title="TUOTTEET" showMenuIconButton={false} />
                        <div className="tuotteetcss">
                            <TextField 
                                type="number"
                                size="medium"
                                required
                                label="Tuotenumero"
                                onChange={handleChange("tuotenro")}
                                defaultValue={values.tuotenro}
                            />
                            <TextField
                                type="text"
                                size="medium"
                                required
                                label="Tuotenimi"
                                onChange={handleChange("tuotenimi")}
                                defaultValue={values.tuotenimi}
                            />
                            <TextField
                                type="number"
                                size="medium"
                                required
                                label="Tuntitavoite"
                                onChange={handleChange("tuntitavoite")}
                                defaultValue={values.tuntitavoite}
                            />
                            <p style={punainen}>
                                {values.virhe}
                            </p>
                            <RaisedButton
                                label="JATKA"
                                primary={true}
                                style={styles.button}
                                onClick={this.cont}
                            />
                            <TuotteetLista
                                lista={values.lista}
                                poista={this.props.poistaTuote}
                            />
                        </div>
                    </div>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const shadow = {
    textAlign: "center",
    margin: "0px",
    borderRadius: "10px",
    width: "fit-content",
    height: "fit-content",
    display: "inline-block",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
}

const styles = {
    button: {
        margin: 1
    }
}

const punainen = {
    color: "red",
    fontStyle: "italic"
}
