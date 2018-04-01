import ActionTypes from './ActionsTypes';
import Dispatcher from './Dispatcher';

const Actions = {
  typing(data) {
    Dispatcher.dispatch({
      type: ActionTypes.TYPING,
      payload: data,
    });
  },
  sendData(data) {
    Dispatcher.dispatch({
      type: ActionTypes.SEND_DATA,
      payload: data,
    });
    this.serverResponse(data);
  },
  serverResponse(resp) {
    setTimeout(() => {
      Dispatcher.dispatch({
        type: ActionTypes.SERVER_RESPONSE,
        payload: resp,
      });
    }, 5000);
  },
};

export default Actions;
