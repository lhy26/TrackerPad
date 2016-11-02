export const TWO_SIDE_MEASUREMENT_REQUEST='TWO_SIDE_MEASUREMENT_REQUEST'
export const TWO_SIDE_MEASUREMENT_SUCCESSFUL='TWO_SIDE_MEASUREMENT_SUCCESSFUL'
export const TWO_SIDE_MEASUREMENT_FAIL = 'TWO_SIDE_MEASUREMENT_FAIL'

/**
 *actioncreator for the trackerHandleActiveSensorChange() method
 *action will be fired as request
 * @param
 */
export function twoSideMeasurementRequest(){
 console.log ('ich bin hier bei bSCheckRequest')
 return{
    type:TWO_SIDE_MEASUREMENT_REQUEST,
 };
}

/**
*actioncreator for the trackerHandleActiveSensorChange() method
*action will be fired as response
* @param {string} response - might be the response from the middleware
*/
export function twoSideMeasurementSuccessful(response){
  console.log ('ich bin hier bei twoSideMeasurementSuccessful')
  console.log(response)
  return{
    type:TWO_SIDE_MEASUREMENT_SUCCESSFUL,
    response
  };
}

/**
*actioncreator for the trackerHandleActiveSensorChange() method.
*action will be fired if the sensorChange fails.
* @param {string} error
*/
export function twoSideMeasurementFail(error){
 console.log ('ich bin hier bei twoSideMeasurementFail')
 return{
    type:TWO_SIDE_MEASUREMENT_FAIL,
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
export function twoSideMeasurement(isConnected){
console.log ('ich bin hier bei BSCheck FUNKTION')
  if (isConnected == false){
      let error = "Puh, that shouldnt happened, good luck,you are f*****";
      return dispatch => {dispatch(twoSideMeasurementFail(error));};
  }
  return dispatch => {
      dispatch(twoSideMeasurementRequest());
  };
}
