import React from 'react';
import { FormControl, Grid,Row,Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setSensor, connectSensor,disconnectSensor} from '../actions/sensorActions';
import {chooseMeasurementDevice, init, disconnect} from '../logic/TrackerCommands';
import TrackerPad from './TrackerPad';
import TrackerInput from './TrackerInput';
import TrackerOutput from './TrackerOutput';

const mapStateToProps = (state) => {
    return{
        activeSensor: state.sensor.activeSensor,
        sensorTypes: state.sensor.sensorTypes,
        isConnected: state.sensor.isConnected


    };
};
const mapDispatchToProps = (dispatch) => {
    return{

      onSetSensor: (name) => dispatch(setSensor(name)),
      onDisconnectSensor:() => dispatch(disconnectSensor())
      /*
      TODO : JMD Qualifizierten fragen ob ich die dinge hier brauche
              eigentlich nicht oder?
      onConnectSensor:() => dispatch(connectSensor()),
      ,
      onMeasure:() => dispatch(measureaction()),
      onToggle:() => dispatch(toggleSensor()),
      onCompIt:() => dispatch(compItaction())*/

    };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class TrackerUtilities extends React.Component {

  constructor(props) {
    super(props);

    this.handleActiveSensorChange = this.handleActiveSensorChange.bind(this);

  }
//If the Webpage refreshes!? the page initialize with the webserve(Qt) automatically
  componentDidMount(){
 //init();

  //   chooseMeasurementDevice(this.props.activeSensor);
  }

  handleActiveSensorChange(e){
      if(this.props.activeSensor != 'none'){
         disconnect();
      }

  //   if(sensorServiceConnected == true){
        this.setState({activeSensor: e.target.value});
        this.props.onSetSensor(e.target.value);
        //chooseMeasurementDevice(e.target.value);
      //}

  }

  render() {

    const sensorOptions = this.props.sensorTypes.map(function(sensor){
        return(
            <option value={sensor} key={sensor}>{sensor}</option>
        );
    });
    return (
      <div>
        <Grid>
            <Row className ='show-grid' >
              <Col xs={2} md={2}>
                  <FormControl
                  componentClass="select" placeholder="sensor type" value={this.props.activeSensor} onChange={this.handleActiveSensorChange} >
                  {sensorOptions}
                  </FormControl>
              </Col>

              <Col xs={2} md={2}>
                  <TrackerInput/>
              </Col>
            </Row>
            <Row className = 'show-grid'>
              <Col xs={2} md={2}>
                  <TrackerPad activeSensor = {this.props.activeSensor}/>
              </Col>
              <Col xs={10} md={10}>
                  <TrackerOutput/>
              </Col>

            </Row>
          </Grid>
      </div>
    );
  }
}
