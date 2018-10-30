import React from 'react'
import { Link } from 'gatsby'

export default function Header(props) {
  return (
    <header>
      <Link to='/'>ExtractBot</Link>
      <ul>
        <li>
          <Link to='/#work'>How It Works</Link>
        </li>
        <li>
          <Link to='/#plan'>Bot Plans</Link>
        </li>
        <li>
          <Link to='/'>Sign Up</Link>
        </li>
        <li>
          <Link to='/'>Log In</Link>
        </li>
      </ul>
    </header>
  )
}
