import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

import NewPasswordAdding from '../NewPasswords'

import YourPassword from '../YourPasswords'

import NoPassword from '../NoPasswords'

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    websiteInput: '',
    userNameInput: '',
    passwordInput: '',
    clickedOnDelete: false,
    checkboxClicked: false,
    searchInputVal: '',
    filterList: [],
  }

  onInputSearching = searchInput => {
    const {passwordsList} = this.state

    const filteredPasswords = passwordsList.filter(eachPassword =>
      eachPassword.websiteName
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    this.setState({searchInputVal: searchInput, filterList: filteredPasswords}) // update the state
  }

  renderFilterPasswords = () => {
    const {filterList, checkboxClicked} = this.state

    return filterList.map(eachPassword => (
      <NewPasswordAdding
        passwordDetails={eachPassword}
        key={eachPassword.id}
        onDeletePassword={this.onDelete}
        passwordLength={filterList}
        isCheckboxClicked={checkboxClicked}
        onSearchingValue={this.onInputSearching}
      />
    ))
  }

  onCheckboxClicks = () => {
    this.setState(prevState => ({checkboxClicked: !prevState.checkboxClicked}))
  }

  onDelete = id => {
    const {passwordsList} = this.state

    const filterData = passwordsList.filter(
      eachPassword => eachPassword.id !== id,
    )

    this.setState(prevState => ({
      passwordsList: filterData,
      clickedOnDelete: !prevState.clickedOnDelete,
    }))
  }

  renderPassword = () => {
    const {passwordsList, checkboxClicked} = this.state

    return passwordsList.map(eachPassword => (
      <NewPasswordAdding
        passwordDetails={eachPassword}
        key={eachPassword.id}
        onDeletePassword={this.onDelete}
        passwordLength={passwordsList}
        isCheckboxClicked={checkboxClicked}
        onSearchingValue={this.onInputSearching}
      />
    ))
  }

  onAddNewPassword = event => {
    event.preventDefault()

    const {
      websiteInput,
      userNameInput,
      passwordInput,
      passwordsList,
    } = this.state

    const newPassword = {
      id: v4(),
      websiteName: websiteInput,
      userName: userNameInput,
      password: passwordInput,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      websiteInput: '',
      userNameInput: '',
      passwordInput: '',
    }))

    console.log(passwordsList)
  }

  onChangeWebsiteValue = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUserNameValue = event => {
    this.setState({userNameInput: event.target.value})
  }

  onChangePasswordValue = event => {
    this.setState({passwordInput: event.target.value})
  }

  render() {
    const {
      websiteInput,
      userNameInput,
      passwordInput,
      passwordsList,
      searchInputVal,
      filterList,
    } = this.state

    const isTrue = searchInputVal === ''
    let count = passwordsList.length
    if (!isTrue) {
      count = filterList.length
    }

    const noPasswordClassName =
      count === 0 ? 'no-password-show' : 'no-password-hide'

    const passwordLength = passwordsList.length

    return (
      <div className="app-container">
        <div className="heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            className="logo"
            alt="app logo"
          />

          <div className="adding-new-password">
            <div className="password-container">
              <form>
                <div className="password-container-2">
                  <h1 className="heading">Add New Password</h1>

                  <div className="website-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      alt="website"
                      className="web-url"
                    />
                    <input
                      type="text"
                      className="input"
                      placeholder="Enter Website"
                      onChange={this.onChangeWebsiteValue}
                      value={websiteInput}
                    />
                  </div>

                  <div className="username-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                      alt="username"
                      className="web-url"
                    />

                    <input
                      type="text"
                      className="input"
                      placeholder="Enter Username"
                      onChange={this.onChangeUserNameValue}
                      value={userNameInput}
                    />
                  </div>

                  <div className="passwd-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      alt="password"
                      className="web-url"
                    />

                    <input
                      type="password"
                      className="input"
                      placeholder="Enter Password"
                      onChange={this.onChangePasswordValue}
                      value={passwordInput}
                    />
                  </div>

                  <button
                    className="add-btn"
                    type="submit"
                    onClick={this.onAddNewPassword}
                  >
                    Add
                  </button>
                </div>
              </form>

              <div className="image-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                  className="manager-image"
                  alt="password manager"
                />
              </div>
            </div>
          </div>

          <div className="your-password">
            <YourPassword
              count={count}
              onDeletePassword={this.onDelete}
              onClickingCheckbox={this.onCheckboxClicks}
              onSearchingValue={this.onInputSearching}
            />
            <div className="passwords-cont">
              <div className={noPasswordClassName}>
                <NoPassword passwordLength={passwordLength} />
              </div>

              <ul className="all-password-container">
                {isTrue ? this.renderPassword() : this.renderFilterPasswords()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
