const config = {
  axios: {
    // baseURL: 'http://127.0.0.1/api',
    // baseImgUrl: 'http://ar.local/storage'
    baseURL: '/api',
    baseImgUrl: '/'
  },

  respBody(response) {
    return {
      data: response.data,
      status: response.status,
      headers: response.headers
    }
  },

  respError(error) {
    return {
      status: error.response.status,
      description: error.response.data.description
    }
  }
}

export default config
