import '@babel/polyfill'
import flyio from 'flyio'
import APIS from '@/assets/api/api.json'

flyio.config.timeout = 100000
flyio.config.responseType = 'json'

flyio.interceptors.request.use(config => {
  const contentType = 'application/json'
  config.headers['Content-Type'] = contentType
  return config
})

flyio.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

const http = {}
for (let api of Object.keys(APIS)) {
  const current = APIS[api]
  http[api] = (params) => fetch({
    ...current,
    params
  })
}

const matchUri = (url, params) => {
  const nurl = url.replace(/\$\w+/g, a => {
    const key = a.slice(1)
    const val = params[key]
    delete params[key]
    return val
  })
  return nurl
}

const fetch = (options) => {
  return new Promise((resolve, reject) => {
    let { method, url } = options

    if (url.includes('$')) {
      url = matchUri(url, options.params)
    }

    const params = options.params || {}

    flyio[method.toLowerCase()](url, params, options.configs)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

export { http, fetch }
