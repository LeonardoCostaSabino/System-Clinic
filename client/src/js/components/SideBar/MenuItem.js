import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'

class MenuItem extends Component {
  render () {
    const { icon, title, isActive, to } = this.props;
    const currentPage = isActive(to);

    return (
      <li className={cn({'current-page': currentPage})}><Link to={to}><i className={ `fa fa-${icon}` }></i>{title}</Link></li>
    )
  }
}

export default MenuItem