import React from "react"

class EssayForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "Please write an essay about your favorite DOM element",
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    })
  }

  handleSubmit(event) {
    alert("An essay was submitted: " + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <h3>Essay From</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Essay:
            <textarea
              value={this.state.value}
              onChange={this.handleChange}
            ></textarea>
          </label>
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}

export default EssayForm
