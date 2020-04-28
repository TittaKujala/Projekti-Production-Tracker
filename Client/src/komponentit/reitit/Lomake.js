import React, { Component } from 'react';
import LomakeTiedot from "./henkilöstölomake/LomakeTiedot"
import LomakeVahvistus from "./henkilöstölomake/LomakeVahvistus"
import LomakeLähetetty from "./henkilöstölomake/LomakeLahetetty"
import {addToteumat} from "./henkilöstölomake/lomakeService"
import moment from 'moment'
import {getToteuma, addTot_hai} from "./henkilöstölomake/lomakeService"


class Lomake extends Component {
    state = {
        step:1,
        pvm: "",
        vuoro: "",
        linja: "",
        tuote: "",
        lisääHäiriö: "",
        häiriönKesto: "",
        tehdytTunnit: "",
        tehdytKappaleet:"",
        viesti:""
    }

    //seuraava steppi
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    //edellinen steppi
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    //päivämäärän muutokset
    handleDateChange = (event, date) => {
        console.log(date)
        let päivä = moment(date).format();
        päivä = päivä.slice(0,10)
        console.log(päivä)
        this.setState({ pvm: päivä})
    }

    //lomakekentän muutokset
    handleChange = (input) => (e) => {
        console.log(e.target.value)
        console.log(e.target.nimi)
        console.log(e.target.id)
        this.setState({ [input]: e.target.value})
        // console.log(this.lahetys)
    }

    sendData = async data => {    
        console.log(data)
        await addToteumat(data)
        getToteuma().then(res => {
            console.log(res.data[res.data.length-1].id)
            console.log(this.state.lisääHäiriö)
            console.log(this.state.häiriönKesto)
        if (this.state.lisääHäiriö && this.state.häiriönKesto) {
            console.log("häiriö myös lähetetty")
            addTot_hai({
                tot_id: res.data[res.data.length-1].id,
                hair_id:this.state.lisääHäiriö,
                hairiokesto:parseFloat(this.state.häiriönKesto)
            });
            }
        });
    }

    // updateData = data => { 
    //     console.log(data)
    //     updateToteumat(data)  
    // }

    render() {
        const { step } = this.state;
        const { pvm, vuoro, linja, tuote, lisääHäiriö, häiriönKesto, tehdytTunnit, viesti, tehdytKappaleet } = this.state
        const values = { step, pvm, vuoro, linja, tuote, lisääHäiriö, häiriönKesto, tehdytTunnit, viesti, tehdytKappaleet }

        switch(step) {
            case 1:
                return (
                    
                    <LomakeTiedot 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        handleDateChange={this.handleDateChange}
                        values={values}
                        // laheta={this.sendData} 
                    />
                )
            case 2:
                return (
                    <LomakeVahvistus
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                        laheta={this.sendData} 
                        // paivita={this.updateData}                                            
                    />
                )
            case 3:
                return (
                    <LomakeLähetetty/>
                )
            default: 
        }
    }
}

export default Lomake;