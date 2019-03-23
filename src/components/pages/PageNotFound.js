import React from 'react'
import {Link} from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div>
      <h2>
          page not found 404
      </h2>
      <Link to="/">Back to home </Link>
    </div>
  )
}
