export const BS_CHECK_REQUEST='BS_CHECK_REQUEST'
export const BS_CHECK_SUCCESSFULL='BS_CHECK_SUCCESSFULL'
export const BS_CHECK_FAIL = 'BS_CHECK_FAIL'

/**
 *actioncreator for the trackerHandleActiveSensorChange() method
 *action will be fired as request
 * @param
 */
export function bSCheckRequest(){
 console.log ('ich bin hier bei sensorChangeRequest')
 return{
    type:BS_CHECK_REQUEST,
 };
}

/**
*actioncreator for the trackerHandleActiveSensorChange() method
*action will be fired as response
* @param {string} response - might be the response from the middleware
*/
export function bSCheckSuccessful(response){
  console.log ('ich bin hier bei BSCheckSuccessful')
  console.log(response)
  return{
    type:BS_CHECK_SUCCESSFULL,
    response
  };
}

/**
*actioncreator for the trackerHandleActiveSensorChange() method.
*action will be fired if the sensorChange fails.
* @param {string} error
*/
export function bSCheckFail(error){
 console.log ('ich bin hier bei CBSCheckFail')
 return{
    type:BS_CHECK_FAIL,
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
export function BSCheck(trackerConnected){
  console.log ('ich bin hier bei handleActiveSensorChange FUNKTION')
    if (isConnected == false){
        let error = "Tracker not connected. Please connect first ffs";
        return dispatch => {dispatch(bSCheckFail(error));};
    }
        return dispatch => {dispatch(bSCheckRequest(response));
    };
}
