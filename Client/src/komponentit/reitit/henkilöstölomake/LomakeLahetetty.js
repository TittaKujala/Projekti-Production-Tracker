import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import RaisedButton from "material-ui/RaisedButton"
import { Paper } from '@material-ui/core';
import './Lomaketiedot.css'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';

class LomakeLahetetty extends Component {
    render() {
        return (
            <div className="lomakelahetetty">

                <Paper>
                    <MuiThemeProvider>
                        <NavLink to="/lista">
                            <Button
                                size="large"
                                variant="contained"
                                color="primary"
                                startIcon={<CloudUploadIcon />} >
                                LATAA LISTA
                            </Button>
                        </NavLink>
                    </MuiThemeProvider>
                </Paper>
            </div>
        );
    }
}

export default LomakeLahetetty;