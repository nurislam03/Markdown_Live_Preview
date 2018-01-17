import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

class Welcome extends Component {
  render() {
    return (
      <div>
          <Row>
              <Col xs={6} xsOffset={4}>
                  <h1> Markdown Live Preview </h1>
              </Col>
          </Row>
      </div>
    );
  }
}

export default Welcome;
