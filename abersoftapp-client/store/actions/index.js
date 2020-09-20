import axios from 'axios'
import { Alert } from 'react-native'

export function userRegister(data) {
    return (dispatch) => {
        console.log(data.email)
        axios({
            method: 'POST',
            url: 'http://10.0.2.2:3000/register',
            data: {
                email: data.email,
                password: data.password
            }
        })
        .then((res) => {
            dispatch({
                type: "USER_REGISTER"
            })
        })
        .catch((err) => {
            Alert.alert('Register Failed')
        })
    }
}

export function userLogin(data) {
    return (dispatch) => {
        console.log('masuk')
        axios({
            method: 'POST',
            url: 'http://10.0.2.2:3000/login',
            data: {
                email: data.email,
                password: data.password
            }
        })
        .then((res) => {
            dispatch({
                type: "USER_LOGIN",
                payload: res.data.access_token
            })
        })
        .catch((err) => {
            Alert.alert('Login Failed')
        })
    }
}