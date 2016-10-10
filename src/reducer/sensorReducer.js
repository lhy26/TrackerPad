import {
    SET_SENSOR,
    CONNECT_SENSOR_REQUEST,
    CONNECT_SENSOR_SUCCESSFUL,
    CONNECT_SENSOR_FAIL
} from '../actions/sensorActions';


 //initial state for the sensor object
const initialSensor = {
  activeSensor:'none', //name as string of the sensor
  sensorTypes: ['none',
                'FaroIon',
                'FaroVantage',
                'LeicaAt40x'], //all available sensor types
  isConnected: false, //check if sensor is connected
};

/**
 * reducer for sensor actions
 * manage actions from middleware
 * switches the value of the states on top
 * @param
 */
const sensorReducer = (state = initialSensor, action) => {
    switch(action.type){
        // set new sensor
        case SET_SENSOR: {
          console.log('jetzt bin ich beim sensor reducer SET_SENSOR')
            return Object.assign({}, state,  {
                activeSensor: action.newActiveSensor,
            });
        }
        /*case CONNECT_SENSOR_REQUEST: {
          console.log('jetzt bin ich beim sensor reducer CONNECT SENSOR REQUEST')
          /*  return Object.assign({}, state,{
              isConnected: action.isConnected
          });
        }*/
        case CONNECT_SENSOR_SUCCESSFUL: {
          console.log('jetzt bin ich beim sensor reducer CONNECT SENSOR SUCCESSFUL')
          return Object.assign({}, state,{
            isConnected: action.response.result.successful
          });
        }
        case CONNECT_SENSOR_FAIL: {
          console.log('jetzt bin ich beim sensor reducer CONNECT SENSOR FAIL')
          return Object.assign({}, state,{
              isConnected: action.error.result.successful
          });
        }
    }
    return state;
};

export default sensorReducer;
