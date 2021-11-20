import { statisticColors } from '../../../styles/colors';
import { transactionAPI } from '../../../API/statisticsAPI';
const IS_LOADING = 'statistics/IS_LOADING'
const IS_ERROR = 'statistics/ERROR_LOADING'
const SET_ALL_TRANSACTIONS = 'statistics/SET_ALL_TRANSACTIONS'





const initialState = {
  homeState: [
    
  ],
  statisticList: [
    { color: statisticColors.basicExpenses, tittle: 'Основные расходы', value: 2000 },
    { color: statisticColors.products, tittle: 'Продукты', value: 1000 },
    { color: statisticColors.car, tittle: 'Машина', value: 3000 },
    { color: statisticColors.health, tittle: 'Забота о себе', value: 2500 },
    { color: statisticColors.children, tittle: 'Забота о детях', value: 1000 },
    { color: statisticColors.house, tittle: 'Товары для дома', value: 2000 },
    { color: statisticColors.education, tittle: 'Образование', value: 100 },
    { color: statisticColors.hobby, tittle: 'Досуг', value: 4000 },
    { color: statisticColors.another, tittle: 'Другие Расходы', value: 600 },
  ],
  year: [],
  month: [
    { january: 'январь' },
    { february: 'февраль' },
    { march: 'март' },
    { april: 'апрель' },
    { may: 'май' },
    { june: 'июнь' },
    { july: 'июль' },
    { august: 'август' },
    { september: 'сентябрь' },
    { october: 'октябрь' },
    { november: 'ноябрь' },
    { december: 'декабрь' },
  ],
  statisticsIncomes: [
    {income: 8000},
    {expenses: 9000},
  ],
  isLoading: false,
  errors: null
};

export const statisticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING: return {...state, isLoading: action.payload}
    case IS_ERROR: return  {...state, errors: action.payload}
    case SET_ALL_TRANSACTIONS: return {...state, homeState: action.payload}
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
          console.log(response.ResponseBody.allTransactions)
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
