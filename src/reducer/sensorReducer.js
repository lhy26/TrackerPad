import {
    SET_SENSOR,
    CONNECT_SENSOR_REQUEST,
    CONNECT_SENSOR_SUCCESSFUL,
    CONNECT_SENSOR_FAIL,
    DISCONNECT_SENSOR_SUCCESSFUL,
    DISCONNECT_SENSOR_FAIL,
    MEASURE_ACTION_SUCCESSFUL,
    MEASURE_ACTION_FAIL,
    TOGGLE_SENSOR_SUCCESSFUL,
    TOGGLE_SENSOR_FAIL,
    HOME_ACTION_SUCCESSFUL,
    HOME_ACTION_FAIL,
    COMPIT_ACTION_REQUEST,
    COMPIT_ACTION_SUCCESSFUL,
    COMPIT_ACTION_FAIL
} from '../actions/sensorActions';


 //initial state for the sensor object
const initialSensor = {
  activeSensor:'none', //name as string of the sensor
  sensorTypes: ['none',
                'FaroIon',
                'FaroVantage',
                'LeicaAt40x'], //all available sensor types
  isConnected: false, //check if sensor is connected
  measureNumber: 0, //hypotetically ..counts the number of measurements
  toggleNumber: 0, //counts how often the tracker toggles the sight
  homeNumber: 0, //TODO: not sure if counting or boolean(or both)
  compItNumber: 0 //Counts how often ...compit...you know...

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
            isConnected: action.error.result.successful
          });
        }

        case TOGGLE_SENSOR_SUCCESSFUL: {
          console.log('jetzt bin ich beim sensor reducer TOGGLE_SENSOR_SUCCESSFUL')
          let toggleCount = state.toggleNumber;
          if(action.response.result.successful){
              toggleCount += 1
          }
          return Object.assign({}, state,{
            toggleNumber: state.toggleNumber + 1
          });
        }
        case TOGGLE_SENSOR_FAIL: {
          console.log('jetzt bin ich beim sensor reducer TOGGLE_SENSOR_FAIL')
          let toggleCount = state.toggleNumber;
          return Object.assign({}, state,{
            toggleNumber: state.toggleNumber
          });
        }

        case HOME_ACTION_SUCCESSFUL: {
          console.log('jetzt bin ich beim sensor reducer HOME_ACTION_SUCCESSFUL')
          let homeCount = state.homeNumber;
          if(action.response.result.successful){
            homeCount += 1
          }
          return Object.assign({}, state,{
              homeNumber: state.homeNumber + 1
          });
        }
        case HOME_ACTION_FAIL: {
          console.log('jetzt bin ich beim sensor reducer HOME_ACTION_FAIL')
          let homeCount = initialSensor.homeNumber;
          return Object.assign({}, state,{
              homeNumber: state.homeCount
          });
        }

        case COMPIT_ACTION_SUCCESSFUL: {
          console.log('jetzt bin ich beim sensor reducer COMPIT_ACTION_SUCCESSFUL')
          let compitCount = state.compItNumber;
          if(action.response.result.successful){
            compitCount += 1
          }
          return Object.assign({}, state,{
              compItNumber: state.compItNumber + 1
          });
        }
        case COMPIT_ACTION_FAIL: {
          console.log('jetzt bin ich beim sensor reducer COMPIT_ACTION_FAIL')
          let compItCount = initialSensor.compItNumber;
          return Object.assign({}, state,{
              compItNumber: state.compItCount
          });
        }
    }
    return state;
};

export default sensorReducer;
