import {Component} from 'react'
import UserInfo from '../UserInfo'

import BlogList from '../BlogList'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <UserInfo />
          <BlogList />
        </div>
      </div>
    )
  }
}

export default Home
