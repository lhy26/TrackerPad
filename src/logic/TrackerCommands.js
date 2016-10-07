 var wsUri = "ws://127.0.0.1:8090";
 export var activeSensor = "";
 export var idCount = 0;
 export var websocket;
 export var sensorServiceConnected = false;
 export var pointList = [];

export function echo(name)
{
    writeToScreen(name);
}

  export function init()
  {
    console.log("init aufgerufen");
    testWebSocket();
  }

  export function testWebSocket()
  {
    console.log("websocket aufgerufen");
    websocket = new WebSocket(wsUri);
    websocket.onopen = function(evt) { onOpen(evt) };
    websocket.onclose = function(evt) { onClose(evt) };
    websocket.onmessage = function(evt) { onMessage(evt) };
    websocket.onerror = function(evt) { onError(evt) };
  }

  export function onOpen(evt)
  {
    sensorServiceConnected = true;
    writeToScreen("CONNECTED");
  }

  export function onClose(evt)
  {
    writeToScreen("DISCONNECTED");
  }

  export function onMessage(evt)
  {
    var p = {
      x: 0.0,
      y: 0.0,
      z: 0.0
    };
    //parse evt.data to point
    pointList.push(p);

    writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data + '</span>');
  }

  /**
  *
  *
  */
  export function onError(evt)
  {
    writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
  }


 export  function doSend()
  {
    input = document.getElementById("input");
    var message = input.value;
  //  outputMsg.appendChild("SENTttttttttttttt");
    writeToScreen('SENT: ');
  	writeToScreen(message);
    websocket.send(message);
  }

  export function chooseMeasurementDevice(sensor,socket)
  {
    websocket = socket;
    if(sensor == 'FaroIon'){
      chooseFaroIon();
    }else if (sensor == 'FaroVantage') {
      chooseFaroVantage();
    }else if (sensor == 'LeicaAt40x') {
      chooseLeica();
    }
  }

  export function doFaceCheck(){
    console.log("doFaceCheck aufgerufen")
    measure();

    console.log("1 mal gemessen")

  //  writeToScreen(p1);
  //  websocket.send(p1);
  //  toggle
  //  console.log("Seitegewechselt")
  //  p2 = measure();
  //  console.log("2mal gemessen")
  //diff = fitting.calcTwoFaceCheck(p1,p2)
  //  console.log(" gerechnet")
    //return diff
  //  console.log("diff zurückgegeben")
  //  writeToScreen(message);
  //  websocket.send(message);


  }

  function chooseLeica()
  {
	console.log("chooseLeica ufgerufen");
    idCount += 1
    const message = JSON.stringify({
                "jsonrpc": "2.0",
                "id": idCount,
                "method": "getSensor",
                "params": {
                  "name": "LeicaLaserTracker",
                  "parameter": {
                        "sensorParameter": [{
                        "name": "connection",
                        "properties": {
                          "ip": "192.168.0.1",
                          "port": 700
                        }
                      }, {
                        "name": "probe",
                        "properties": {
                          "activeProbe": "RRR15",
                          "probes": ["RRR15",
                            "RRR05",
                            "RRR0875",
                            "glass prism"
                          ]
                        }
                      }, {
                        "name": "measureMode",
                        "properties": {
                          "activeMeasureMode": "fast",
                          "MeasureModes": ["fast",
                            "standard",
                            "precise",
                            "stationary"
                          ]
                        }
                      }]
                  }
                }
              })
    writeToScreen('SENT: ');
    writeToScreen(message);
    websocket.send(message);
  }

  function chooseFaroIon()
  {

    idCount += 1
    const message = JSON.stringify({
                "jsonrpc": "2.0",
                "id": idCount,
                "method": "getSensor",
                "params": {
                  "name": "FaroLaserTracker",
                  "parameter": {
                         "sensorParameter": [{
                              "name": "connection",
                              "properties": {
                                  "trackerType": "ion",
                                  "ip": "192.168.168.241"
                              },
                              "trackerTypes": ["ion",
                                               "vantage"
                              ]
                          }, {
                              "name": "probe",
                              "properties": {
                                  "activeProbe": "1.5",
                                  "probes": ["0.5",
                                             "7/8",
                                             "1.5"]
                              }
                          }, {
                              "name": "distanceMode",
                              "properties": {
                                  "activeDistanceMode": "ADMOnly",
                                  "distanceModes": ["ADMOnly",
                                                    "InterferometerOnly",
                                                    "InterferometerSetByADM"]
                              }
                          }]
                  }
                }
              }, undefined, 4)

    websocket.send(message);
    writeToScreen('SENT: ');
    writeToScreen(message);

  }

  function chooseFaroVantage()
  {
    idCount += 1
    const message = JSON.stringify({
                "jsonrpc": "2.0",
                "id": idCount,
                "method": "getSensor",
                "params": {
                  "name": "FaroLaserTracker",
                  "parameter": {
                         "sensorParameter": [{
                              "name": "connection",
                              "properties": {
                                  "trackerType": "vantage",
                                  "ip": "128.128.128.100"
                              },
                              "trackerTypes": ["ion",
                                               "vantage"
                              ]
                          }, {
                              "name": "probe",
                              "properties": {
                                  "activeProbe": "1.5",
                                  "probes": ["0.5",
                                             "7/8",
                                             "1.5"]
                              }
                          }, {
                              "name": "distanceMode",
                              "properties": {
                                  "activeDistanceMode": "ADMOnly",
                                  "distanceModes": ["ADMOnly",
                                                    "InterferometerOnly",
                                                    "InterferometerSetByADM"]
                              }
                          }]
                  }
                }
              }, undefined, 4)
    writeToScreen('SENT: ');
    writeToScreen(message);
    websocket.send(message);
    //document.body.appendChild(document.createElement('pre')).innerHTML = message;
  }
