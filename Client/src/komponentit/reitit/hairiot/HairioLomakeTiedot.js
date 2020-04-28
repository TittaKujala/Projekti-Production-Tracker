import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
//import TextField from "material-ui/TextField";
import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import AppBar from "material-ui/AppBar";
import HairioLista from './HairioLista';
import RaisedButton from "material-ui/RaisedButton";


export default class HairioLomakeTiedot extends Component {

    //syötteiden tarkastaminen ja siirtyminen seuraavaan vaiheeseen
    //tai virheilmoituksen näyttäminen lomakkeella
    cont = async (e) => {
        e.preventDefault();
        let check = await this.props.checkValues();
        if (check) {
            this.props.nextStep();
        } else {
            console.log("syöte virheellinen tai vastaava häiriö löytyy jo kannasta");
        }
    }
    
    render() {
        const { values, handleChange } = this.props;     

        return (           
            <MuiThemeProvider>
                <React.Fragment>
                <div style={shadow}>
                    <AppBar title="HÄIRIÖT" showMenuIconButton={false}/>
                    <div className="hairiocss">
                        <TextField 
                            type="text"
                            size="medium"
                            required
                            label="Häiriö" 
                            onChange={handleChange("hairio")}
                            defaultValue={values.hairio}
                        />
                        <br></br>
                        <p style={punainen}>
                            {values.virhe}
                        </p>
                        <br></br>
                        <RaisedButton
                            label="JATKA"
                            primary={true}
                            onClick={this.cont}
                        />
                        <br></br><br></br>
                        <HairioLista
                            lista={values.lista}
                            poista={this.props.poistaHairio}
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

const punainen = {
    color: "red",
    fontStyle: "italic"
}
