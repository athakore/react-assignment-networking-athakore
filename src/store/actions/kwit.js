import axios from '../../axios-instance'

export const GET_KWITS = 'GET_KWITS'
export const CREATE_KWIT = 'CREATE_KWIT'
export const DELETE_KWIT = 'DELETE_KWIT'

const getKwits = kwits => ({
  type: GET_KWITS,
  kwits
})

export const getKwitsAsync = () => dispatch => {
  axios.get('/kwits.json').then(response => {
    dispatch(getKwits(response))
  })
}

const createKwit = kwits => ({
  type: CREATE_KWIT,
  kwits
})

export const createKwitAsync = (oldKwits, content) => {
  const kwits = [...oldKwits, { id: oldKwits.length, content }]
  return dispatch => {
    axios.put('/kwits.json', kwits).then(() => {
      dispatch(createKwit(kwits))
    })
  }
}

const deleteKwit = kwits => ({
  type: DELETE_KWIT,
  kwits
})

export const deleteKwitAsync = (kwits, id) => dispatch =>
  axios
    .delete(`/kwits/${id}.json`)
    .then(() =>
      dispatch(deleteKwit(this.props.kwitss.filter(kwit => kwit.id !== id)))
    )
