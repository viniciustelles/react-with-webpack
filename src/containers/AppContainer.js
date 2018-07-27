import App from '../components/App'
import { connect } from 'react-redux'
import { clickButton } from '../actions'

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
})

const mapDispatchToProps = dispatch => ({
  clickButton: (newValue) => {
    dispatch(clickButton(newValue))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)