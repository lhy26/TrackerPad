import React from 'react';
import { connect } from 'react-redux';
import {Button, Grid, Row, Col, FormControl} from 'react-bootstrap';
import {twoSideMeasurement} from '../actions/trackerUtilActions';
import FaceCheckTable from './FaceCheckTable';
import TrackerOutput from './TrackerOutput';
import TrackerStatus from './TrackerStatus';


const mapStateToProps = state => {
    return{
      tracker: state.tracker,
      isConnected: state.sensor.isConnected,
      sensor: state.sensor,
      measurementConfig: state.tracker.measurementConfig,
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
      onTwoSideMeasurement:(isConnected) => dispatch(twoSideMeasurement(isConnected))
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
                <Col xs={2} md={2}>
                  <Button onClick={() => this.props.onTwoSideMeasurement(this.props.isConnected)}>change measurment config</Button>
                </Col>
              </Row>
              <Row className = 'show-grid'>
                <Col xs={2} md={2}>
                    <TrackerStatus sensor = {this.props.sensor.isConnected}
                                   measurementConfig={this.props.tracker.measurementConfig}/>
                </Col>
                <Col xs={12} md={12}>
                    <TrackerOutput/>
                </Col>

              </Row>
            </Grid>
        </div>
      );
    }
  }
