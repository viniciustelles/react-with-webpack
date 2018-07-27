import React from 'react'
import { hot } from 'react-hot-loader'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: ''
    }

    this.inputChange = this.inputChange.bind(this)
  }

  inputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  render() {
    const { inputValue } = this.state;
    const { clickButton, newValue } = this.props;
    return (
      <div>
        <h1>
          What is your name?
        </h1>
        <br />
        <input
          type='text'
          onChange={this.inputChange}
          value={inputValue}
        />
        <button onClick={() => clickButton(inputValue)} >
          Click me!
        </button>
        <h2>{newValue}</h2>
      </div>
    )
  }
}

export default hot(module)(App)