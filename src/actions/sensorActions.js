export const SET_SENSOR = 'SET_SENSOR'

export const CONNECT_SENSOR_REQUEST='CONNECT_SENSOR_REQUEST'
export const CONNECT_SENSOR_SUCCESSFUL='CONNECT_SENSOR_SUCCESSFUL'
export const CONNECT_SENSOR_FAIL = 'CONNECT_SENSOR_FAIL'

export const MEASURE_ACTION_REQUEST = 'MEASURE_ACTION_REQUEST'
export const MEASURE_ACTION_SUCCESSFUL ='MEASURE_ACTION_SUCCESSFUL'
export const MEASURE_ACTION_FAIL = 'MEASURE_ACTION_FAIL'

export const DISCONNECT_SENSOR_REQUEST = 'DISCONNECT_SENSOR_REQUEST'
export const DISCONNECT_SENSOR_SUCCESSFUL ='DISCONNECT_SENSOR_SUCCESSFUL'
export const DISCONNECT_SENSOR_FAIL = 'DISCONNECT_SENSOR_FAIL'

export const TOGGLE_SENSOR_REQUEST = 'TOGGLE_SENSOR_REQUEST'
export const TOGGLE_SENSOR_SUCCESSFUL = 'TOGGLE_SENSOR_SUCCESSFUL'
export const TOGGLE_SENSOR_FAIL = 'TOGGLE_SENSOR_FAIL'

export const HOME_ACTION_REQUEST = 'HOME_ACTION_REQUEST'
export const HOME_ACTION_SUCCESSFUL ='HOME_ACTION_SUCCESSFUL'
export const HOME_ACTION_FAIL = 'HOME_ACTION_FAIL'

export const COMPIT_ACTION_REQUEST ='COMPIT_ACTION_REQUEST'
export const COMPIT_ACTION_SUCCESSFUL ='COMPIT_ACTION_SUCCESSFUL'
export const COMPIT_ACTION_FAIL = 'COMPIT_ACTION_FAIL'

/**
 *actioncreator for the Websocket
 * @param {string} name
 */
export function setSensor(name){
  return{
    type:SET_SENSOR,
    newActiveSensor: name
  };
}

/**
 *actioncreator for the connectSensor() method
 *action will be fired as request
 * @param
 */
export function connectSensorRequest(){
 console.log ('ich bin hier bei Connect sensor request')
 return{
    type:CONNECT_SENSOR_REQUEST,
 };
}

/**
*actioncreator for the connectSensor() method
*action will be fired as response
* @param {string} response - might be the response from the middleware
*/
export function connectSensorSuccessful(response){
  console.log ('ich bin hier bei Connect sensor succsessful /actions')
  console.log(response)
  return{
    type:CONNECT_SENSOR_SUCCESSFUL,
    response
  };
}

/**
*actioncreator for the connectSensor() method.
*action will be fired if the connection fails.
* @param {string} error
*/
export function connectSensorFail(error){
 console.log ('ich bin hier bei Connect sensor Failure')
 return{
    type:CONNECT_SENSOR_FAIL,
    error
 };
}

/**
* Checks if a sensor(Tracker) is already choosen,
* then dispatches an action from above
* @param {string} sensor
* @param {string} error
* @param {string} response
*/
export function connectSensor(sensor){
  console.log ('ich bin hier bei Connect sensor FUNKTION')
    if (sensor == 'none'){
        let error = "no Sensor chosen";
        return dispatch => {dispatch(connectSensorFail(error));};
    }
    return dispatch => {
        dispatch(connectSensorRequest());
    };
}

/**
* Checks if a sensor(Tracker) is already connected,
* then dispatches an action from below
* @param {string} sensor
* @param {string} error
* @param {string} response
*/
export function measureAction(isConnected){
  console.log ('ich bin hier bei Measuraction FUNKTION')
    if ( isConnected == 'false'){
        let error = "Sensor not connected";
        return dispatch => {dispatch(measureActionFail(error));};
    }
    return dispatch => {
        dispatch(measureActionRequest());
    };
}

/**
 *actioncreator for the measureActionRequest() method
 *action will be fired as request
 * @param
 */
export function measureActionRequest(){
 console.log ('ich bin hier bei measur Action request')
 return{
    type:MEASURE_ACTION_REQUEST,
 };
}

/**
*actioncreator for the measureAction() method
*action will be fired as response if the action is successful
* @param {string} response - might be the response from the middleware
*/
export function measureActionSuccessful(response){
  console.log ('measureActionSuccessful')
  console.log(response)
  return{
    type:MEASURE_ACTION_SUCCESSFUL,
    response
  };
}

