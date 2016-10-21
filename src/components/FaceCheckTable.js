import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';


const mapStateToProps = (state) => {
    return{
        activeSensor: state.sensor.activeSensor,
        sensorTypes: state.sensor.sensorTypes,
        isConnected: state.sensor.isConnected,


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
            <td>123456789</td>
            <td>123456798</td>
            <td>123456798</td>
          </tr>
          <tr>
            <td>BS</td>
            <td>132456798</td>
            <td>132456798</td>
            <td>123456798</td>
          </tr>
        </tbody>
      </Table>
      );
        return(tableInstance);
    }

}
