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
   var fsa = this.props.sensor.faceCheck.fs.x;
   var fsz = this.props.sensor.faceCheck.fs.y;
   var fsd = this.props.sensor.faceCheck.fs.z;

   var bsa = this.props.sensor.faceCheck.bs.x;
   var bsz = this.props.sensor.faceCheck.bs.y;
   var bsd = this.props.sensor.faceCheck.bs.z;

   var diff1 = this.props.sensor.faceCheck.delta.dx;
   var diff2 = this.props.sensor.faceCheck.delta.dy;
   var diff3 = this.props.sensor.faceCheck.delta.dz;

    const tableInstance = (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>#</th>
            <th>X</th>
            <th>Y</th>
            <th>Z</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>FS</td>
            <td>{fsa}</td>
            <td>{fsz}</td>
            <td>{fsd}</td>
          </tr>
          <tr>
            <td>BS</td>
            <td>{bsa}</td>
            <td>{bsz}</td>
            <td>{bsd}</td>
          </tr>
          <tr>
            <td>Diff</td>
            <td>{diff1}</td>
            <td>{diff2}</td>
            <td>{diff3}</td>
          </tr>
        </tbody>
      </Table>
      );
        return(tableInstance);
    }

}
