import React, { Component } from 'react';
import {
    FormGroup,
    FormControl,
} from 'react-bootstrap';

class CustomTextArea extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <form>
          		<FormGroup bsSize="large">
          			<FormControl type="text" placeholder="Large text" />
          		</FormGroup>
          		<FormGroup>
          			<FormControl type="text" placeholder="Normal text" />
          		</FormGroup>
          		<FormGroup bsSize="small">
          			<FormControl type="text" placeholder="Small text" />
          		</FormGroup>
      	    </form>
        );
    }
}

export default CustomTextArea;
