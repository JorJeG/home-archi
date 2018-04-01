import Dispatcher from './Dispatcher';
import ActionsTypes from './ActionsTypes';

class Store {
  constructor() {
    this._state = {};
  }

  getState() {
    return this._state;
  }
}

const NewStore = new Store();

Dispatcher.register(({ type, payload }) => {
  switch (type) {
    case ActionsTypes.SEND_DATA: {
      NewStore._state.data = payload;
      break;
    }
    case ActionsTypes.SERVER_RESPONSE: {
      NewStore._state.response = payload;
      const resp = document.querySelector('.view-stub__label');
      resp.textContent = `Сервер принял данные <${payload}>`;
      break;
    }
    case ActionsTypes.TYPING: {
      NewStore._state.data = payload;
      break;
    }
    default:
      return true;
  }
  const log = document.querySelector('.log');
  log.textContent = `ACTION: ${JSON.stringify(type)}`;
  console.log({ ACTION: type, payload }); // eslint-disable-line no-console
  return true;
});

export default NewStore;
