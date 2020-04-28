import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
//import TextField from "material-ui/TextField"
import TextField from '@material-ui/core/TextField';
import AppBar from "material-ui/AppBar"
import RaisedButton from "material-ui/RaisedButton"
import { addVuoro } from './vuoroService';
import Button from '@material-ui/core/Button';
// import SaveIcon from '@material-ui/icons/Save';

export default class VuoroLomakeVahvistus extends Component {
    vuoro = {
        tyovuoro: this.props.values.tyovuoro
    }
    
    cont = async (e) => {
        e.preventDefault();
        //lähetetään apiin
        let tallennettu = await addVuoro(this.vuoro);
        console.log(tallennettu);
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
                    <AppBar style title="TYÖVUOROT" showMenuIconButton={false}/>
                    <div className="vahtyovuorotcss">
                        <TextField 
                            label="Vuoro" 
                            size="medium"
                            defaultValue={values.tyovuoro}
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

