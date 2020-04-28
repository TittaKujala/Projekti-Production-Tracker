import React, { Component } from 'react'
import LinjaLomakeTiedot from './LinjaLomakeTiedot';
import LinjaLomakeVahvistus from './LinjaLomakeVahvistus';
import { getLinjat, deleteLinja, getToteumat } from './linjaService';

export default class LinjaPohja extends Component {
    state = {
        step:1,
        nimi: "",
        virhe: "",
        lista: [{
            id: "",
            nimi: "",
        }],
    }

    componentDidMount = () => {
        this.paivitaLista();
    }

    paivitaLista = async () => {
        let data = await getLinjat();
        this.setState({lista: data});
    }

    poistaLinja = async (id) => {
        console.log('poista');
        let varatut = await getToteumat();
        console.log('varatut:');
        console.dir(varatut);
        let onjo = false;
        for(let i = 0; i < varatut.length; i++) {
            if(id === varatut[i].linja_id) {
                onjo = true;
            }
        }
        console.log(onjo);
        if(onjo) {
            this.setState({ virhe: "Linja liittyy työhön, ei voi poistaa" })
        } else {
            await deleteLinja(id);
            this.setState(this.state);
            this.paivitaLista();
        }
    }

    //syötteiden tarkastaminen ja virheen määritys
     checkValues = async () => {
        const nimi = this.state.nimi.trim();

        //haetaan linjat kannasta ja vertaillaan
        //onko samanniminen linja jo olemassa
        const kannanlinjat = await getLinjat()
        let eiloydy = true;
        for (let i = 0; i < kannanlinjat.length; i++) {
            if ( kannanlinjat[i].nimi === nimi) {
                eiloydy = false;
            }
        }

        //annettua linjan nimenä ei ole vielä tietokannassa
        if (eiloydy) {
            if (nimi.length < 1 || nimi.length > 50) {
                this.setState({ virhe: "Linjan nimi puuttuu, tai on yli 50 merkkiä pitkä"})
                return false;
            } else {
                 return true;
            }
        } else {
            console.log('löytyi kannasta');
            this.setState({ virhe: "Linjan nimi löytyy jo tietokannasta" })
            return false;
        }
      }

    //seuraava steppi
    nextStep = () => {
        if(this.state.step === 2) {
            this.setState({
                step:1,
                nimi: "",
                virhe: "",
                lista: [{
                    id: "",
                    nimi: "",
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
        const { nimi, virhe, lista } = this.state
        const values = { step, nimi, virhe, lista }

        switch(step) {
            case 1:
                return (
                    <LinjaLomakeTiedot
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        checkValues={this.checkValues}
                        poistaLinja={this.poistaLinja}
                    />
                )
            case 2:
                return (
                    <LinjaLomakeVahvistus
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
            default:
                return (
                    <LinjaLomakeTiedot
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        checkValues={this.checkValues}
                        poistaLinja={this.poistaLinja}
                    />
                )        
        }
    }
}
