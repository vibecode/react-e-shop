import { combineReducers } from 'redux';

import phones from './phones';
import phonesPage from './phonesPage';
import phonePage from './phonePage';

export default combineReducers({
  phones,
  phonesPage,
  phonePage
});