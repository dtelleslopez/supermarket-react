import createReducer from '../createReducer';

describe('createReducer function', () => {
  test('It  shouldn\'t return a reducer', () => {
    let reducer = createReducer();
    expect(typeof reducer).toBe('function');
    expect(reducer()).toStrictEqual({});
    reducer = createReducer(undefined, []);
    expect(reducer()).toStrictEqual({});
    reducer = createReducer(undefined, {});
    expect(reducer()).toStrictEqual({});
    expect(reducer(null, { age: 18 })).toStrictEqual({});
    expect(reducer([], null)).toStrictEqual({});
    expect(reducer({}, { type: null })).toStrictEqual({});
    expect(reducer({}, { type: 'ADD_TODO' })).toStrictEqual({});
  });

  test('It should return a valid reducer', () => {
    expect(typeof createReducer()).toBe('function');
  });
});
