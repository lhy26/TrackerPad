import {
    SET_SENSOR,
    CONNECT_SENSOR_REQUEST,
    CONNECT_SENSOR_SUCCESSFUL,
    CONNECT_SENSOR_FAIL,
    DISCONNECT_SENSOR_SUCCESSFUL,
    DISCONNECT_SENSOR_FAIL,
    MEASURE_ACTION_SUCCESSFUL,
    MEASURE_ACTION_FAIL
} from '../actions/sensorActions';


 //initial state for the sensor object
const initialSensor = {
  activeSensor:'none', //name as string of the sensor
  sensorTypes: ['none',
                'FaroIon',
                'FaroVantage',
                'LeicaAt40x'], //all available sensor types
  isConnected: false, //check if sensor is connected
  measureNumber: 0 //hypotetically ..counts
};

/**
 * reducer for sensor actions
 * manage actions from middleware
 * switches the value of the states on top
 * I think the ActionNames speaks for itself
 * @param
 */
const sensorReducer = (state = initialSensor, action) => {
    switch(action.type){
        // set new sensor
        case SET_SENSOR: {
            return Object.assign({}, state,  {
                activeSensor: action.newActiveSensor,
            });
        }

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

        case MEASURE_ACTION_SUCCESSFUL: {
          console.log('jetzt bin ich beim sensor reducer MEASUR_ACTION_SUCCESSFUL')
          let measCount = state.measureNumber;
          if(action.response.result.successful){
            measCount += 1
          }
          return Object.assign({}, state,{
              measureNumber: state.measureNumber + 1
          });
        }
        case MEASURE_ACTION_FAIL: {
          console.log('jetzt bin ich beim sensor reducer MEASUR_ACTION_FAIL')
          let measCount = initialSensor.measureNumber;
          return Object.assign({}, state,{
              measureNumber: measCount
          });
        }

        case DISCONNECT_SENSOR_SUCCESSFUL: {
          console.log('jetzt bin ich beim sensor reducer DISCONNECT_SENSOR_SUCCESSFUL')
          return Object.assign({}, state,{
            isConnected: false
          });
        }
        case DISCONNECT_SENSOR_FAIL: {
          console.log('jetzt bin ich beim sensor reducer DISCONNECT_SENSOR_FAIL')
          return Object.assign({}, state,{
            isConnected: action.response.result.successful
          });
        }
    }
    return state;
};

export default sensorReducer;
