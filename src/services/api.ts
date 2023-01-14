import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const instance = axios.create({
  baseURL: '',
})

instance.interceptors.request.use((config) => {
  console.log('interceptou request')

  return config
})

instance.interceptors.response.use((success) => {
  const { config, data } = success

  if (config.url?.includes('/api/contact') && config.method === 'post') {
    console.log(data)
  }

  return success
})

const api = (axios: AxiosInstance) => {
  return {
    get: <T>(url: string, config: AxiosRequestConfig = {}) => {
      return axios.get<T>(url, config)
    },
    delete: <T>(url: string, config: AxiosRequestConfig = {}) => {
      return axios.delete<T>(url, config)
    },
    put: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) => {
      return axios.put<T>(url, body, config)
    },
    post: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) => {
      return axios.post<T>(url, body, config)
    },
    patch: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) => {
      return axios.patch<T>(url, body, config)
    },
  }
}

export default api(instance)
