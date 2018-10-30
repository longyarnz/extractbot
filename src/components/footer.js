import React from 'react'

export default function Footer(props) {
  return (
    <footer>
      <div>
        <span>
          &copy; {new Date().getUTCFullYear()} || <span>Designed by LekanMedia</span>
        </span>
      </div>
    </footer>
  )
}