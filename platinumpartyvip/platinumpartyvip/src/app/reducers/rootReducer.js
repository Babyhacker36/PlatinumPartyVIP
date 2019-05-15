import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
// import testReducer from '../../features/testarea/testReducer';
import testReducer from '../../features/testArea/testReducer';
import eventReducer from '../../features/event/eventReducer'

const rootReducer = combineReducers({
  test: testReducer,
  events: eventReducer,
  form: FormReducer
})

export default rootReducer


// api key
// AIzaSyA9mTXhWCpVlWisdgl2T8bE9cYDa4s - KcM