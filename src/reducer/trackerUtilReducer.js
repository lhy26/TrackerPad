import{SENSOR_CHANGE_REQUEST,
      SENSOR_CHANGE_SUCCESSFUL,
      SENSOR_CHANGE_FAIL}
from '../actions/trackerUtilActions'

const initialTracker = {
  trackerConnected: false,
  anotherState: false,
  };

const trackerReducer = (state = initialTracker, action) => {
  switch(action.type){
//
  }
  return state;
}
export default trackerReducer
