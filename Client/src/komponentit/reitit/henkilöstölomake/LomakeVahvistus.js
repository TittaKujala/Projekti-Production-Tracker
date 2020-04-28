import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem } from "material-ui/List"
import RaisedButton from "material-ui/RaisedButton"
import AppBar from "material-ui/AppBar"
import { Paper } from '@material-ui/core';
import './Lomaketiedot.css'
import Button from '@material-ui/core/Button';
// import SaveIcon from '@material-ui/icons/Save';

class LomakeVahvistus extends Component {
    state = {
        pvm: this.props.values.pvm,
        vuoro_id: this.props.values.vuoro,
        tuotenro: this.props.values.tuote,
        tehtytunnit: parseFloat(this.props.values.tehdytTunnit),
        tehdytkappaleet: parseInt(this.props.values.tehdytKappaleet),
        viesti: this.props.values.viesti,
        linja_id: this.props.values.linja
    }

    continue = e => {
        e.preventDefault();
        console.log(this.state)
        this.props.laheta(this.state);    //lähetetään apiin    
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

                    <div className="vahvistus">
                        <Paper>
                            <div style={shadow}>
                                <AppBar title="TUOTANTO" showMenuIconButton={false} />
                                <div style={padding}>
                                    <List>
                                        <ListItem
                                            primaryText="Päivämäärä"
                                            secondaryText={values.pvm}
                                        />
                                        <ListItem
                                            primaryText="Vuoro"
                                            secondaryText={values.vuoro}
                                        />
                                        <ListItem
                                            primaryText="Linja"
                                            secondaryText={values.linja}
                                        />
                                        <ListItem
                                            primaryText="Tuote"
                                            secondaryText={values.tuote}
                                        />
                                        <ListItem
                                            primaryText="Häiriö"
                                            secondaryText={values.lisääHäiriö}
                                        />
                                        <ListItem
                                            primaryText="Häiriön kesto"
                                            secondaryText={values.häiriönKesto + " tuntia"}
                                        />
                                        <ListItem
                                            primaryText="Tehdyt tunnit"
                                            secondaryText={values.tehdytTunnit + " tuntia"}
                                        />
                                        <ListItem
                                            primaryText="Tehdyt kappaleet"
                                            secondaryText={values.tehdytKappaleet + " tuntia"}
                                        />
                                        <ListItem
                                            primaryText="Viesti"
                                            secondaryText={values.viesti}
                                        />
                                    </List>
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        onClick={this.back}
                                        size="medium"
                                        style={styles.button}>
                                        TAKAISIN
                            </Button>

                                    <RaisedButton
                                        label="TALLENNA"
                                        primary={true}
                                        style={styles.button}
                                        onClick={this.continue} />
                                </div>
                            </div>
                        </Paper>

                    </div>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}
const padding = {
    padding: "30px"
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



export default LomakeVahvistus;
