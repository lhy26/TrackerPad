import {
    SET_SENSOR,
    CONNECT_SENSOR_REQUEST,
    CONNECT_SENSOR_FAIL,
    DISCONNECT_SENSOR_RESPONSE,
    DISCONNECT_SENSOR_FAIL,
    INIT_SOCKET_REQUEST,
    INIT_SOCKET_FAIL,
    MEASURE_RESPONSE,
    MEASURE_FAIL
} from '../actions/sensorActions';

const initialSensor = {
  activeSensor: 'none',
  sensorTypes: ['none',
                'FaroIon',
                'FaroVantage',
                'LeicaAt40x'],
  isConnected: false,
  socketConnection: false,
  meausureNumber: 0



};

const sensorReducer = (state = initialSensor, action) => {
    switch(action.type){
        // set new sensor
        case SET_SENSOR: {
          console.log('jetzt bin ich beim sensor reducer SET_SENSOR')
            return Object.assign({}, state,  {
                activeSensor: action.newActiveSensor,
              //  socketConnection: false
            });
        }
        case CONNECT_SENSOR_REQUEST: {
          console.log('jetzt bin ich beim sensor reducer CONNECT SENSOR REQUEST')
            return Object.assign({}, state,{
              isConnected: action.isConnected
            });
        }
        case CONNECT_SENSOR_FAIL: {
          console.log('jetzt bin ich beim sensor reducer CONNECT SENSOR FAIL')
            return Object.assign({}, state,{
            activeSensor: {
             ...state.activeSensor},
              isConnected: false
            });
        }
        case DISCONNECT_SENSOR_RESPONSE: {
            return Object.assign({}, state,{
          //    activeSensor: {
          //        ...state.activeSensor},
                isConnected: false
            });
        }
        case DISCONNECT_SENSOR_FAIL: {
            return Object.assign({}, state,{
              activeSensor: {
                  ...state.activeSensor},
                isConnected: false
            });
        }
        case INIT_SOCKET_REQUEST: {
          console.log('jetzt bin ich beim sensor reducer INIT_SOCKET_REQUEST')
            return Object.assign({}, state,{
              activeSensor: {
                  ...state.activeSensor},
              socketConnection: true

            });
        }
        case INIT_SOCKET_FAIL: {
          console.log('jetzt bin ich beim sensor reducer INIT_SOCKET_FAIL')
            return Object.assign({}, state,{
              activeSensor: {
                  ...state.activeSensor},
              socketConnection: false
            });
        }
        case MEASURE_RESPONSE: {
          console.log('jetzt bin ich beim sensor reducer MEASURE_RESPONSE')
            return Object.assign({}, state,{
              activeSensor: {
                  ...state.activeSensor},
              meausureNumber: 2
            });
        }
        case MEASURE_FAIL: {
          console.log('jetzt bin ich beim sensor reducer MEASURE_FAIL')
            return Object.assign({}, state,{
              activeSensor: {
                  ...state.activeSensor},
              meausureNumber: 3
            });
        }
    }
    return state;
};


export default sensorReducer;
