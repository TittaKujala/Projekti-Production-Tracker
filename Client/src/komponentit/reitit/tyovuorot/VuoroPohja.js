import React, { Component } from 'react'
import VuoroLomakeTiedot from './VuoroLomakeTiedot';
import VuoroLomakeVahvistus from './VuoroLomakeVahvistus';
import { getVuorot, deleteVuoro, getToteumat } from './vuoroService';

export default class VuoroPohja extends Component {
    state = {
        step:1,
        tyovuoro: "",
        virhe: "",
        lista: [{
            id: "",
            tyovuoro: "",
        }],
    }

    componentDidMount = () => {
        this.paivitaLista();
    }

    paivitaLista = async () => {
        let data = await getVuorot();
        this.setState({lista: data});
    }

    poistaVuoro = async (id) => {
        console.log('poista');
        let varatut = await getToteumat();
        console.log('varatut:');
        console.dir(varatut);
        let onjo = false;
        for(let i = 0; i < varatut.length; i++) {
            if(id === varatut[i].vuoro_id) {
                onjo = true;
            }
        }
        console.log(onjo);
        if(onjo) {
            this.setState({ virhe: "Vuoro liittyy työhön, ei voi poistaa" })
        } else {
            await deleteVuoro(id);
            this.setState(this.state);
            this.paivitaLista();
        }
    }

    //syötteiden tarkastaminen ja virheen määritys
     checkValues = async () => {
        const tyovuoro = this.state.tyovuoro.trim();

        //haetaan linjat kannasta ja vertaillaan
        //onko samanniminen linja jo olemassa
        const kannanvuorot = await getVuorot()
        let eiloydy = true;
        for (let i = 0; i < kannanvuorot.length; i++) {
            if (kannanvuorot[i].tyovuoro.toLowerCase() === tyovuoro.toLowerCase()) {
                eiloydy = false;
            }
        }

        //annettua linjan nimenä ei ole vielä tietokannassa
        if (eiloydy) {
            if (tyovuoro.length < 1 || tyovuoro.length > 5) {
                this.setState({ virhe: "Vuoron nimi puuttuu, tai on yli 5 merkkiä pitkä"})
                return false;
            } else {
                 return true;
            }
        } else {
            console.log('löytyi kannasta');
            this.setState({ virhe: "Vuoron nimi löytyy jo tietokannasta" })
            return false;
        }
    }

    //seuraava steppi
    nextStep = () => {
        if(this.state.step === 2) {
            this.setState({
                step:1,
                tyovuoro: "",
                virhe: "",
                lista: [{
                    id: "",
                    tyovuoro: "",
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
        const { tyovuoro, virhe, lista } = this.state
        const values = { step, tyovuoro, virhe, lista }

        switch(step) {
            case 1:
                return (
                    <VuoroLomakeTiedot
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        checkValues={this.checkValues}
                        poistaVuoro={this.poistaVuoro}
                    />
                )
            case 2:
                return (
                    <VuoroLomakeVahvistus
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
            default:
                return (
                    <VuoroLomakeTiedot
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        checkValues={this.checkValues}
                        poistaVuoro={this.poistaVuoro}
                    />
                )       
        }
    }
}
