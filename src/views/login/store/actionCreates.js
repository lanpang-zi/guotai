import * as Types from './actionTypes';

export const onLogin = value => ({
  type: Types.LOGIN,
  value
})

export const asyncLogin = (values, props) => {
  return (dispatch) => {
    axios.post('http://localhost:30001/user', JSON.stringify(values), {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log(response);
    })
  }
}
