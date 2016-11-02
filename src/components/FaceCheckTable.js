import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';




const mapStateToProps = (state) => {
    return{
      tracker: state.tracker,
      activeSensor: state.sensor.activeSensor,
    };
};
const mapDispatchToProps = (dispatch) => {
    return{
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
            <td>{this.props.sensor.fs.a}</td>
            <td>{this.props.sensor.fs.z}</td>
            <td>{this.props.sensor.fs.d}</td>
          </tr>
          <tr>
            <td>BS</td>
            <td>{this.props.sensor.bs.a}</td>
            <td>{this.props.sensor.bs.z}</td>
            <td>{this.props.sensor.bs.d}</td>
          </tr>
          <tr>
            <td>Diff</td>
            <td>diff1</td>
            <td>diff2</td>
            <td>diff3</td>
          </tr>
        </tbody>
      </Table>
      );
        return(tableInstance);
    }

}
