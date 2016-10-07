import {
     MEASURE_REQUEST,
     CONNECT_SENSOR_REQUEST,
     CONNECT_SENSOR_RESPONSE,
     CONNECT_SENSOR_FAIL,
     INIT_SOCKET_REQUEST,
     INIT_SOCKET_RESPONSE,
     INIT_SOCKET_FAIL,
     DISCONNECT_SENSOR_REQUEST,
     SET_SENSOR
} from '../actions/sensorActions';
import { connectSensorRequest,connectSensorResponse,connectSensorFail,initSocketRequest,initSocketResponse,initSocketFail,initSocket,connectSensor } from '../actions/sensorActions';
import {  chooseMeasurementDevice} from '../logic/TrackerCommands'
let activeCmd = {id:0, type:''}
let websocket ;
var idCount = 0;
export function writeToScreen(message)
{
 //document.body.appendChild(document.createElement('output_area')).innerHTML = message;
 const output = document.getElementById("output_area");
 //  output.value += message + "\n";

 var pre = document.createElement("p");
 pre.style.wordWrap = "break-word";
 pre.innerHTML = message;
 output.appendChild(pre);
}



export const initWebSocket = store => {
   const onOpen = (evt) =>
    {
      //dispatch(actions.setsocketConnection(true));
      console.log("HIER BEI ONOPEN, Mit Webservice verbunden");
    }
   const onClose = (evt)=>
    {
    console.log("HIER BEI ONCLOSE");
    }
   const onError = (evt)=>
    {
      writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
    }

  const onMessage = (evt, store) =>{
    var msg = JSON.parse(evt.data);
    console.log("onmessage aufgerufen");
     //evt.data umwandeln in objekte für action
    // action abfeuern
     if(activeCmd.type == 'connect' && activeCmd.id == evt.data.id){
       console.log("onmessage aufgerufen2")
     return dispatch => dispatch(connectSensorResponse(evt.data));
       console.log("onmessage aufgerufen3");
    }
    else{
       console.log("onmessage aufgerufen4");
     return dispatch => dispatch(connectSensorFail(evt.data));
    }

   //HIER MUSS DAS EVENT "GEPARSED" werden
 console.log(evt)
 }
  //  socket Connection callbacks <-- diese nachricht wurde kopiert xD
  websocket = new WebSocket("ws://127.0.0.1:8090")
  websocket.onopen = function(evt) { onOpen(evt) };
  websocket.onclose = function(evt) { onClose(evt) };
  websocket.onmessage = function(evt) { onMessage(evt) };
  websocket.onerror = function(evt) { onError(evt) };


/*const onMessage = (ws,store) => evt => {
  //Parse the JSON message received on the websocket
  var msg = JSON.parse(evt.data);
  switch(msg.type) {
    case "CHAT_MESSAGE":
      //Dispatch an action that adds the received message to our state
      store.dispatch(actions.messageReceived(msg));
      break;
    default:
      console.log("Received unknown message type: '" + msg.type + "'");
      break;
  }
}*/

//connect web socket
/*var websocket;
websocket = new WebSocket("ws://127.0.0.1:8090");
websocket.onopen = function(evt) { onOpen(evt) };
websocket.onclose = function(evt) { onClose(evt) };
websocket.onmessage = function(evt) { onMessage(evt) };
websocket.onerror = function(evt) { onError(evt) };


*/
}

/**
 * Middleware that reacts on specific actions and sends sensor tasks to the backend via websocket connection.
 *
 * @param store
 */
export  const sensorSocketMiddleware = store => next => action => {

    const result = next(action);
  //react on specific actions
    switch(action.type){
        case CONNECT_SENSOR_REQUEST: {
          console.log('jetzt bin ich beim middleware gedöns')
          //connect();
          action.connectSensor , websocket
            //stompClient.send("/user/sensors/sensor/connect", {}, JSON.stringify(action.sensor));
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
        case MEASURE_REQUEST: {
          console.log('MW MEASURE_REQUEST')
          measure();
            break;
        }
        /*
        case COMPIT_REQUEST: {
          console.log('MW COMPIT_REQUEST')
          compIt();

            break;
        }
      */    case INIT_SOCKET_REQUEST: {
          console.log('MW INIT_SOCKET_REQUEST')



            break;
        }
      //  case INIT_SENSOR_REQUEST: {
            //stompClient.send("/user/sensors/sensor/initialize", {}, {});
      //      break;
        //}
    }

    return result;

};
//functions

function connect()
{
  activeCmd.id = idCount;
  activeCmd.type = "connect";
  console.log("connect aufgerufen");
  let message = JSON.stringify({
                "jsonrpc": "2.0",
                "id": idCount,
                "method": "connectSensor",
                "params": {}
              }, undefined, 4)
  websocket.send(message);
}
export function disconnect()
{
  console.log("disconnect aufgerufen");
  idCount += 1
  let message = JSON.stringify({
                "jsonrpc": "2.0",
                "id": idCount,
                "method": "disconnectSensor",
                "params": {}
              })
  writeToScreen('SENT: ');
  writeToScreen(message);
//  websocket = new WebSocket(wsUri);
  websocket.send(message);
}
 function writeToScreen(message)
{
 //document.body.appendChild(document.createElement('output_area')).innerHTML = message;
 const output = document.getElementById("output_area");
 //  output.value += message + "\n";

 var pre = document.createElement("p");
 pre.style.wordWrap = "break-word";
 pre.innerHTML = message;
 output.appendChild(pre);
}
function measure()
{
  idCount += 1
  let  message = JSON.stringify({
                "jsonrpc": "2.0",
                "id": idCount,
                "method": "measure",
                "params": {}
              })
  writeToScreen('SENT: ');
  writeToScreen(message);
  websocket.send(message);
}
