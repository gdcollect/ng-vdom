import React from 'react'
import { render } from 'ng-vdom/bootstrap'
import { generate } from '../utils/element'

function demo_0() {
  const container = generate()

  function Clock(props: { date: Date }) {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }

  function tick() {
    render(
      <Clock date={new Date()} />,
      container
    )
  }

  setInterval(tick, 1000)
}

demo_0()