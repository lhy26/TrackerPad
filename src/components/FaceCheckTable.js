import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';


const mapStateToProps = (state) => {
    return{
      tracker: state.tracker,
      activeSensor: state.sensor.activeSensor,
      testmeasure:state.sensor.testmeasure
    };
};
const mapDispatchToProps = (dispatch) => {
    return{

      onSetSensor: (name) => dispatch(setSensor(name)),
      onDisConnectSensor:() => dispatch(disConnectSensor())

    };
};
@connect(mapStateToProps, mapDispatchToProps)
export default class FaceCheckTable extends React.Component{

  constructor(props) {
    super(props);
  }
  render(){
    const tableInstance = (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Azimuth</th>
            <th>Zenit</th>
            <th>Distance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>FS</td>
            <td>{this.props.sensor.testmeasure}</td>
            <td>{this.props.tracker.fs.z}</td>
            <td>{this.props.tracker.fs.d}</td>
          </tr>
          <tr>
            <td>BS</td>
            <td>{this.props.tracker.bs.a}</td>
            <td>{this.props.tracker.bs.z}</td>
            <td>{this.props.tracker.bs.d}</td>
          </tr>
          <tr>
            <td>Result</td>
            <td>FS-BS</td>
            <td>FS-BS</td>
            <td>FS-BS</td>
          </tr>
        </tbody>
      </Table>
      );
        return(tableInstance);
    }

}
