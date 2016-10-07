export const SET_SENSOR = 'SET_SENSOR'

export const CONNECT_SENSOR_REQUEST='CONNECT_SENSOR_REQUEST'
export const CONNECT_SENSOR_RESPONSE='CONNECT_SENSOR_RESPONSE'
export const CONNECT_SENSOR_FAIL = 'CONNECT_SENSOR_FAIL'

export const DISCONNECT_SENSOR_REQUEST='DISCONNECT_SENSOR_REQUEST'
export const DISCONNECT_SENSOR_RESPONSE='DISCONNECT_SENSOR_RESPONSE'
export const DISCONNECT_SENSOR_FAIL='DISCONNECT_SENSOR_FAIL'

export const INIT_SOCKET_REQUEST='INIT_SOCKET_REQUEST'
export const INIT_SOCKET_RESPONSE='INIT_SOCKET_RESPONSE'
export const INIT_SOCKET_FAIL='INIT_SOCKET_FAIL'

export const TOGGLE_REQUEST='TOGGLE_REQUEST'
export const TOGGLE_RESPONSE='TOGGLE_RESPONSE'
export const TOGGLE_FAIL='TOGGLE_FAIL'

export const HOME_REQUEST='HOME_REQUEST'
export const HOME_RESPONSE='HOME_RESPONSE'
export const HOME_FAIL='HOME_FAIL'

export const COMPIT_REQUEST='COMPIT_REQUEST'
export const COMPIT_RESPONSE='COMPIT_RESPONSE'
export const COMPIT_FAIL='COMPIT_FAIL'

export const MEASURE_REQUEST='MEASURE_REQUEST'
export const MEASURE_RESPONSE='MEASURE_RESPONSE'
export const MEASURE_FAIL='MEASURE_FAIL'



export function setSensor(name){
  console.log ('ich bin hier bei SET_SENSOR ACTIONS')
  return{
    type:SET_SENSOR,
    newActiveSensor: name
  };

}
 export function connectSensorRequest(){
   console.log ('ich bin hier bei Connect sensor request')
  return{
    type:CONNECT_SENSOR_REQUEST,
  };
}
export function connectSensorResponse(sensor, response){
console.log ('ich bin hier bei Connect sensor resopnse')
  return{
    type:CONNECT_SENSOR_RESPONSE,
    sensor,
    response
  };
}
export function connectSensorFail(sensor,error){
console.log ('ich bin hier bei Connect sensor Failure')
  return{
    type:CONNECT_SENSOR_FAIL,
    sensor,
    error
    };
}
export function connectSensor(sensor){
  console.log ('ich bin hier bei Connect sensor FUNKTION')

    if (sensor == 0){
        let error = "no Sensor chosen";
        return dispatch => {dispatch(connectSensorFail(error));};
    }
    return dispatch => {
        dispatch(connectSensorRequest(sensor));
    };
}
export function disconnectSensorRequest(){
  return{
    type:DISCONNECT_SENSOR_REQUEST

  };
}
export function disconnectSensorResponse(response){
  return{
    type:DISCONNECT_SENSOR_RESPONSE,
    disconnect:response

  };
}
export function disconnectSensorResponse(fail){
  return{
    type:DISCONNECT_SENSOR_FAIL,
    disconnect:fail
  };
}
export function disconnectSensor(sensor){
  console.log ('ich bin hier bei DisConnect sensor FUNKTION')

    if (sensor == 0){
        let error = "Disconnect nicht möglich";
        return dispatch => {dispatch(disconnectSensorFail(error));};
    }
    return dispatch => {
        dispatch(disconnectSensorRequest(sensor));
    };

}

export function initSocketRequest(){
 console.log ('ich bin hier bei initSocketRequest')
 return{
   type:INIT_SOCKET_REQUEST
 };
}
export function initSocketResponse(response){
  console.log ('ich bin hier bei initSocketResponse')
  return{
    type:INIT_SOCKET_RESPONSE,
    socketConnection:response

  };
}
export function initSocketFail(error){
  console.log ('ich bin hier bei initSocketFail')
  return{
    type:INIT_SOCKET_FAIL,
    error
  };
}
export function initSocket(){
  if (!sensor.socketConnection){
    let error = "No Connect to QT";
    return dispatch(initSocketFail(error));
  };
  return dispatch => {
      dispatch(initSocketResponse(response));

  };
}

export function toggleRequest(){
  return{
    type:TOGGLE_REQUEST,

  };
}
export function toggleResponse(response){
  return{
    type:TOGGLE_RESPONSE,
    toggle:response
  };
}
export function toggleFail(error){
  return{
    type:TOGGLE_FAIL,
    toggle:error
  };
}

export function homeRequest(){
  return{
    type:HOME_REQUEST,
  };
}
export function homeResponse(response){
  return{
    type:HOME_RESPONSE,
    home:response
  };
}
export function homeFail(error){
  return{
    type:HOME_FAIL,
    home:error
  };
}

export function compitRequest(){
  return{
    type:COMPIT_REQUEST,
  };
}
export function compitResponse(response){
  return{
    type:COMPIT_RESPONSE,
    compit:response
  };
}
export function compitFail(error){
  return{
    type:COMPIT_FAIL,
    compit:error
  };
}


export function measureRequest(){
  return{
    type:MEASURE_REQUEST,
  };
}
export function measureResponse(){
  return{
    type:MEASURE_RESPONSE,
  };
}
export function measureFail(){
  return{
    type:MEASURE_FAIL,
  };
}
export function measureaction(sensor){
      if (sensor == 0){
          let error = "failed to meausure ( measuraction)";
          return dispatch => {dispatch(measureFail(error));};
      }
      return dispatch => {
          dispatch(measureRequest(sensor));
      };
  }
