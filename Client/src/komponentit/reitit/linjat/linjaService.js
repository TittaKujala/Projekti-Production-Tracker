const appURL = "http://localhost:3000/api/linjat";
const appURLtoteumat = "http://localhost:3000/api/toteumat";
const axios = require('axios');


async function getLinjat() {
    let res = await axios.get(`${appURL}`)
    return res.data;
}

async function getYksiLinja(id) {
    let res = await axios.get(`${appURL}/${id}`)
    return res.data;
}

async function addLinja(nimi) {
    await axios.post(`${appURL}`, nimi)
    .then(res => {
        console.dir(res);
        console.log(res.data);
        return res.data;
    });
 }

 async function deleteLinja(id) {
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

 export {addLinja, getYksiLinja, getLinjat, deleteLinja, getToteumat};