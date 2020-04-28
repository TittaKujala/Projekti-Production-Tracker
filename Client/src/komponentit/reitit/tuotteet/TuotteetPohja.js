import React, { Component } from 'react'
import TuotteetLomakeTiedot from './TuotteetLomakeTiedot';
import TuotteetLomakeVahvistus from './TuotteetLomakeVahvistus';
import { getYksiTuote, getTuotteet, deleteTuote, getToteumat } from './tuoteService';

export default class TuotteetPohja extends Component {

    state = {
        step: 1,
        tuotenro: "",
        tuotenimi: "",
        tuntitavoite: "",
        virhe: "",
        lista: [{
            tuotenro: "",
            tuotenimi: "",
            tuntitavoite: ""
        }],
    }

    componentDidMount = () => {
        this.paivitaLista();
    }

    paivitaLista = async () => {
        let data = await getTuotteet();
        this.setState({ lista: data });
    }

    poistaTuote = async (id) => {
        let varatut = await getToteumat();
        let onjo = false;
        for (let i = 0; i < varatut.length; i++) {
            if (id === varatut[i].tuotenro) {
                onjo = true;
            }
        }
        if (onjo) {
            this.setState({ virhe: "Tuote liittyy työhön, ei voi poistaa" })
        } else {
            await deleteTuote(id);
            this.setState(this.state);
            this.paivitaLista();
        }
    }

    //syötteiden tarkastaminen ja virheen määritys
    checkValues = async () => {
        const tnro = this.state.tuotenro;
        const tnimi = this.state.tuotenimi;
        const tavoite = this.state.tuntitavoite;
        const kannantuotteet = await getYksiTuote(tnro)
        //annettua tuotenumeroa ei ole vielä tietokannassa
        if (tnro === "" || kannantuotteet.length === 0) {
            if (tnro < 1 || isNaN(tnro) || tnro.match(/e/gi) || tnro === "") {
                this.setState({ virhe: "Tuotenumero puuttuu tai virheellinen" });
                return false;
            } else if (tnimi.length < 1 || tnimi.length > 50) {
                this.setState({ virhe: "Tuotenimi puuttuu, tai yli 50 merkkiä pitkä" })
                return false;
            } else if (tavoite < 0 || isNaN(tavoite) || tavoite.match(/e/gi) || tavoite === "") {
                this.setState({ virhe: "Tavoite puuttuu tai virheellinen" })
                return false;
            } else {
                return true;
            }
        } else {
            this.setState({ virhe: "Tuotenumero löytyy jo tietokannasta" })
            console.dir(kannantuotteet)
            return false;
        }
    }

    //seuraava steppi
    nextStep = () => {
        if (this.state.step === 2) {
            this.setState({
                step: 1,
                tuotenro: "",
                tuotenimi: "",
                tuntitavoite: "",
                virhe: "",
                lista: [{
                    tuotenro: "",
                    tuotenimi: "",
                    tuntitavoite: ""
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
        this.setState({ [input]: e.target.value })
    }

    render() {
        const { step } = this.state;
        const { tuotenro, tuotenimi, tuntitavoite, virhe, lista } = this.state
        const values = { step, tuotenro, tuotenimi, tuntitavoite, virhe, lista }

        switch (step) {
            case 1:
                return (
                    <TuotteetLomakeTiedot
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        checkValues={this.checkValues}
                        poistaTuote={this.poistaTuote}
                    />
                )
            case 2:
                return (
                    <TuotteetLomakeVahvistus
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
            default:
                return (
                    <TuotteetLomakeTiedot
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        checkValues={this.checkValues}
                        poistaTuote={this.poistaTuote}
                    />
                )
        }
    }
}
