import axios from './index'

export const _getBars = (data) =>
  axios.get('/bars/filters?latitude=59.931608&longtitude=30.345436', {
    params: data
  })
