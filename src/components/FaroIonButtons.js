import React from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';
import {connect} from "react-redux";
import {connectSensor, disConnectSensor, measureAction} from '../actions/sensorActions'
import {compIt} from '../logic/TrackerCommands'
import {toggle} from '../logic/TrackerCommands'
import {home} from '../logic/TrackerCommands'

/**
 *dispatches the store´s states to property´s(so it can be used here)
 *
 */
const mapStateToProps = state => {
    return{
      //store variable -> syntax x = store.x
    };
};

/**
 *If an object is passed, each function inside it will
 *be assumed to be a Redux action creator. An object with the same
 *function names, but with every action creator wrapped into a dispatch call
 *so they may be invoked directly, will be merged into the component’s 
 *props. If a function is passed, it will be given dispatch.
 *
 */
const mapDispatchToProps = dispatch => {
    return{
        onConnectSensorRequest: () => dispatch(connectSensor()),
        onMeasureRequest: () => dispatch(measureAction()),
        onDisConnectSensorRequest: () => dispatch(disConnectSensor())
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

  /**
   *construct buttons and gives them the propertys of the previous component
   *with "onlick" the button fire´s a function wich is declared above
   *
   */
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
