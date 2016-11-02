import React from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';
import {connect} from "react-redux";
import {OverlayTrigger, Tooltip} from 'react-bootstrap'
/**
 *dispatches the store´s states to property´s(so it can be used here)
 *
 */
const mapStateToProps = state => {
    return{
      isConnected: state.sensor.isConnected,
      measurementConfig: state.tracker.measurementConfig,
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

    };
};

/**
 *
 */
@connect(mapStateToProps, mapDispatchToProps)
export default class TrackerStatus extends React.Component{
  constructor(props) {
    	super(props);
   	}
	render() {
          if (this.props.isConnected === true && this.props.measurementConfig == 'double'){
            return(
              <ButtonGroup vertical>
                <Button bsStyle="success">connected</Button>
                <Button >measurementConfig == {this.props.measurementConfig} </Button>
              </ButtonGroup>
            )

          }else if(this.props.isConnected === true && this.props.measurementConfig == 'single'){
            return(
              <ButtonGroup vertical>
                <Button bsStyle="success">connected</Button>
                <Button >measurementConfig == {this.props.measurementConfig} </Button>
              </ButtonGroup>
            )
          }else if(this.props.isConnected === false && this.props.measurementConfig == 'double'){
            return(
              <ButtonGroup vertical>
                <Button bsStyle="danger">not connected</Button>
                <Button >measurementConfig == {this.props.measurementConfig} </Button>
              </ButtonGroup>
              )
          }else{
            return(
              <ButtonGroup vertical>
                  <Button bsStyle="danger">not connected</Button>
                  <Button >measurementConfig == {this.props.measurementConfig} </Button>
              </ButtonGroup>
          )}
      }
  	}
