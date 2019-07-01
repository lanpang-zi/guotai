const defaultState = {
  user:{}
};
export default (state = defaultState,action) => {
  let newState =JSON.parse(JSON.stringify(state));

  return newState;
};