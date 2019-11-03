<<<<<<< HEAD
import * as types from './../types'

const initialState = {
    isLoading: true,
    isSuccess: false,
    isError: false,
    users: []
}

export default function reducersUser(state = initialState, action) {
    switch (action.type) {
        case `${types.LOGIN}_PENDING`:
            return {
                ...state,
                isLoading: true
            }
        case `${types.LOGIN}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                users: action.payload.data
            }
        case `${types.LOGIN}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case `${types.REGISTER}_PENDING`:
            return {
                ...state,
                isLoading: true
            }
        case `${types.REGISTER}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                message:action.payload.data
            }
        case `${types.REGISTER}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case `${types.GET_USERS}_PENDING`:
            return {
                ...state,
                isLoading: true,
            }
        case `${types.GET_USERS}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                users: action.payload.data
            }
        case `${types.GET_USERS}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state
    }
=======
import * as types from './../types'

const initialState = {
    isLoading: true,
    isSuccess: false,
    isError: false,
    users: []
}

export default function reducersUser(state = initialState, action) {
    switch (action.type) {
        case `${types.LOGIN}_PENDING`:
            return {
                ...state,
                isLoading: true
            }
        case `${types.LOGIN}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                users: action.payload.data
            }
        case `${types.LOGIN}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case `${types.REGISTER}_PENDING`:
            return {
                ...state,
                isLoading: true
            }
        case `${types.REGISTER}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                message:action.payload.data
            }
        case `${types.REGISTER}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case `${types.GET_USERS}_PENDING`:
            return {
                ...state,
                isLoading: true,
            }
        case `${types.GET_USERS}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                users: action.payload.data
            }
        case `${types.GET_USERS}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state
    }
>>>>>>> 07401726b62b74ead77bd4eb6f04c3e3146034c4
}