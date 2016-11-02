import{TWO_SIDE_MEASUREMENT_REQUEST,
      TWO_SIDE_MEASUREMENT_SUCCESSFUL,
      TWO_SIDE_MEASUREMENT_FAIL}
from '../actions/trackerUtilActions'

const initialTracker = {
  measurementConfig:'single',
  doBScheck:0,
  };

const trackerReducer = (state = initialTracker, action) => {
  switch(action.type){
    case TWO_SIDE_MEASUREMENT_SUCCESSFUL:{
      return Object.assign({}, state,  {
        measurementConfig:'double',
        });
  }
    case TWO_SIDE_MEASUREMENT_FAIL:{
      return Object.assign({}, state,  {
          measurementConfig:state.measurementConfig
      });
    }
  }
  return state;
}
export default trackerReducer
