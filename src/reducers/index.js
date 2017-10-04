import { combineReducers } from 'redux';

import phones from './phones';
import phonesPage from './phonesPage';

export default combineReducers({
  phones,
  phonesPage
})