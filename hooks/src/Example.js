import React, { useState } from "react"

export default function Example() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  render() {
    return (
      <div>
        <p>You clicked this {this.state.count} times</p>
        <button
          onClick={() => this.setState({ count: this.state.count + 1 })}
        ></button>
      </div>
    )
  }
}
