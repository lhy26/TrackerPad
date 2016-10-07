import React from 'react';
import ReactDOM from "react-dom";
import {Button, Grid, Row, Col, FormControl} from 'react-bootstrap';
import {echo} from '../logic/TrackerCommands'
import {doSend} from '../logic/TrackerCommands'
import {doFaceCheck, pointList} from '../logic/TrackerCommands'



export default class FaceCheck extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
      return (
            <div>
              <Grid>
                  <Row>
                      <Col xs={6} md={6}>
                        {pointList.length}
                      </Col>
                      <Col xs={6} md={6}>
                        <Button onClick={() => doFaceCheck()}>measure</Button>
                      </Col>
                  </Row>
              </Grid>
            </div>
          );
    }
}
