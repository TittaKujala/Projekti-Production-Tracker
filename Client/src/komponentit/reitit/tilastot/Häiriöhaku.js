import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import AppBar from "material-ui/AppBar";
import SimpleSelect from "./LinjaSelect";

let tanaan = new Date();
let dd = String(tanaan.getDate()).padStart(2, '0');
let mm = String(tanaan.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = tanaan.getFullYear();
tanaan = `${yyyy}-${mm}-${dd}`;

export default class Pohjahaku extends Component {

    state = {
        linja: null,
        alkupvm: "2020-02-01",
        loppupvm: tanaan
    }
    
    //syötteiden tarkastaminen ja siirtyminen seuraavaan vaiheeseen
    //tai virheilmoituksen näyttäminen lomakkeella
    continue = async (e) => {
        await e.preventDefault();
        console.log(this.state)
        await this.props.lisääPiirakka(this.state)
    }

    handleChange = async (e) => {
        await this.setState({
            linja:e.target.value
        })
        console.log(this.state)
    }
    
    render() {
        return (            
            <MuiThemeProvider>
                <React.Fragment>
                <div style={shadow}>
                    <AppBar title="Hae häiriötilastot" showMenuIconButton={false}/>
                    <div style={padding}>
                        <SimpleSelect
                            handleChange={this.handleChange}
                        />
                        <br></br>
                        <RaisedButton
                            label="Näytä"
                            primary={true}
                            style={styles.button}
                            onClick={this.continue}
                        />
                        </div>
                    </div>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}


const padding = {
    padding: "55px",
}

const shadow = {
    textAlign: "center",
    margin: "0px",
    borderRadius: "10px",
    width: "fit-content",
    height: "fit-content",
    display: "inline-block",
    
}

const styles = {
    button: {
        margin: 15
    }
}
