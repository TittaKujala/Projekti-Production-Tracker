const appURL = "http://localhost:3000/api/tuotteet";
const appURLtoteumat = "http://localhost:3000/api/toteumat";
const axios = require('axios');


async function getTuotteet() {
    let res = await axios.get(`${appURL}`)
    return res.data;
}

async function getYksiTuote(tnro) {
    let res = await axios.get(`${appURL}/${tnro}`)
    console.log(res)
    return res.data;
}

async function addTuotteet(tuote) {
    await axios.post(`${appURL}`, tuote)
    .then(res => {
        console.log(res.data);
        return res.data;
    });
 }

 async function deleteTuote(id) {
    console.log(id);
    await axios.delete(`${appURL}/${id}`)
    .then(res => {
        console.dir(res);
        console.log(res.data)
        return res.data;
    })
}

async function getToteumat() {
    let res = await axios.get(`${appURLtoteumat}`)
    return res.data;
}

 export {addTuotteet, getTuotteet, getYksiTuote, deleteTuote, getToteumat};