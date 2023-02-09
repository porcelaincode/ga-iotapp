import { SET_NOTIF, SET_OPEN } from './actions';

var notifState = {
  n: [],
  opened: false,
};

export function notifReducer(state = notifState, action: any) {
  switch (action.type) {
    case SET_NOTIF:
      let n_new = [...state.n].concat(action.payload);
      return { ...state, n: n_new };
    case SET_OPEN:
      return { ...state, opened: action.payload };
    default:
      return state;
  }
}
