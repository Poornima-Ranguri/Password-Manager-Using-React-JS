import './index.css'

const NewPasswordAdding = props => {
  const {passwordDetails, onDeletePassword, isCheckboxClicked} = props
  const {id, websiteName, userName, password} = passwordDetails

  console.log(userName[0])

  const onDelete = () => {
    onDeletePassword(id)
  }

  return (
    <li className="passwd-item-container">
      <div className="item" key={id}>
        <div className="item-container">
          <div className="profile-container">
            <p className="profile-letter-text">{userName[0]}</p>
          </div>

          <div className="password-text-container">
            <p className="website-text">{websiteName}</p>
            <p className="user-text">{userName}</p>
            {isCheckboxClicked ? (
              <p className="text-show">{password}</p>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                className="star-show"
                alt="stars"
              />
            )}
          </div>
          <div className="delete-container">
            <button
              className="delete-btn"
              type="button"
              onClick={onDelete}
              data-testid="delete"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                alt="delete"
                className="delete-icon"
              />
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default NewPasswordAdding
