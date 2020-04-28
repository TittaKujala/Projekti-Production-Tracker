import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from '@material-ui/core/TextField';
import RaisedButton from "material-ui/RaisedButton";
import AppBar from "material-ui/AppBar";
import VuoroLista from './VuoroLista';


export default class VuoroLomakeTiedot extends Component {


    //syötteiden tarkastaminen ja siirtyminen seuraavaan vaiheeseen
    //tai virheilmoituksen näyttäminen lomakkeella
    cont = async (e) => {
        e.preventDefault();
        let check = await this.props.checkValues();
        if (check) {
            this.props.nextStep();
        } else {
            console.log("syöte virheellinen tai vastaava vuoro löytyy jo kannasta");
        }
    }

    render() {
        const { values, handleChange } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <div style={shadow}>
                        <AppBar title="TYÖVUOROT" showMenuIconButton={false} />
                        <div className="tyovuorotcss">
                            <TextField
                                type="text"
                                size="medium"
                                required
                                label="Vuoro"
                                onChange={handleChange("tyovuoro")}
                                defaultValue={values.tyovuoro}
                            />
                            <br></br>
                            <p style={punainen}>
                                {values.virhe}
                            </p>
                            <br></br><br></br>
                            <RaisedButton
                                label="JATKA"
                                primary={true}
                                style={styles.button}
                                onClick={this.cont}
                            />
                            <br></br><br></br><br></br>
                            <br></br>
                            <VuoroLista
                                lista={values.lista}
                                poista={this.props.poistaVuoro}
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
