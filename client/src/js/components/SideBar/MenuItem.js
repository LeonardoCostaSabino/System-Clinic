import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'

class MenuItem extends Component {
  render () {
    const { icon, title, isActive, ...rest } = this.props
    const { to } = rest
    const currentPage = isActive(to)

    return (
      <li className={cn({'current-page': currentPage})}><Link {...rest}><i className={ `fa fa-${icon}` }></i>{title}</Link></li>
    )
  }
}

export default MenuItem