import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer } from './reducers';

const initialState = {};
const reducers = combineReducers({
  nameReducer: reducer,
});
const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleware)
);
export default store;