/**
*actioncreator for the measureAction() method.
*action will be fired if the measurement fails.
* @param {string} error
*/
export function measureActionFail(error){
 console.log ('ich bin hier bei measurAction Failure')
 return{
    type:MEASURE_ACTION_FAIL,
    error
 };
}

/**
 *actioncreator for the disConnectSensor() method
 *action will be fired as request
 * @param
 */
export function disConnectSensorRequest(){
 console.log ('ich bin hier bei disConnect sensor request')
 return{
    type:DISCONNECT_SENSOR_REQUEST,
 };
}

/**
*actioncreator for the disConnectSensor() method
*action will be fired as response
* @param {string} response - might be the response from the middleware
*/
export function disConnectSensorSuccessful(response){
  console.log ('ich bin hier bei DisConnect sensor ')
  console.log(response)
  return{
    type:DISCONNECT_SENSOR_SUCCESSFUL,
    response
  };
}

/**
*actioncreator for the disConnectSensor() method.
*action will be fired if the disconnect fails(which is...strange).
* @param {string} error
*/
export function disConnectSensorFail(error){
 console.log ('ich bin hier bei DisConnect sensor Failure')
 return{
    type:DISCONNECT_SENSOR_FAIL,
    error
 };
}

/**
* Checks if a sensor(Tracker) is already choosen,
* then dispatches an action from above
* @param {string} sensor
* @param {string} error
* @param {string} response
*/
export function disConnectSensor(sensor){
  console.log ('ich bin hier bei DisConnect sensor FUNKTION')
    if (sensor == 'none'){
        let error = "no Sensor chosen";
        return dispatch => {dispatch(disConnectSensorFail(error));};
    }
    return dispatch => {
        dispatch(disConnectSensorRequest(sensor));
    };
}

export function toggleSensorRequest(){
 console.log ('ich bin hier bei TOGGLE request')
 return{
    type:TOGGLE_SENSOR_REQUEST,
 };
}

export function toggleSensorSuccessful(response){
  console.log ('ich bin hier bei Toggle succsessful sensor ')
  console.log(response)
  return{
    type:TOGGLE_SENSOR_SUCCESSFUL,
    response
  };
}

export function toggleSensorFail(error){
 console.log ('ich bin hier bei Toggle Sensor Failure')
 return{
    type:TOGGLE_SENSOR_FAIL,
    error
 };
}

export function toggleSensor(isConnected){
  console.log ('ich bin hier bei ToggleSensor FUNKTION')
    if ( isConnected == 'false'){
        let error = "no Sensor connected";
        return dispatch => {dispatch(toggleSensorFail(error));};
    }
    return dispatch => {
        dispatch(toggleSensorRequest());
    };
}

export function homeActionRequest(){
 console.log ('ich bin hier bei Home request')
 return{
    type:HOME_ACTION_REQUEST,
 };
}
export function homeActionSuccessful(response){
  console.log ('homeActionSuccessful')
  console.log(response)
  return{
    type:HOME_ACTION_SUCCESSFUL,
    response
  };
}
export function homeActionFail(error){
 console.log ('ich bin hier bei homeAction Failure')
 return{
    type:HOME_ACTION_FAIL,
    error
 };
}
export function homeAction(isConnected){
  console.log ('ich bin hier bei Measuraction FUNKTION')
    if ( isConnected == 'false'){
        let error = "Sensor not connected";
        return dispatch => {dispatch(homeActionFail(error));};
    }
    return dispatch => {
        dispatch(homeActionRequest());
    };
}

export function compItActionRequest(){
 console.log ('ich bin hier bei compItActionRequest')
 return{
    type:COMPIT_ACTION_REQUEST,
 };
}
export function compItActionSuccessful(response){
  console.log ('compItActionSuccessful')
  console.log(response)
  return{
    type:COMPIT_ACTION_SUCCESSFUL,
    response
  };
}
export function compItActionFail(error){
 console.log ('ich bin hier bei compIt Failure')
 return{
    type:COMPIT_ACTION_FAIL,
    error
 };
}
export function compItAction(isConnected){
  console.log ('ich bin hier bei compItAction FUNKTION')
    if ( isConnected == 'false'){
        let error = "Sensor not connected";
        return dispatch => {dispatch(compItActionFail(error));};
    }
    return dispatch => {
        dispatch(compItActionRequest());
    };
}
