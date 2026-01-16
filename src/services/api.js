import axios from 'axios'
import { useActionState } from 'react'

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export default api