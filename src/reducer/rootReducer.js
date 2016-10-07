/**
 * Created by brauls on 02.08.2016.
 */

'use strict';

import { combineReducers } from 'redux';
import sensorReducer from './sensorReducer';

/**
 * Combines the reducers to one root reducer.
 */
const rootReducer = combineReducers({
    sensor: sensorReducer
});

export default rootReducer;
