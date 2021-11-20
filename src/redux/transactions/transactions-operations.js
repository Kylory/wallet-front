import axios from 'axios';
import { fetchTransactionRequest,
    fetchTransactionSuccess,
    fetchTransactionError,
    addTransactionRequest,
    addTransactionSuccess,
    addTransactionError,
    getQueryStatisticsRequest,
    getQueryStatisticsSuccess,
    getQueryStatisticsError,
    getTransactionCategoriesRequest,
    getTransactionCategoriesSuccess,
    getTransactionCategoriesError
    } from './transactions-actions'


    //GET 
const fetchTransactions = () => async dispatch => {
    dispatch(fetchTransactionRequest());

    try {
        const { data } = await axios.get('/transactions');

        dispatch(fetchTransactionSuccess(data.data.transactions));
    } catch (error) {
        dispatch(fetchTransactionError(error.message));
    }
};

//POST
const addTransaction = transactionData => async dispatch => {

    dispatch(addTransactionRequest());

    try {
        const { data } = await axios.post('/transactions', transactionData);
        console.log("data", data.data.result)
        dispatch(addTransactionSuccess(data.data.result));
        
    } catch (error) {
    dispatch(addTransactionError(error.message));
    }
};

//GET
const getQueryStatistics = ({ month, year }) => async dispatch => {
    dispatch(getQueryStatisticsRequest());

    try {
        const { data } = await axios.get(`/transactions/statistics?month=${month}&year=${year}`);

        dispatch(getQueryStatisticsSuccess(data));
    } catch (error) {
        dispatch(getQueryStatisticsError(error));
        }
    };

// getCategories
const getCategories = () => async dispatch => {
    dispatch(getTransactionCategoriesRequest());

    try {
        const { data } = await axios.get('/transactions/categories');
        dispatch(getTransactionCategoriesSuccess(data.data));
    } catch (error) {
        dispatch(getTransactionCategoriesError(error.message));
    }
};

export { fetchTransactions, addTransaction, getQueryStatistics, getCategories };
