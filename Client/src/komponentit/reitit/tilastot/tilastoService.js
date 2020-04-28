var hairiotURL = "http://localhost:3000/api/hairiot"
const linjatURL = "http://localhost:3000/api/linjat"
const piirakkaURL = "http://localhost:3000/api/piirakka"
const tavoiteURL = "http://localhost:3000/api/diagrammi"


var axios = require('axios');


function getHairio() {
       return  axios.get(hairiotURL)
}
function getLinjat() {
       return  axios.get(linjatURL)
}
function addPiirakka(nq) {
       return  axios.post(piirakkaURL, nq)
}
function addTavoite(nq) {
       return  axios.post(tavoiteURL, nq)
}

export {getHairio, getLinjat, addPiirakka, addTavoite};