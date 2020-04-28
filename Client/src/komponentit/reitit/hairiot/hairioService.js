const appURL = "http://localhost:3000/api/hairiot"
const appURLtothai = "http://localhost:3000/api/tot_hai"
const axios = require('axios');


async function getHairiot() {
    let res = await axios.get(`${appURL}`)
    return res.data;
}

async function getYksiHairio(id) {
    let res = await axios.get(`${appURL}/${id}`)
    return res.data;
}

async function addHairio(nimi) {
    await axios.post(`${appURL}`, nimi)
    .then(res => {
        console.dir(res);
        console.log(res.data);
        return res.data;
    });
 }

 async function deleteHairio(id) {
     console.log(id);
     await axios.delete(`${appURL}/${id}`)
     .then(res => {
         console.dir(res);
         console.log(res.data)
         return res.data;
     })
 }

 async function getToteumaHairiot() {
    let res = await axios.get(`${appURLtothai}`)
    return res.data;
}

 export {addHairio, getYksiHairio, getHairiot, deleteHairio, getToteumaHairiot};