import axios from '../index'

export const _getCurrentUser = (data) => axios.get('/users/current', data)

export const _login = (data) => axios.post('/users', data)

export const _logout = (data) => axios.get('/logout', data)
