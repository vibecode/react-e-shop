import {
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_FAILURE,
  LOAD_MORE_PHONES_START,
  LOAD_MORE_PHONES_SUCCESS,
  LOAD_MORE_PHONES_FAILURE,
  FETCH_PHONE_BY_ID_START,
  FETCH_PHONE_BY_ID_SUCCESS,
  FETCH_PHONE_BY_ID_FAILURE,
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  ADD_PHONE_TO_BASKET,
  REMOVE_PHONE_FROM_BASKET,
  CLEAN_BASKET,
  SEARCH_PHONE,
} from '../constants/actionTypes';

import {
  fetchPhones as fetchPhonesApi,
  loadMorePhones as loadMorePhonesApi,
  fetchPhoneById as fetchPhoneByIdApi,
  fetchCategories as fetchCategoriesApi
} from '../api';

import { getRenderedPhonesLength } from '../selectors';

export const fetchPhones = () => async dispatch => {
  dispatch({
    type: FETCH_PHONES_START
  });

  try {
    const phones = await fetchPhonesApi();

    dispatch({
      type: FETCH_PHONES_SUCCESS,
      payload: phones
    })
  } catch (err) {
    dispatch({
      type: FETCH_PHONES_FAILURE,
      payload: err,
      error: true
    })
  }
};

export const loadMorePhones = () => async (dispatch, getState) => {
  const offset = getRenderedPhonesLength(getState());

  console.log('kek');
  dispatch({
    type: LOAD_MORE_PHONES_START
  });

  try {
    const phones = await loadMorePhonesApi({ offset });

    dispatch({
      type: LOAD_MORE_PHONES_SUCCESS,
      payload: phones
    })
  } catch (err) {
    dispatch({
      type: LOAD_MORE_PHONES_FAILURE,
      payload: err,
      error: true
    })
  }
};

export const fetchPhoneById = id => async dispatch => {
  dispatch({ type: FETCH_PHONE_BY_ID_START });

  try {
    const phone = await fetchPhoneByIdApi(id);
    dispatch({
      type: FETCH_PHONE_BY_ID_SUCCESS,
      payload: phone
    })
  } catch (err) {
    dispatch({
      type: FETCH_PHONE_BY_ID_FAILURE,
      payload: err,
      error: true
    })
  }
};

export const fetchCategories = () => async dispatch => {
  dispatch({ type: FETCH_CATEGORIES_START });

  try {
    const phones = await fetchCategoriesApi();
    dispatch({
      type: FETCH_CATEGORIES_SUCCESS,
      payload: phones
    })
  } catch (err) {
    dispatch({
      type: FETCH_CATEGORIES_FAILURE,
      payload: err,
      error: true
    })
  }
};


export const addPhoneToBasket = id => {
  return {
    type: ADD_PHONE_TO_BASKET,
    payload: id
  }
};

export const removePhoneFromBasket = id => async dispatch => {
  console.log(id);
  dispatch({
    type: REMOVE_PHONE_FROM_BASKET,
    payload: id
  })
};

export const cleanBasket = () => {
 return {
    type: CLEAN_BASKET
  }
};

export const basketCheckout = phones => () => {
  alert(JSON.stringify(phones));
};


export const searchPhone = text => {
  return {
    type: SEARCH_PHONE,
    payload: text
  }
};


