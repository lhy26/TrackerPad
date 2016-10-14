import {chooseMeasurementDevice} from '../logic/TrackerCommands'
import {connectSensorRequest,connectSensorSuccessful,connectSensorFail,
        measureActionRequest,measureActionSuccessful,measureActionFail,
        disConnectSensorRequest,disConnectSensorSuccessful,disConnectSensorFail,
        toggleSensorRequest,toggleSensorSuccessful,toggleSensorFail,
        homeActionRequest,homeActionSuccessful,homeActionFail,
        compItActionRequest,compItActionSuccessful,compItActionFail
       } from '../actions/sensorActions';
import {
     CONNECT_SENSOR_REQUEST,
     CONNECT_SENSOR_SUCCESSFUL,
     CONNECT_SENSOR_FAIL,

     DISCONNECT_SENSOR_REQUEST,
     DISCONNECT_SENSOR_SUCCESSFUL,
     DISCONNECT_SENSOR_FAIL,

     SET_SENSOR,

     MEASURE_ACTION_REQUEST,
     MEASURE_ACTION_SUCCESSFUL,
     MEASURE_ACTION_FAIL,

     TOGGLE_SENSOR_REQUEST,
     TOGGLE_SENSOR_SUCCESSFUL,
     TOGGLE_SENSOR_FAIL,

     HOME_ACTION_REQUEST,
     HOME_ACTION_SUCCESSFUL,
     HOME_ACTION_FAIL,

     COMPIT_ACTION_REQUEST,
     COMPIT_ACTION_SUCCESSFUL,
     COMPIT_ACTION_FAIL


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

     //if there is a connect function, there must also be a disconnect ...
     console.log("onmessage disconnect");
     }else if (activeCmd.type == 'disconnect' && activeCmd.id == response.id){
       if(response.result.successful){
         store.dispatch(disConnectSensorSuccessful(response));
         return;
       }else{
         store.dispatch(disConnectSensorFail(response));
         return;
       }

     //Block which handle´s the Measure Button Response
     }else if (activeCmd.type == 'measure' && activeCmd.id == response.id){
       console.log('onmessage measure')
       if(response.result.successful){
         store.dispatch(measureActionSuccessful(response));
         return;
       }else{
         store.dispatch(measureActionFail(response));
         return;
       }
       //Block which handle´s the Toggle Sight Button Response
     }else if (activeCmd.type == 'doSensorAction' && activeCmd.id == response.id){
         console.log('onmessage toggle')
         if(response.result.successful){
           store.dispatch(toggleSensorSuccessful(response));
           return;
         }else{
           store.dispatch(toggleSensorFail(response));
           return;
         }
        //Block wich handle´s the Home Butto Response
     }else if (activeCmd.type == 'doSensorAction' && activeCmd.id == response.id){
            console.log('onmessage home')
            if(response.result.successful){
              store.dispatch(HomeActionSuccessful(response));
              return;
            }else{
              store.dispatch(HomeActionFail(response));
              return;
            }
    //Block wich handle´s the CompIt Butto Response
     }else if (activeCmd.type == 'doSensorAction' && activeCmd.id == response.id){
             console.log('onmessage compIt')
             if(response.result.successful){
               store.dispatch(compItActionSuccessful(response));
               return;
             }else{
               store.dispatch(compItActionFail(response));
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
          chooseMeasurementDevice(action.newActiveSensor , websocket);
            break;
        }
        case MEASURE_ACTION_REQUEST: {
          console.log('MW MEASURE_ACTION_REQUEST')
          measure();
            break;
        }
        case TOGGLE_SENSOR_REQUEST: {
          console.log('MW TOGGLE_SENSOR_REQUEST')
          toggle();
            break;
        }
        case HOME_ACTION_REQUEST: {
          console.log('MW HOME_ACTION_REQUEST')
          home();
            break;
        }
        case COMPIT_ACTION_REQUEST: {
          console.log('MW COMPIT_ACTION_REQUEST')
          compIt();
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
function connect(){
  //set up script variables
  activeCmd.id = activeCmd.id+1; //sum up 1 to the local variable idCount
  activeCmd.type = "connect"; //set the active Command Type (activeCmd.type) to connect
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
function disconnect(){
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
function writeToScreen(message){

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
function measure(){

  //set up script variables
  activeCmd.id = activeCmd.id+1; //sum up 1 to the local variable idCount
  activeCmd.type = "measure"; //set the active Command Type (activeCmd.type)
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
function toggle(){

  //set up script variables
  activeCmd.id = activeCmd.id+1; //sum up 1 to the local variable idCount
  activeCmd.type = "doSensorAction"; //set the active Command Type (activeCmd.type)
  let  message = JSON.stringify({
                "jsonrpc": "2.0",
                "id": activeCmd.id,
                "method": "doSensorAction",
                "params": {"name": "toggleSightOrientation", "params":[]}
              })
  writeToScreen('SENT: ');
  writeToScreen(message);
  websocket.send(message);
}

function home(){
  //set up script variables
  activeCmd.id = activeCmd.id+1; //sum up 1 to the local variable idCount
  activeCmd.type = "doSensorAction"; //set the active Command Type (activeCmd.type)
  let  message = JSON.stringify({
                 "jsonrpc": "2.0",
                 "id": activeCmd.id,
                 "method": "doSensorAction",
                 "params": {"name": "home", "params":[]}
               })
   writeToScreen('SENT: ');
   writeToScreen(message);
   websocket.send(message);
 }

function compIt(){
  //set up script variables
  activeCmd.id = activeCmd.id+1; //sum up 1 to the local variable idCount
  activeCmd.type = "doSensorAction"; //set the active Command Type (activeCmd.type)
  let  message = JSON.stringify({
                  "jsonrpc": "2.0",
                  "id": activeCmd.id,
                  "method": "doSensorAction",
                  "params": {"name": "compIt", "params":[]}
                })
    writeToScreen('SENT: ');
    writeToScreen(message);
    websocket.send(message);
  }
