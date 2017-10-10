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

export const getTotalBasketCount = state => R.length(state.basket);

export const getTotalBasketPrice = state => {
  return R.compose(
      //R.sum
      //Adds together all the elements of a list.
      R.sum,
      //R.pluck
      //Returns a new list by plucking the same named property off all objects in the list supplied.
      //R.pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]
      //R.pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]
      //R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
      R.pluck('price'),
      R.map(id => getPhoneById(state, id))
  )(state.basket);
};
