import LOGIN from '../../Types/Auth.Types/Auth.types';

const INITIAL_STATE = {
  Data: [],
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN.LOGIN_SUCCESS:
      return {
        ...state,
        Data: [...state.Data, action.payload],
      };
    case LOGIN.LOGIN_START:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default authReducer;
