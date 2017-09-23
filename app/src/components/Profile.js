require('./Profile.styl')

import {h, Component} from 'preact'
import {Link} from 'react-router'

export default class Profile extends Component {
  render() {
    const {user} = this.props
    const {avatar} = user
    if( !avatar ) {
      return  null
    }
    return  <div className="profile">
              <Link to="profile">
                <img className="item" src={avatar}/>
              </Link>
            </div>
  }
}
