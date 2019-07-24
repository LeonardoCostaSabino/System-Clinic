import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import NetworkActivities from './NetworkActivities'
import TopTile from './TopTile'

class Dashboard extends Component {
  render () {

    return (
      <div>
          {/*  top tiles  */}
          <TopTile />
          <Row>
            <Col md={12} sm={12} xs={12}>
              <NetworkActivities />
            </Col>
          </Row>
          <br />
      </div>
    )
  }
}

export default Dashboard