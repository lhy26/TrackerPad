export const SENSOR_CHANGE_REQUEST='CONNECT_SENSOR_REQUEST'
export const SENSOR_CHANGE_SUCCESSFUL='CONNECT_SENSOR_SUCCESSFUL'
export const SENSOR_CHANGE_FAIL = 'CONNECT_SENSOR_FAIL'

/**
 *actioncreator for the trackerHandleActiveSensorChange() method
 *action will be fired as request
 * @param
 */
export function sensorChangeRequest(){
 console.log ('ich bin hier bei sensorChangeRequest')
 return{
    type:SENSOR_CHANGE_REQUEST,
 };
}

/**
*actioncreator for the trackerHandleActiveSensorChange() method
*action will be fired as response
* @param {string} response - might be the response from the middleware
*/
export function sensorChangeSuccessful(response){
  console.log ('ich bin hier bei sensorChangeSuccessful')
  console.log(response)
  return{
    type:SENSOR_CHANGE_SUCCESSFUL,
    response
  };
}

/**
*actioncreator for the trackerHandleActiveSensorChange() method.
*action will be fired if the sensorChange fails.
* @param {string} error
*/
export function sensorChangeFail(error){
 console.log ('ich bin hier bei Connect sensor Failure')
 return{
    type:SENSOR_CHANGE_FAIL,
    error
 };
}


/**
* hypotetically checks and handles an active sensor change
* then dispatches
* @param {string} tracker
* @param {string} error
* @param {string} response
*/
export function trackerHandleActiveSensorChange(trackerConnected){
  console.log ('ich bin hier bei handleActiveSensorChange FUNKTION')
    if (trackerConnected == true){
        let error = "Tracker already connected. Please disconnect first";
        return dispatch => {dispatch(sensorChangeFail(error));};
    }
        return dispatch => {dispatch(sensorChangeSuccessful(response));
    };
}
