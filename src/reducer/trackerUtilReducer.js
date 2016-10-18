import{SENSOR_CHANGE_REQUEST,
      SENSOR_CHANGE_SUCCESSFUL,
      SENSOR_CHANGE_FAIL}
from '../actions/trackerUtilActions'

const initialTracker ={
  trackerConnected: 'false'
  };

const trackerReducer = ( state = initialTracker, action) => {
  switch(action.type){
    case SENSOR_CHANGE_SUCCESSFUL: {
      return Object.assign({},state,{
          trackerConnected: action.response.result.successful
      });
    }
    case SENSOR_CHANGE_FAIL:{
      return Object.assign({},state,{
        trackerConnected: action.response.error.successful
      });
    }

  }
}
