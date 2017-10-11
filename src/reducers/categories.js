import R from 'ramda';

import {
  FETCH_CATEGORIES_SUCCESS
} from '../constants/actionTypes';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_CATEGORIES_SUCCESS:
      //R.indexBy
      //Given a function that generates a key, turns a list of objects into
      //an object indexing the objects by the given key.
      //Note that if multiple objects generate the same value for the indexing key
      //only the last value will be included in the generated object.

      //var list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
      //R.indexBy(R.prop('id'), list);
      //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
      const newValues = R.indexBy(R.prop('id'), payload);

      return R.merge(state, newValues);
    default:
      return state
  }
}