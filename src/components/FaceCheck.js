import React from 'react';
import { connect } from 'react-redux';
import {Button, Grid, Row, Col, FormControl} from 'react-bootstrap';
import {BSCheck} from '../actions/trackerUtilActions';
import FaceCheckTable from './FaceCheckTable';
import TrackerOutput from './TrackerOutput';
import TrackerStatus from './TrackerStatus';


const mapStateToProps = state => {
    return{
      tracker: state.tracker,
      activeSensor: state.sensor.activeSensor
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
      onBSCheck:() => dispatch(BSCheck())
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
                  <Button onClick={() => this.props.onBSCheck()}>le Backsight Check</Button>
                </Col>
                <Col xs={2} md={2}>
                    <FaceCheckTable tracker = {this.props.tracker}/>
                </Col>
              </Row>
              <Row className = 'show-grid'>
                <Col xs={2} md={2}>
                    <TrackerStatus tracker = {this.props.tracker}/>
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
