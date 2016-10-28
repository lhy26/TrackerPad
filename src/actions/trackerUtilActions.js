export const BS_CHECK_REQUEST='BS_CHECK_REQUEST'
export const BS_CHECK_SUCCESSFULL='BS_CHECK_SUCCESSFULL'
export const BS_CHECK_FAIL = 'BS_CHECK_FAIL'

import {measureAction,measureActionRequest,measureActionResponse,measureActionFail} from './sensorActions'
/**
 *actioncreator for the trackerHandleActiveSensorChange() method
 *action will be fired as request
 * @param
 */
export function bSCheckRequest(){
 console.log ('ich bin hier bei bSCheckRequest')
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
/*export function BSCheck(){
  console.log ('bs check funktion ganz weit unten in der middleware')
      console.log ('noch einmal weiter unten')
      return fetchData().then(
      measure => dispatch(measureActionRequest()),
      error =>dispatch(measureActionFail())
        )

    function fetchData(){
      console.log ('wird fetch data aufgerufen???')
      return fetch()
    }

    console.log ('bs check funktion ganz weit unten in der middleware')
    activeCmd.type = "BSCheck";
  }*/
