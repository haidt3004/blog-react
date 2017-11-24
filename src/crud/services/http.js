import * as axios from 'axios'

const http = axios.create({
    baseURL: '/api/',
    timeout: 2000,
})

http.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            error.message = response.data.message
        } else if (error.request) {
            // The request was made but no response was received
            error.message = 'Error while connecting to server.'
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error(error.message)
        }
        return Promise.reject(error)
    }
)

export default http