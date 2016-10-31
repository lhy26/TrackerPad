import React from 'react';
import { connect } from 'react-redux';
import {Button, Grid, Row, Col, FormControl} from 'react-bootstrap';
import {changeMeasurementConfig} from '../actions/trackerUtilActions';
import FaceCheckTable from './FaceCheckTable';
import TrackerOutput from './TrackerOutput';
import TrackerStatus from './TrackerStatus';


const mapStateToProps = state => {
    return{
      tracker: state.tracker,
      isConnected: state.sensor.isConnected,
      sensor: state.sensor,
      changeMeasurementConfig: state.tracker.changeMeasurementConfig,
      home: state.sensor.homeNumber,
      testmeasure:state.sensor.testmeasure
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
      onChangeMeasurementConfig:(isConnected) => dispatch(changeMeasurementConfig(isConnected))
    };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class FaceCheck extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
      return (
        <div>
          <Grid>
              <Row className ='show-grid' >
                <Col xs={2} md={2}>
                  <FaceCheckTable tracker = {this.props.tracker}
                                  sensor={this.props.sensor}/>
                </Col>
                <Col xs={8} md={8}>
                  <Button onClick={() => this.props.onChangeMeasurementConfig(this.props.isConnected)}>change measurment config</Button>
                </Col>
              </Row>
              <Row className = 'show-grid'>
                <Col xs={2} md={2}>
                    <TrackerStatus sensor = {this.props.sensor.isConnected}
                                   changeMeasurementConfig={this.props.tracker.changeMeasurementConfig}
                                   home= {this.props.sensor.homeNumber}/>
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
