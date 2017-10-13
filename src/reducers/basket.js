import R from 'ramda';

import {
  ADD_PHONE_TO_BASKET,
  REMOVE_PHONE_FROM_BASKET
} from '../constants/actionTypes';

export default (state = [], { type, payload }) => {
  switch (type) {
    case ADD_PHONE_TO_BASKET:
      //R.append
      //Returns a new list containing the contents of the given list, followed by the given element.
      //R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
      //R.append('tests', []); //=> ['tests']
      //R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
      return R.append(payload, state);
    case REMOVE_PHONE_FROM_BASKET:
      //R.without
      //Returns a new list without values in the first argument. R.equals is used to determine equality.

      //R.of
      //Returns a singleton array containing the value provided.
      return R.without(R.of(payload), state);
    default:
      return state
  }
}
