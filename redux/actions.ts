export const SET_URI = 'SET_URI';

export const setUri = (uri: any) => (dispatch: any) => {
  dispatch({
    type: SET_URI,
    payload: uri,
  });
};

export const SET_NOTIF = 'SET_NOTIF';
export const SET_OPEN = 'SET_OPEN';

export const setNotifications = (notif: any) => (dispatch: any) => {
  dispatch({
    type: SET_NOTIF,
    payload: notif,
  });
};

export const setNotifOpen = (open: any) => (dispatch: any) => {
  dispatch({
    type: SET_NOTIF,
    payload: open,
  });
};
