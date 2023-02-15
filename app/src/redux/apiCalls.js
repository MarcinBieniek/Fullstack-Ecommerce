import { loginStart, loginSuccess, loginFailure } from './userRedux';
import { publicRequest } from '../middleware/requestMethods';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    
  } catch(err) {
    dispatch(loginFailure(err));
    console.log('login error is', err)
  }
}