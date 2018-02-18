import axios from 'axios'
import * as params from './constants/params'

var httpClient = axios.create({
  baseURL: params.API_URL,
  timeout: params.REQUEST_TIMEOUT,
  headers: {}
})

export default httpClient