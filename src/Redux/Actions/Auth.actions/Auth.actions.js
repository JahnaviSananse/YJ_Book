import LOGIN from '../../Types/Auth.Types/Auth.types';

export const LoginStart = () => ({
  type: LOGIN.LOGIN_START,
});

export const LoginSuccess = data => ({
  type: LOGIN.LOGIN_SUCCESS,
  payload: data,
});
