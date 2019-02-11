import phones from './mockPhones'
import { find, propEq } from 'ramda'
import categories from './mockCategories'

export const fetchPhones = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(phones)
    }, 800)
  })
}

export const loadMorePhones = async ({ offset }) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(phones)
    }, 800)
  })
}

export const fetchCategories = async () => {
  return new Promise((resolve, reject) => {
    resolve(categories)
  })
}

//R.find
//Returns the first element of the list which matches the predicate, or undefined if no element matches.
//Dispatches to the find method of the second argument, if present.

//R.propEq
//Returns true if the specified object property is equal, in R.equals terms, to the given value; false otherwise.
export const fetchPhoneById = async id => {
  return new Promise((resolve, reject) => {
    const phone = find(propEq('id', id), phones)
    resolve(phone)
  })
}