/*
  export function connect()
  {
    console.log("connect aufgerufen");
    let message = JSON.stringify({
                  "jsonrpc": "2.0",
                  "id": idCount,
                  "method": "connectSensor",
                  "params": {}
                }, undefined, 4)
    writeToScreen('SENT: ');
    writeToScreen(message);
    websocket.send(message);
  }
*/
/*
  export function disconnect()
  {
  	console.log("disconnect aufgerufen");

  //  let activeSensor = "";
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

  export function measure()
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
*/
 export  function compIt()
  {

    idCount += 1
  let  message = JSON.stringify({
                  "jsonrpc": "2.0",
                  "id": idCount,
                  "method": "doSensorAction",
                  "params": {"name": "compIt", "params":[]}
                })
    writeToScreen('SENT: ');
    writeToScreen(message);
    websocket.send(message);
  }

 export  function home()
  {
      idCount += 1
  let  message = JSON.stringify({
                  "jsonrpc": "2.0",
                  "id": idCount,
                  "method": "doSensorAction",
                  "params": {"name": "home", "params":[]}
                })
    writeToScreen('SENT: ');
    writeToScreen(message);
    websocket.send(message);
  }

  export function toggle()
  {

    idCount += 1
  let  message = JSON.stringify({
                  "jsonrpc": "2.0",
                  "id": idCount,
                  "method": "doSensorAction",
                  "params": {"name": "toggleSightOrientation", "params":[]}
                })
    writeToScreen('SENT: ');
    writeToScreen(message);
    websocket.send(message);
  }

  export function initializeLeica()
  {

    idCount += 1
  let  message = JSON.stringify({
                  "jsonrpc": "2.0",
                  "id": idCount,
                  "method": "doSensorAction",
                  "params": {"name": "initialize", "params":[]}
                })

    var messageFormatted = JSON.stringify(JSON.parse(message),null,2);
    writeToScreen('SENT: ');
    writeToScreen(messageFormatted);
    websocket.send(message);
  }

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

  //window.addEventListener("load", init, false);
