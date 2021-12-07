import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { statisticsReducer } from './reducers/statistic/statisticReducer';
import authReducer from './auth/authSlice';
import { balanceReducer } from './balance/balanceReducer';
import transactionsReducer from './transactions/transactions-reducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

let reducers = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  statistics: statisticsReducer,
  balance: balanceReducer,
  transactions: transactionsReducer,
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);

export const persistor = persistStore(store);
