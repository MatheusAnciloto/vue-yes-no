import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://yesno.wtf/api',
    withCredentials: false
})

