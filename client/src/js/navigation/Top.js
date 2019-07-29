// Top Navigation
import React, { Component } from 'react'
import TopNavBar from '../components/TopNavBar'
import UserMenuItem from './UserMenuItem'
import NotificationsMenuItem from './NotificationsMenuItem'
// import childrenWithProps from '../childrenWithProps'

class Top extends Component {
  render () {

    // const { icon, title, shared, children, to, isActive, isactivesection, toggle } = this.props
    // const { activeGroup } = shared.getState()
    // const active = activeGroup === this
    //
    // style={ { display: active ? 'block' : 'none' } }
    //
    // onClick={ () => toggle(this) }

    return (
      <div className="top_nav">
        <div className="nav_menu">
          <nav>
            <div className="nav toggle">
              <a  id="menu_toggle"><i className="fa fa-bars"></i></a>
            </div>
            <TopNavBar>
              <UserMenuItem />
              <NotificationsMenuItem />
            </TopNavBar>
          </nav>
        </div>
      </div>
    )
  }
}

export default Top