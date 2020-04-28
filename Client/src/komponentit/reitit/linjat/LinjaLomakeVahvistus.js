import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from '@material-ui/core/TextField';
import AppBar from "material-ui/AppBar"
import RaisedButton from "material-ui/RaisedButton"
import { addLinja } from './linjaService';
import Button from '@material-ui/core/Button';


export default class LinjaLomakeVahvistus extends Component {
    linja = {
        nimi: this.props.values.nimi
    }
    
    cont = async(e) => {
        e.preventDefault();
        //lähetetään apiin
        await addLinja(this.linja);
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    
    render() {
        const { values } = this.props;
        
        return (            
            <MuiThemeProvider>
                <React.Fragment>
                <div style={shadow}>
                    <AppBar title="LINJAT" showMenuIconButton={false}/>
                    <div className="vahlinjacss">
                        <TextField 
                            label="Linja" 
                            size="medium"
                            defaultValue={values.nimi}
                            InputProps={{ readOnly: true }}
                        />
                        <br></br><br></br><br></br>
                        <br></br><br></br>
                        <Button
                            variant="contained"
                            color="default"
                            onClick={this.back}
                            size="medium"
                            style={styles.button}>
                            TAKAISIN
                        </Button>
                        <RaisedButton
                            label="TALLENNA"
                            primary={true}
                            style={styles.button}
                            onClick={this.cont}
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
        margin: 15
    }
}

