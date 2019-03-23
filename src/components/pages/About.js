import React from 'react'

export default function About(props) {
  return (
    <div>
      <h1>About: {props.match.params.id}</h1>
      <h5>{props.match.params.name}</h5>
      <p>test test test test test testvtest test 
          testtest test testtest test testtest test testtest test test</p>
    </div>
  )
}
