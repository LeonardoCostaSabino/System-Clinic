import React, { Component } from 'react'
import cn from "classnames"
import childrenWithProps from '../childrenWithProps'

class GroupMenuItem extends Component {
  render() {
    /* eslint no-unused-vars: 0 */
    const { icon, title, shared, children, isActive, toggle } = this.props;
    const { activeGroup } = shared.getState();
    const active = activeGroup === this;

    return (
      <li className={ cn({ active }) }><a onClick={ () => toggle(this) }><i className={`fa fa-${icon}`}/> { title }
        <span className="fa fa-chevron-down"/></a>
        <ul className="nav child_menu" style={ { display: active ? 'block' : 'none' } }>
          { childrenWithProps(children, { isActive }) }
        </ul>
      </li>
    )
  }
}

export default GroupMenuItem
