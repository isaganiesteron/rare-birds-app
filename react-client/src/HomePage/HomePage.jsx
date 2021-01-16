import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { userActions } from '../_actions'

class HomePage extends React.Component {
  componentDidMount() {
    this.props.getUsers()
    this.props.getBlogs(this.props.user.role)
  }

  // handleDeleteUser(id) {
  //   return (e) => this.props.deleteUser(id)
  // }

  render() {
    const { user, users, blogs } = this.props
    return (
      <div className="col-md-6 col-md-offset-3">
        <h1>Hi {user.username}!</h1>
        <p>Available blogs for you as {user.role} role</p>
        {blogs.items &&
          <ul>
            {blogs.items.map((blog, index) =>
              <li key={blog._id}>
                {'(' + blog.id + ') ' + blog.title}
              </li>
            )}
          </ul>
        }

        {/* {users.loading && <em>Loading users...</em>}
        {users.error && <span className="text-danger">ERROR: {users.error}</span>}
        {users.items &&
          <ul>
            {users.items.map((user, index) =>
              <li key={user._id}>
                {'(' + user._id + ') ' + user.username}
                {
                  user.deleting ? <em> - Deleting...</em>
                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                      : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                }
              </li>
            )}
          </ul>
        } */}

        <p>
          <Link to="/login">Logout</Link>
        </p>
      </div>
    )
  }
}

function mapState(state) {
  const { users, blogs, authentication } = state
  const { user } = authentication
  return { user, users, blogs }
}

const actionCreators = {
  getUsers: userActions.getAll,
  getBlogs: userActions.getBlogs,
  // deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage)
export { connectedHomePage as HomePage }