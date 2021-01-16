import config from 'config'
import { authHeader } from '../_helpers'

export const userService = {
  login,
  logout,
  register,
  getAll,
  getBlogs,
  getById,
  update,
  delete: _delete
}

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  }

  return fetch(`api/user/auth/login`, requestOptions)
    .then(handleResponse)
    .then(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(user))

      return user
    })
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user')
}

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`api/user`, requestOptions).then(handleResponse)
}

function getBlogs(role) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`api/blog/` + role, requestOptions).then(handleResponse)
}

function getById(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`api/user/${id}`, requestOptions).then(handleResponse)
}

function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  }

  return fetch(`api/users/register`, requestOptions).then(handleResponse)
}

function update(user) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  }

  return fetch(`api/users/${user.id}`, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  }

  return fetch(`api/users/${id}`, requestOptions).then(handleResponse)
}

function handleResponse(response) {
  console.log("response")
  console.log(response)
  return response.text().then(text => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout()
        location.reload(true)
      }

      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }

    console.log("return data:")
    console.log(data)
    return data
  })
}