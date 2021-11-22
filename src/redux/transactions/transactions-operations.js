import axios from 'axios';
import {
  fetchTransactionRequest,
  fetchTransactionSuccess,
  fetchTransactionError,
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
  // getQueryStatisticsRequest,
  // getQueryStatisticsSuccess,
  // getQueryStatisticsError,
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
    // console.log('data', data.data.result);
    // dispatch(addTransactionSuccess(data.data.result));
    dispatch(addTransactionSuccess(data.ResponseBody));
  } catch (error) {
    dispatch(addTransactionError(error.message));
    // toast.error(' Недостаточно средств на счету', {
    //   position: 'top-right',
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: 'colored',
    // });
  }
};

//GET
// const getQueryStatistics =
//   ({ month, year }) =>
//   async dispatch => {
//     dispatch(getQueryStatisticsRequest());

//     try {
//       const { data } = await axios.get(
//         `/transactions/statistics?month=${month}&year=${year}`,
//       );

//       dispatch(getQueryStatisticsSuccess(data));
//     } catch (error) {
//       dispatch(getQueryStatisticsError(error));
//     }
//   };

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
