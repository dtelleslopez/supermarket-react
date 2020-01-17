function createReducer(initialState = {}, handlers = {}) {
  return function reducer(state = initialState, action = {}) {
    if (!state || typeof state !== 'object') {
      return {};
    }

    if (!action || typeof action !== 'object' || Array.isArray(action) || !action.type) {
      return state;
    }

    const hasProperty = Object.prototype.hasOwnProperty.call(handlers, action.type);

    if (hasProperty) {
      return handlers[action.type](state, action);
    }

    return state;
  };
}

export default createReducer;
