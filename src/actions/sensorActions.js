export const SET_SENSOR = 'SET_SENSOR'

export const CONNECT_SENSOR_REQUEST='CONNECT_SENSOR_REQUEST'
export const CONNECT_SENSOR_SUCCESSFUL='CONNECT_SENSOR_SUCCESSFUL'
export const CONNECT_SENSOR_FAIL = 'CONNECT_SENSOR_FAIL'

/**
 *actioncreator for the Websocket
 * @param {string} name
 */
export function setSensor(name){
  console.log ('ich bin hier bei SET_SENSOR ACTIONS')
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
