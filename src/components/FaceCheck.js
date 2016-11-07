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
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Grid>
            <Row className ='show-grid' >      
              <Col xs={5} md={5}>
                    <FaceCheckTable tracker = {this.props.tracker}
                                    sensor = {this.props.sensor}/>
              </Col>
            </Row>
            <Row className = 'show-grid'>
              <Col xs={2} md={2}>
                <Button onClick={() =>
                    this.props.onTwoSideMeasurement(this.props.isConnected)}>Measure
                </Button>
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
