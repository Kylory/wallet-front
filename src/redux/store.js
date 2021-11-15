import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import { statisticsReducer } from './reducers/statistic/statisticReducer';
import {statisticsHomeReducer} from './reducers/statistic/homeTable/statisticHomeReducer';


let reducers = combineReducers({
 statistics: statisticsReducer,
 statisticsHome: statisticsHomeReducer
})


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
));


