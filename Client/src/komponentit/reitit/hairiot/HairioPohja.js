import React, { Component } from 'react'
import HairioLomakeTiedot from './HairioLomakeTiedot';
import HairioLomakeVahvistus from './HairioLomakeVahvistus';
import { getHairiot, deleteHairio, getToteumaHairiot } from './hairioService';

export default class HairioPohja extends Component {
    state = {
        step:1,
        hairio: "",
        virhe: "",
        lista: [{
            id: "",
            hairio: "",
        }],
    }

    componentDidMount = () => {
        this.paivitaLista();
    }

    paivitaLista = async () => {
        let data = await getHairiot();
        this.setState({lista: data});
    }

    poistaHairio = async (id) => {
        let varatut = await getToteumaHairiot();
        let onjo = false;
        for(let i = 0; i < varatut.length; i++) {
            if(id === varatut[i].hair_id) {
                onjo = true;
            }
        }
        if(onjo) {
            this.setState({ virhe: "Häiriö liittyy työhön, ei voi poistaa" })
        } else {
            await deleteHairio(id);
            this.setState(this.state);
            this.paivitaLista();
        }
    }


    //syötteiden tarkastaminen ja virheen määritys
     checkValues = async () => {
        const hairio = this.state.hairio.trim();

        //haetaan linjat kannasta ja vertaillaan
        //onko samanniminen linja jo olemassa
        const kannanhairiot = await getHairiot()
        let eiloydy = true;
        for (let i = 0; i < kannanhairiot.length; i++) {
            if (kannanhairiot[i].hairio.toLowerCase() === hairio.toLowerCase()) {
                eiloydy = false;
            }
        }

        //annettua linjan nimenä ei ole vielä tietokannassa
        if (eiloydy) {
            if (hairio.length < 1 || hairio.length > 50) {
                this.setState({ virhe: "Häiriö puuttuu, tai on yli 50 merkkiä pitkä"})
                return false;
            } else {
                 return true;
            }
        } else {
            console.log('löytyi kannasta');
            this.setState({ virhe: "Häiriö löytyy jo tietokannasta" })
            return false;
        }
      }

    //seuraava steppi
    nextStep = () => {
       if(this.state.step === 2) {
            this.setState({
                step:1,
                hairio: "",
                virhe: "",
                lista: [{
                    id: "",
                    hairio: "",
                }],
            })
        console.dir(this.state)
        this.paivitaLista()
       } else {
            const { step } = this.state;
            this.setState({
                step: step + 1,
                virhe: ""
            })
            console.log(this.state.step);
       }
    }

    //edellinen steppi
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    //lomakekentän muutokset
    handleChange = input => e => {
        console.log(e.target.value)
        this.setState({ [input]: e.target.value})
    }

    render() {
        const { step } = this.state;
        const { hairio, virhe, lista } = this.state
        const values = { step, hairio, virhe, lista }

        switch(step) {
            case 1:
                return (
                    <HairioLomakeTiedot
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        checkValues={this.checkValues}
                        poistaHairio={this.poistaHairio}
                    />
                )
            case 2:
                return (
                    <HairioLomakeVahvistus
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
            default:
                return (
                    <HairioLomakeTiedot
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        checkValues={this.checkValues}
                        poistaHairio={this.poistaHairio}
                    />
                )        
        }
    }
}
