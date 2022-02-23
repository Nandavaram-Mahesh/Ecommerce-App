import axios from 'axios'

const instance = axios.create({
    baseURL:'https://us-central1-ecommerce-app-6f9f7.cloudfunctions.net/api'
    //'http://localhost:5001/ecommerce-app-6f9f7/us-central1/api'
})

export default instance;

