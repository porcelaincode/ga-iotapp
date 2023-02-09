import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { defaultReducer } from './settings';

const rootReducer = combineReducers({
  defaultReducer,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
