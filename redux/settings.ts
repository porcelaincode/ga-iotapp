import { SET_URI } from './actions';

var defaultState = {
  uri: 'wss://javascript.info/article/websocket/demo/hello',
};

export function defaultReducer(state = defaultState, action: any) {
  switch (action.type) {
    case SET_URI:
      return { ...state, uri: action.payload };
    default:
      return state;
  }
}
