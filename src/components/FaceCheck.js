import React from 'react';
import {Button, Grid, Row, Col, FormControl} from 'react-bootstrap';
import {doFaceCheck, pointList} from '../middleware/sensorSocketMW'
import FaceCheckTable from './FaceCheckTable';
import TrackerOutput from './TrackerOutput';
import TrackerStatus from './TrackerStatus';

const mapStateToProps = state => {
    return{
      activeSensor:state.sensor.activeSensor,
      isConnected:state.sensor.isConnected
    };
};

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

                </Col>

                <Col xs={2} md={2}>
                    <FaceCheckTable/>
                </Col>
              </Row>
              <Row className = 'show-grid'>
                <Col xs={2} md={2}>
                    <TrackerStatus />
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
