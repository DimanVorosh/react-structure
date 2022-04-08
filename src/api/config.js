const config = {
  axios: {
    baseURL: '/admin/api/v1',
    baseImgUrl: '/storage'
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
      description: error.response.data.detail
    }
  }
}

export default config
