import { combineReducers } from 'redux';
import multireducer from 'multireducer';
import { routerStateReducer } from 'redux-router';

import counter from './counter';

export default combineReducers({
  router: routerStateReducer,
  multireducer: multireducer({
    counter1: counter,
    counter2: counter,
    counter3: counter
  })
});
