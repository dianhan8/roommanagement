<<<<<<< HEAD
import * as types from './../types'
import { API_URL } from './../../component/host'
import Axios from 'axios'

export const handleLogin = (params) => ({
    type: types.LOGIN,
    payload: Axios({
        method: 'POST',
        url: `${API_URL}/api/v2/login`,
        data: {
            email: params.email,
            password: params.password
        }
    })
})

export const handleGetProfile = (token) => ({
    type: types.GET_USERS,
    payload: Axios({
        method: 'GET',
        url: `${API_URL}/api/v2/user`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
})
=======
import * as types from './../types'
import { API_URL } from './../../component/host'
import Axios from 'axios'

export const handleLogin = (params) => ({
    type: types.LOGIN,
    payload: Axios({
        method: 'POST',
        url: `${API_URL}/api/v2/login`,
        data: {
            email: params.email,
            password: params.password
        }
    })
})

export const handleGetProfile = (token) => ({
    type: types.GET_USERS,
    payload: Axios({
        method: 'GET',
        url: `${API_URL}/api/v2/user`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
})
>>>>>>> 07401726b62b74ead77bd4eb6f04c3e3146034c4
