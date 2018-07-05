import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-assignment-2-athakore.firebaseio.com/'
})

instance.interceptors.response.use(
  response =>
    (response.data
      ? Object.entries(response.data).map(([id, kwit]) => ({ ...kwit, id }))
      : null),
  error => Promise.reject(error)
)

export default instance