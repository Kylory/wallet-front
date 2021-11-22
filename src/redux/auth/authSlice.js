import { createSlice } from '@reduxjs/toolkit';
import {
  registration,
  logIn,
  logOut,
  fetchCurrentUser,
  userRejected,
} from './authOperations';
import { successRequest, invalidRequest } from 'services/pnotify/notifications';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  isRejected: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registration.fulfilled](state, { payload: { user, token } }) {
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
      state.isRejected = false;
      successRequest('Успешно зарегестрировались!');
    },
    [registration.rejected](state, { payload: { message } }) {
      state.isRejected = true;
      if (message === 'Request failed with status code 409') {
        invalidRequest('Этот мейл уже используется');
      }
    },
    [logIn.fulfilled](state, { payload: { user, token } }) {
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
      state.isRejected = false;
      successRequest('Успешно залогинились!');
    },
    [logIn.rejected](state) {
      state.isRejected = true;
      invalidRequest('Введены неверные данные');
    },
    [userRejected](state, _) {
      state.isRejected = false;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
