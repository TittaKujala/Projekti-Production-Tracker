const appURL = "http://localhost:3000/api/tyovuorot";
const appURLtoteumat = "http://localhost:3000/api/toteumat";
const axios = require('axios');


async function getVuorot() {
    let res = await axios.get(`${appURL}`)
    return res.data;
}

async function getYksiVuoro(id) {
    let res = await axios.get(`${appURL}/${id}`)
    return res.data;
}

async function addVuoro(nimi) {
    await axios.post(`${appURL}`, nimi)
    .then(res => {
        console.dir(res);
        console.log(res.data);
        return res.data;
    });
 }

 async function deleteVuoro(id) {
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

 export {addVuoro, getYksiVuoro, getVuorot, deleteVuoro, getToteumat};