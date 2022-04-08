import axios from '../index'

export const _getCurrentUser = (data) => axios.get('/moderators/current', data)

export const _login = (data) => axios.post('/moderators/authorization', data)
