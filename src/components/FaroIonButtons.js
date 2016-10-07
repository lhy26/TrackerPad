import React from 'react';
import { Button,  ButtonGroup } from 'react-bootstrap';
import { connect } from "react-redux";
import {connectSensor, disconnectSensor, measureaction} from '../actions/sensorActions'
import {compIt} from '../logic/TrackerCommands'
import {toggle} from '../logic/TrackerCommands'
import {home} from '../logic/TrackerCommands'


const mapStateToProps = state => {
    return{
      // Hier hole ich mir die einzelnen states
    //  IsConnected:
    };
};
const mapDispatchToProps = dispatch => {
    return{
        onConnectSensorRequest: () => dispatch(connectSensor()),
        onDisConnectSensorRequest: () => dispatch(disconnectSensor()),
        onMeasureRequest:() => dispatch(measureaction())
    };
};

/**
 *
 */
@connect(mapStateToProps, mapDispatchToProps)
export default class FaroIonButtons extends React.Component{

  	constructor(props) {
    	super(props);
//  	this.connectSensorRequest = connect.bind(this);
    //	this.disconnect = disconnect.bind(this);//
   	}
     handleConnectChange(e){
    //   if(sensorServiceConnected == true){
          this.setState({isConnected: true});
          this.props.onConnectSensorRequest();
          //chooseMeasurementDevice(e.target.value);
        //}
    }

	render() {
	    return (
	    	<ButtonGroup vertical>
	   			<Button onClick={() => this.props.onConnectSensorRequest(this.props.isConnected)}>connect</Button>
	   			<Button onClick={() => this.props.onDisConnectSensorRequest(this.props.activeSensor)}>disconnect</Button>
	   			<Button onClick={() => this.props.onMeasureRequest(this.props.activeSensor)}>measure</Button>
	   			<Button onClick={() => toggle()}>toggle</Button>
	   			<Button onClick={() => home()}>home</Button>
          <Button onClick={() => compIt()}>compIt</Button>
	   		</ButtonGroup>
    	);
  	}
}
