import R from 'ramda';

import {
  FETCH_PHONES_SUCCESS,
  LOAD_MORE_PHONES_SUCCESS
} from '../constants/actionTypes';

const initialState = {};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      //R.indexBy
      // Given a function that generates a key, turns a list of objects
      // into an object indexing the objects by the given key.
      // Note that if multiple objects generate the same value
      // for the indexing key only the last value will be included in the generated object.
      //
      //  Acts as a transducer if a transformer is given in list position.
      const newValues = R.indexBy(R.prop('id'), payload);

      return R.merge(state, newValues);
    case LOAD_MORE_PHONES_SUCCESS:
      const moreValues = R.indexBy(R.prop('id'), payload);

      return R.merge(state, moreValues);
    default:
      return state;
  }
}
