import React, { Component } from 'react';
import { Modal, Button } from "react-bootstrap"
import TextField from "material-ui/TextField"
import Hairio from "./Hairio"
// import {getToteuma, addTot_hai} from "./lomakeService"


class LisaaHairio extends Component {
    // state= {
    //     tot_id: "",
    //     hair_id: "",
    //     hairiokesto:""
    // }

    onClose = async () => {
        this.props.onHide()
        // await getToteuma().then(res => {
        //     console.log(res.data[res.data.length-1].id)
        //     this.setState({
        //         tot_id: res.data[res.data.length-1].id,
        //         hair_id:this.props.values.lisääHäiriö,
        //         hairiokesto:parseFloat(this.props.values.häiriönKesto)
        //     });
        // })
        // addTot_hai(this.state)
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <div>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Lisää häiriö
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Hairio
                            style={hairio}
                            values={values}
                            handleChange={handleChange}
                        />
                        <TextField
                            style={kesto}
                            type="number"
                            min="0"
                            step="0.1"
                            required
                            hintText="Häiriön kesto (0,1 = 6min)"
                            onChange={handleChange("häiriönKesto")}
                            defaultValue={values.häiriönKesto}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button primary={true} onClick={this.onClose}>Tallenna ja Sulje</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
const hairio = {
    opacity: "50%"
}

const kesto = {
    marginLeft: "8px"
}

export default LisaaHairio;