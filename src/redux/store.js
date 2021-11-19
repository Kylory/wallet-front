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
import { statisticsHomeReducer } from './homeTable/statisticHomeReducer';
import authReducer from './auth/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

let reducers = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  statistics: statisticsReducer,
  statisticsHome: statisticsHomeReducer,
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);

export const persistor = persistStore(store);
