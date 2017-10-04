import R from 'ramda';

import {
  FETCH_PHONES_SUCCESS
} from '../constants/actionTypes';

const initialState = {
  ids: []
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      return R.merge(state, {
        //R.pluck
        //Returns a new list by plucking the same named property off all objects in the list supplied.
        //pluck will work on any functor in addition to arrays, as it is equivalent to R.map(R.prop(k), f).

        //R.pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]
        //R.pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]
        //R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
        ids: R.pluck('id', payload)
      });
    default:
      return state
  }
}