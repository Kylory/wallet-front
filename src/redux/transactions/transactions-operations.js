import axios from 'axios';
import {
  fetchTransactionRequest,
  fetchTransactionSuccess,
  fetchTransactionError,
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
  getTransactionCategoriesRequest,
  getTransactionCategoriesSuccess,
  getTransactionCategoriesError,
} from './transactions-actions';

//GET
const fetchTransactions = () => async dispatch => {
  dispatch(fetchTransactionRequest());

  try {
    const { data } = await axios.get('/transactions');

    // dispatch(fetchTransactionSuccess(data.data.transactions));
    dispatch(fetchTransactionSuccess(data.ResponseBody));
  } catch (error) {
    dispatch(fetchTransactionError(error.message));
  }
};

//POST
const addTransaction = transactionData => async dispatch => {
  dispatch(addTransactionRequest());

  try {
    const { data } = await axios.post('/transactions', transactionData);
    dispatch(addTransactionSuccess(data.ResponseBody));
  } catch (error) {
    dispatch(addTransactionError(error.message));
  }
};

// getCategories
const getCategories = () => async dispatch => {
  dispatch(getTransactionCategoriesRequest());

  try {
    const { data } = await axios.get('/transactions/categories');
    const categories = data.ResponseBody.slice(0, -2);

    dispatch(getTransactionCategoriesSuccess(categories));
  } catch (error) {
    dispatch(getTransactionCategoriesError(error.message));
  }
};

export { fetchTransactions, addTransaction, getCategories };
