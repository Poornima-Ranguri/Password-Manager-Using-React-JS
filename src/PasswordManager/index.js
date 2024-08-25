import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    passwordsList: [],
    searchInput: '',
    isChecked: false,
  }

  renderNoPasswordsView = () => (
    <div className="no-passwords">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        className="no-password-icon"
        alt="no passwords"
      />
      <p className="no-text">No Passwords</p>
    </div>
  )

  onDelete = id => {
    this.setState(prevState => ({
      passwordsList: prevState.passwordsList.filter(
        eachPassword => eachPassword.id !== id,
      ),
    }))
  }

  renderPasswordItem = () => {
    const {passwordsList, isChecked, searchInput} = this.state

    const filteredPasswordsList = passwordsList.filter(eachPassword =>
      eachPassword.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    if (filteredPasswordsList.length === 0) {
      return this.renderNoPasswordsView()
    }

    return (
      <ul>
        {filteredPasswordsList.map(eachPassword => (
          <PasswordItem
            key={eachPassword.id}
            passwordDetails={eachPassword}
            isClicked={isChecked}
            onDelete={this.onDelete}
          />
        ))}
      </ul>
    )
  }

  onToggleIsChecked = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeWebsiteName = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onAddBtn = event => {
    event.preventDefault()
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const {website, username, password} = this.state

    const newUser = {
      id: uuidV4(),
      website,
      username,
      password,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newUser],
      website: '',
      username: '',
      password: '',
    }))
  }

  render() {
    const {website, username, password, passwordsList} = this.state
    const count = passwordsList.length

    return (
      <div className="home">
        <div className="heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            className="app-logo"
            alt="app logo"
          />
        </div>
        <div className="card-container">
          <div className="image-small-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              className="image-small"
              alt="password manager"
            />
          </div>
          <form onSubmit={this.onAddBtn}>
            <div className="text-container">
              <h1 className="heading">Add New Password</h1>
              <div className="website-container">
                <div className="website-image-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="icon"
                  />
                  <hr className="separator" />
                </div>
                <input
                  type="text"
                  placeholder="Enter Website"
                  className="input"
                  onChange={this.onChangeWebsiteName}
                  value={website}
                />
              </div>
              <div className="website-container">
                <div className="website-image-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="icon"
                  />
                  <hr className="separator" />
                </div>
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="input"
                  onChange={this.onChangeUsername}
                  value={username}
                />
              </div>
              <div className="website-container">
                <div className="website-image-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="icon"
                  />
                  <hr className="separator" />
                </div>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input"
                  onChange={this.onChangePassword}
                  value={password}
                />
              </div>
              <button className="btn" type="submit">
                ADD
              </button>
            </div>
          </form>
          <div className="image-background-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="bg-image"
            />
          </div>
        </div>
        <div className="card-container-2">
          <nav className="nav-bar">
            <div className="your-passwords-container">
              <h1 className="your-password-text">Your Passwords</h1>
              <p className="password-length">{count}</p>
            </div>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-icon"
              />
              <hr className="hr-line" />
              <input
                type="search"
                className="search-input"
                placeholder="search"
                onChange={this.onChangeSearchInput}
              />
            </div>
          </nav>
          <hr className="hr-separator" />
          <div className="show-password-container">
            <input
              type="checkbox"
              id="checkbox"
              className="checkbox"
              onChange={this.onToggleIsChecked}
            />
            <label htmlFor="checkbox">Show Passwords</label>
          </div>
          <div className="passwords-list-container">
            {passwordsList.length === 0
              ? this.renderNoPasswordsView()
              : this.renderPasswordItem()}
          </div>
        </div>
        <div className="poori">
          <h1>Poornima Ranguri</h1>
        </div>
      </div>
    )
  }
}

export default PasswordManager
