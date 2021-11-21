import { transactionAPI } from '../../../API/statisticsAPI';
import { listColors } from './baseStateStatistics/listColors';
import { monthList } from './baseStateStatistics/monthList';
const IS_LOADING = 'statistics/IS_LOADING'
const IS_ERROR = 'statistics/ERROR_LOADING'
const SET_ALL_TRANSACTIONS = 'statistics/SET_ALL_TRANSACTIONS'
const SET_CATEGORIES = 'statistics/SET_CATEGORIES'
const initialState = {
  homeState: [

  ],
  statisticListColor: listColors,
  statisticCategories: [],
  year: [],
  month: monthList,
  statisticsIncomes: [
    {income: 0},
    {expenses: 0},
  ],
  isLoading: false,
  errors: null
};

export const statisticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING: return {...state, isLoading: action.payload}
    case IS_ERROR: return  {...state, errors: action.payload}
    case SET_ALL_TRANSACTIONS: {
      let income = 0
      let expenses = 0
      if (!action.payload.length){
        return {...state}
      }
      action.payload.forEach(({type, amount}) => {
        if (type === "increment") {
          income +=amount
        }else {
          expenses +=amount
        }
      })


      return {...state, homeState: action.payload, statisticsIncomes: [{income}, {expenses}]}

    }
    case SET_CATEGORIES: {
      if (!action.payload.length) {
        return {...state}
      }
      const categoriesArr = action.payload.map((item, index) => {
        const [value, title] = Object.entries(item)[0]
        return {index, color: state.statisticListColor[index], value, title}
      })
      return {...state, statisticCategories: categoriesArr}
    }
    default:
      return state;
  }
};




const loading = (payload) => {
  return {type: IS_LOADING, payload}
}
const errors = (payload) => {
  return {type: IS_ERROR, payload}
}
const homeState = (payload) => {
  return { type:SET_ALL_TRANSACTIONS, payload}
}
const setCategories = (payload) => {
  return {type: SET_CATEGORIES, payload}
}

export const getAllTransactions = () => {
  return (
    async (dispatch,getState) => {
      const token = getState().auth.token
      if(!token) return
      dispatch(loading(true))
      try {
        const response = await transactionAPI.getTransactions(token)
        if (response.status = 200) {
          dispatch(homeState(response.ResponseBody.allTransactions))
        }
      }catch (e) {
        dispatch(errors(e.response))
      }
      finally {
        dispatch(loading(false))
      }
    }
  )
}
export const getTransactionCategories = () => {
  return (
    async (dispatch,getState) => {
      const token = getState().auth.token
      if(!token) return
      dispatch(loading(true))
      try {
        const response = await transactionAPI.getTransactionCategories(token)
        if (response.status = 200) {
          dispatch(setCategories(response.ResponseBody))
        }
      }catch (e) {
        dispatch(errors(e.response))
      }
      finally {
        dispatch(loading(false))
      }
    }
  )
}
export const getTransactionsByPeriod = (data) => {
  return (
    async (dispatch,getState) => {
      const token = getState().auth.token
      if(!token) return
      dispatch(loading(true))
      try {
        const response = await transactionAPI.getTransactionByPeriod(token,data)
        if (response.status = 200) {
          dispatch(homeState(response.ResponseBody.filteredTransactions))
        }
      }catch (e) {
        dispatch(errors(e.response))
      }
      finally {
        dispatch(loading(false))
      }
    }
  )
}
