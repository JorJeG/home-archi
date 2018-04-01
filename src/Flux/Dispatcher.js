class Dispatcher {
  constructor() {
    this._id = 0;
    this._callbacks = {};
  }

  register(callback) {
    this._callbacks[this._id] = callback;
    return this._id++; // eslint-disable-line no-plusplus
  }

  unregister(id) {
    delete this._callbacks[id];
  }

  dispatch(payload) {
    const keys = Object.keys(this._callbacks);
    keys.forEach(id => this._callbacks[id](payload));
  }
}

export default new Dispatcher();
