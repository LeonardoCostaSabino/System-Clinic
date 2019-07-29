import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

class Left extends Component {
  render() {
    return (
      <div className="col-md-3 left_col">
        <div className="left_col scroll-view">
          <div className="navbar nav_title" style={ { border: 0 } }>
            <a href="index.html" className="site_title"><i className="fa fa-paw"></i> <span>Gentelella Alela!</span></a>
          </div>

          <div className="clearfix"></div>

          { /* menu profile quick info */ }
          <div className="profile clearfix">
            <div className="profile_pic">
              <img src="/images/img.jpg" alt="..." className="img-circle profile_img"/>
            </div>
            <div className="profile_info">
              <span>Welcome,</span>
              <h2>John Doe</h2>
            </div>
          </div>
          <br/>
          { this.props.children }
          <div className="sidebar-footer hidden-small">
            <a data-toggle="tooltip" data-placement="top" title="Settings">
              <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="FullScreen">
              <span className="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="Lock">
              <span className="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
              <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
            </a>
          </div>
          { /*/menu footer buttons*/ }
        </div>
      </div>
    )
  }
}

export default Left
