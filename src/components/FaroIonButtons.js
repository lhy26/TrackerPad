import React from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';
import {connect} from "react-redux";
import {connectSensor, disconnectSensor, measureaction} from '../actions/sensorActions'
import {compIt} from '../logic/TrackerCommands'
import {toggle} from '../logic/TrackerCommands'
import {home} from '../logic/TrackerCommands'


const mapStateToProps = state => {
    return{
      //store variable -> syntax x = store.x
    };
};

const mapDispatchToProps = dispatch => {
    return{
        onConnectSensorRequest: () => dispatch(connectSensor()),
    };
};

/**
 *
 */
@connect(mapStateToProps, mapDispatchToProps)
export default class FaroIonButtons extends React.Component{

  	constructor(props) {
    	super(props);
   	}

	render() {
	    return (
	    	<ButtonGroup vertical>
	   			<Button onClick={() => this.props.onConnectSensorRequest()}>connect</Button>
	   			<Button onClick={() => this.props.onDisConnectSensorRequest()}>disconnect</Button>
	   			<Button onClick={() => this.props.onMeasureRequest()}>measure</Button>
	   			<Button onClick={() => toggle()}>toggle</Button>
	   			<Button onClick={() => home()}>home</Button>
          <Button onClick={() => compIt()}>compIt</Button>
	   		</ButtonGroup>
    	);
  	}

}
