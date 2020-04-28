var tyovuorotURL = "http://localhost:3000/api/tyovuorot"
var linjatURL = "http://localhost:3000/api/linjat"
var tuotteetURL = "http://localhost:3000/api/tuotteet"
var hairioURL = "http://localhost:3000/api/hairiot"
var toteumatURL = "http://localhost:3000/api/toteumat"
var tot_haiURL = "http://localhost:3000/api/tot_hai"

var axios = require('axios');

function getVuoro() {
       return  axios.get(tyovuorotURL)
}

function getLinja() {
    return  axios.get(linjatURL)
}

function getTuote() {
    return  axios.get(tuotteetURL)
}

function getHairio() {
    return  axios.get(hairioURL)
}

function getToteuma() {
    return  axios.get(toteumatURL)
}

function addToteumat(nq) {
    console.log(nq)
    return axios.post(toteumatURL,nq)
}

function updateToteumat(id) {
    console.log(id)
    return axios.put(toteumatURL+id)
}

function addTot_hai(nq) {
    console.log(nq)
    return axios.post(tot_haiURL,nq)
}


export {getVuoro, getLinja, getTuote, getHairio, getToteuma, addToteumat, updateToteumat, addTot_hai};