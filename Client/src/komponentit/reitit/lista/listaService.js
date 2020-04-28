var appURL = "http://localhost:3000/api/lista"
var axios = require('axios');


function getData() {
       return  axios.get(appURL)
}

// function addData(nq) {
//     console.log(nq)
//     return axios.post(appURL,nq)
// }

// function deleteData(id) {
//     console.log(id)
//     return axios.delete(appURL+`${id}`)
// }

// function updateData(id) {
//     console.log(id)
//     return axios.put(appURL+`${id}`)
// }


export {getData};