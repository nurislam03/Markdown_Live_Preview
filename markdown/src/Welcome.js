import React, { Component } from 'react';
import {
    Row,
    Col,
} from 'react-bootstrap';

class Welcome extends Component {
    render() {
        return (
          <div>
              <Row>
                  <Col xs={5} xsOffset={5}>
                      <h3>Markdown Live Preview</h3>
                  </Col>
              </Row>
          </div>
        );
    }
}

export default Welcome;
