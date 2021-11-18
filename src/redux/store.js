import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
} from 'redux-persist';
import { statisticsReducer } from './reducers/statistic/statisticReducer';
import { statisticsHomeReducer } from './reducers/statistic/homeTable/statisticHomeReducer';
import authReducer from './auth/authSlice';
import { balanceReducer } from './balance/balanceReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

let reducers = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  statistics: statisticsReducer,
  statisticsHome: statisticsHomeReducer,
  balance: balanceReducer,
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);

export const persistor = persistStore(store);
