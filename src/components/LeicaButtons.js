import React from 'react';
import { Button,  ButtonGroup } from 'react-bootstrap';
import {echo} from '../logic/TrackerCommands'
import {disconnect} from '../logic/TrackerCommands'
import {connect} from '../logic/TrackerCommands'
import {measure} from '../logic/TrackerCommands'
import {toggle} from '../logic/TrackerCommands'
import {initializeLeica} from '../logic/TrackerCommands'
//import commands from '../logic/TrackerCommands'



export default class LeicaAt40xButtons extends React.Component{

  	constructor(props) {
    	super(props);
    	//this.disconnect = disconnect.bind(this);
  //  	this.disconnect = commands.disconnect.bind(this);
   	}





	render() {
		//console.log("function: ", disconnect);
	    return (
	    	<ButtonGroup vertical>
          <Button onClick={() => connect()}>connect</Button>
          <Button onClick={() => disconnect()}>disconnect</Button>
          <Button onClick={() => measure()}>measure</Button>
          <Button onClick={() => toggle()}>toggle</Button>
          <Button onClick={() => initializeLeica()}>initialize</Button>
	   		</ButtonGroup>
    	);
  	}
}
