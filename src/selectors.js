import {
  prop,
  pipe,
  map,
  when,
  filter,
  always,
  pluck,
  sum,
  contains,
  equals,
  length,
  uniq,
  values,
  path,
  assoc
} from 'ramda'

//R.prop
//Returns a function that when supplied an object
//returns the indicated property of that object, if it exists.
//R.prop('x', {x: 100}); //=> 100
//R.prop('x', {}); //=> undefined
export const getPhoneById = (state, id) => prop(id, state.phones)

export const getPhones = (state, ownProps) => {
  const activeCategoryId = getActiveCategoryId(ownProps)

  const applySearch = item =>
    contains(state.phonesPage.search, prop('name', item).toLowerCase())

  const applyCategory = item =>
    equals(activeCategoryId, prop('categoryId', item))

  return pipe(
    map(id => getPhoneById(state, id)),
    //R.when
    //Tests the final argument by passing it to the given predicate function.
    //If the predicate is satisfied, the function will return the result of calling the whenTrueFn function with the same argument.
    //If the predicate is not satisfied, the argument is returned as is.

    //R.always
    //Returns a function that always returns the given value.
    //Note that for non-primitives the value returned is a reference to the original value.
    //This function is known as const, constant, or K (for K combinator) in other languages and libraries.
    //In case below we need it only because 'when' requires function as a predicate
    when(always(activeCategoryId), filter(applyCategory)),
    filter(applySearch)
  )(state.phonesPage.ids)
}

//R.length
//Returns the number of elements in the array by returning list.length
export const getRenderedPhonesLength = state => length(state.phonesPage.ids)

export const getTotalBasketCount = state => length(state.basket)

export const getTotalBasketPrice = state => {
  return pipe(
    map(id => getPhoneById(state, id)),
    //R.pluck
    //Returns a new list by plucking the same named property off all objects in the list supplied.
    //R.pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]
    //R.pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]
    //R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
    pluck('price'),
    //R.sum
    //Adds together all the elements of a list.
    sum
  )(state.basket)
}

export const getBasketPhonesWithCount = state => {
  const phoneCount = id =>
    pipe(
      filter(basketId => equals(id, basketId)),
      length
    )(state.basket)

  //R.assoc
  //Makes a shallow clone of an object, setting or overriding the specified property with the given value.
  //Note that this copies and flattens prototype properties onto the new object as well.
  //All non-primitive properties are copied by reference.
  const phoneWithCount = phone => assoc('count', phoneCount(phone.id), phone)

  //R.uniq
  //Returns a new list containing only one copy of each element in the original list.
  //R.equals is used to determine equality.
  const uniqueIds = uniq(state.basket)

  return pipe(
    map(id => getPhoneById(state, id)),
    map(phoneWithCount)
  )(uniqueIds)
}

//R.values
//Returns a list of all the enumerable own properties of the supplied object.
//Note that the order of the output array is not guaranteed across different JS platforms.
export const getCategories = state => values(state.categories)

//R.path
//Retrieve the value at a given path.
//R.path(['a', 'b'], {a: {b: 2}}); //=> 2
//R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
export const getActiveCategoryId = ownProps =>
  path(['match', 'params', 'id'], ownProps)
