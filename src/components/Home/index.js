import {Component} from 'react'

import './index.css'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLogin: false}

  onLogin = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <Message isLogin={isLogin} />
          {isLogin ? (
            <Logout logout={this.onLogin} />
          ) : (
            <Login login={this.onLogin} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
