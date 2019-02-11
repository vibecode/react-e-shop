import { assoc, merge, indexBy, prop } from 'ramda'

import {
  FETCH_PHONES_SUCCESS,
  FETCH_PHONE_BY_ID_SUCCESS,
  LOAD_MORE_PHONES_SUCCESS
} from '../constants/actionTypes'

const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      //R.indexBy
      // Given a function that generates a key, turns a list of objects
      // into an object indexing the objects by the given key.
      // Note that if multiple objects generate the same value
      // for the indexing key only the last value will be included in the generated object.
      //
      //  Acts as a transducer if a transformer is given in list position.
      const newValues = indexBy(prop('id'), payload)

      return merge(state, newValues)
    case LOAD_MORE_PHONES_SUCCESS:
      const moreValues = indexBy(prop('id'), payload)

      return merge(state, moreValues)
    case FETCH_PHONE_BY_ID_SUCCESS:
      //R.assoc
      //Makes a shallow clone of an object, setting or overriding the specified property with the given value.
      //Note that this copies and flattens prototype properties onto the new object as well.
      //All non-primitive properties are copied by reference.
      return assoc(payload.id, payload, state)
    default:
      return state
  }
}
