import R from 'ramda';

//R.prop
//Returns a function that when supplied an object
//returns the indicated property of that object, if it exists.
//R.prop('x', {x: 100}); //=> 100
//R.prop('x', {}); //=> undefined
export const getPhoneById = (state, id) => R.prop(id, state.phones);

export const getPhones = state => {
  return R.map(id => getPhoneById(state, id), state.phonesPage.ids);
};

//R.length
//Returns the number of elements in the array by returning list.length
export const getRenderedPhonesLength = state => R.length(state.phonesPage.ids);
