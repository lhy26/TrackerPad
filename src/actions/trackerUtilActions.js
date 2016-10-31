export const CHANGE_MEASUREMENT_CONFIG_REQUEST='CHANGE_MEASUREMENT_CONFIG_REQUEST'
export const CHANGE_MEASUREMENT_CONFIG_SUCCESSFULL='CHANGE_MEASUREMENT_CONFIG_SUCCESSFULL'
export const CHANGE_MEASUREMENT_CONFIG_FAIL = 'CHANGE_MEASUREMENT_CONFIG_FAIL'

/**
 *actioncreator for the trackerHandleActiveSensorChange() method
 *action will be fired as request
 * @param
 */
export function changeMeasurementConfigRequest(){
 console.log ('ich bin hier bei bSCheckRequest')
 return{
    type:CHANGE_MEASUREMENT_CONFIG_REQUEST,
 };
}

/**
*actioncreator for the trackerHandleActiveSensorChange() method
*action will be fired as response
* @param {string} response - might be the response from the middleware
*/
export function changeMeasurementConfigSuccessful(response){
  console.log ('ich bin hier bei BSCheckSuccessful')
  console.log(response)
  return{
    type:CHANGE_MEASUREMENT_CONFIG_SUCCESSFULL,
    response
  };
}

/**
*actioncreator for the trackerHandleActiveSensorChange() method.
*action will be fired if the sensorChange fails.
* @param {string} error
*/
export function changeMeasurementConfigFail(error){
 console.log ('ich bin hier bei CBSCheckFail')
 return{
    type:CHANGE_MEASUREMENT_CONFIG_FAIL,
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
export function changeMeasurementConfig(isConnected){
console.log ('ich bin hier bei BSCheck FUNKTION')
  if (isConnected == false){
      let error = "Puh, that shouldnt happened, good luck,you are f*****";
      return dispatch => {dispatch(changeMeasurementConfigFail(error));};
  }
  return dispatch => {
      dispatch(changeMeasurementConfigRequest());
  };
}
