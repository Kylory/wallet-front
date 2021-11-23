import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://wallet-back.herokuapp.com/api';

export const fetchBalance = createAsyncThunk(
  'current/balance',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/users/current');
      return data.ResponseBody.balance;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
