import * as Types from './actionTypes';

const initState = {
  phone: ''
};

export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state));

  if (action.type === Types.LOGIN) {
    newState.phone = action.value.phone;
  }

  return newState;
}