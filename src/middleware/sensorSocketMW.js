import {chooseMeasurementDevice} from '../logic/TrackerCommands'
import {connectSensorRequest,connectSensorSuccessful,connectSensorFail,
        measureActionRequest,measureActionSuccessful,measureActionFail,
        connectSensor } from '../actions/sensorActions';
import {
     CONNECT_SENSOR_REQUEST,
     CONNECT_SENSOR_SUCCESSFUL,
     CONNECT_SENSOR_FAIL,
     INIT_SOCKET_REQUEST,
     INIT_SOCKET_RESPONSE,
     INIT_SOCKET_FAIL,
     DISCONNECT_SENSOR_REQUEST,
     SET_SENSOR,
     MEASURE_ACTION_REQUEST,
     MEASURE_ACTION_SUCCESSFUL,
     MEASURE_ACTION_FAIL
} from '../actions/sensorActions';

//script variables
let activeCmd = {id:0, type:''}
let websocket ;

/**
 *Initialize the connection between webservice(websocket) and
 *trackerpad if the html page refreshes
 *
 * @param evt
 */
export const initWebSocket = (store) => {

   //as soon as the connection between Trackerpad and webservice is open
   // the function OnOpen will be triggered
   // onOpen successful -> you can communicate with the service
   const onOpen = (evt) =>
    {
      console.log("HIER BEI ONOPEN, Mit Webservice verbunden");
    }

   //if the onOpen not successful -> onClose will be  triggered
   const onClose = (evt)=>
    {
    console.log("HIER BEI ONCLOSE");
    }

   //if there is an error during the connection -> onErro will be triggered
   const onError = (evt)=>
    {
      writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
    }

   //dispatch specific action to trigger update
   const onMessage = (evt) =>{
     var response = JSON.parse(evt.data);
     console.log(response);
     console.log("onmessage aufgerufen");
     //checks if Cmd.Type is right and if evt.data.id matchs with activeCmd.id
     if(activeCmd.type == 'connect' && activeCmd.id == response.id){
       console.log("onmessage connect");
       if(response.result.successful){
         store.dispatch(connectSensorSuccessful(response));
         return;
       }else{
         store.dispatch(connectSensorFail(response));
         return;
       }
     console.log("onmessage disconnect");
     }else if (activeCmd.type == 'disconnect' && activeCmd.id == response.id){

     }else if (activeCmd.type == 'measure' && activeCmd.id == response.id){
       console.log('onmessage measure')
       if(response.result.successful){
         store.dispatch(measureActionSuccessful(response));
         return;
       }else{
         store.dispatch(measureActionFail(response));
         return;
       }
     }else{
      console.log("onmessage aufgerufen4");
     }
   }

     /* socket Connection callbacks
     set local const to functions with the value 'evt'*/
     websocket = new WebSocket("ws://127.0.0.1:8090")
     websocket.onopen = function(evt) { onOpen(evt) };
     websocket.onclose = function(evt) { onClose(evt) };
     websocket.onmessage = function(evt) { onMessage(evt) };
     websocket.onerror = function(evt) { onError(evt) };
}

/**
 * Middleware that reacts on specific actions and sends sensor tasks to the
 * backend via websocket connection.
 * @param store
 */
export  const sensorSocketMiddleware = store => next => action => {

    //init local var
    const result = next(action);

    //react on specific actions
    switch(action.type){
        case CONNECT_SENSOR_REQUEST: {
          console.log('jetzt bin ich beim middleware gedöns')
          connect();
          break;
        }
        case DISCONNECT_SENSOR_REQUEST: {
            console.log('jetzt bin ich beim middleware gedöns disconnect MW')
            disconnect();
            break;
        }
        case SET_SENSOR: {
          console.log('MW SET_SENSOR')
          chooseMeasurementDevice(action.newActiveSensor , websocket);
            break;
        }
        case MEASURE_ACTION_REQUEST: {
          console.log('MW MEASURE_ACTION_REQUEST')
          measure();
            break;
        }

    }

    return result;

};

/**
 * Sends parameters(a RequestObject) to the webservice which
 *  establish/enable a connection between trackerpad and tracker
 * @param
 */
function connect()
{

  //set up script variables
  activeCmd.id = activeCmd.id+1; //sum up 1 to the local variable idCount
  activeCmd.type = "connect"; //set the active Command Type (activeCmd.type) to connect
  console.log("connect aufgerufen");

  //build up request object
  let message = JSON.stringify({
                "jsonrpc": "2.0",
                "id": activeCmd.id,
                "method": "connectSensor",
                "params": {}
              }, undefined, 4)

  //fire methods and websocket
  writeToScreen('SENT: ');
  writeToScreen(message);
  websocket.send(message);
}

/**
 *Sends Parameters(a RequestObject) to the webservice and middleware
 *which disabale the connection between trackerpad and tracker
 * @param
 */
export function disconnect()
{
  console.log("disconnect aufgerufen");
  //set up script variables
  activeCmd.id = activeCmd.id+1; //sum up 1 to the local variable idCount
  activeCmd.type = "disconnect"; //set the active Command Type (activeCmd.type) to connect

  //build up request object
  let message = JSON.stringify({
                "jsonrpc": "2.0",
                "id": activeCmd.id,
                "method": "disconnectSensor",
                "params": {}
              })
  //fire methods and websocket
  writeToScreen('SENT: ');
  writeToScreen(message);
  websocket.send(message);
}

/**
*
*@param {string} message - string to display on screen
*/
function writeToScreen(message)
{
 const output = document.getElementById("output_area");
 var pre = document.createElement("p");
 pre.style.wordWrap = "break-word";
 pre.innerHTML = message;
 output.appendChild(pre);
}

/**
 *Sends Request(Object) to the webservice which tell the "backend" the Tracker
 * shall measure(Azimuth,Zenith,Distance)
 * @param
 */
function measure()
{
  //set up script variables
  activeCmd.id = activeCmd.id+1; //sum up 1 to the local variable idCount
  activeCmd.type = "measure"; //set the active Command Type (activeCmd.type) to connect

  let  message = JSON.stringify({
                "jsonrpc": "2.0",
                "id": activeCmd.id,
                "method": "measure",
                "params": {}
              })

  //fire methods and websocket
  writeToScreen('SENT: ');
  writeToScreen(message);
  websocket.send(message);

}
