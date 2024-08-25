import './index.css'

const PasswordItem = props => {
  const {passwordDetails, isClicked, onDelete} = props
  const {id, website, username, password, initialClassName} = passwordDetails
  const initial = username.slice(0, 1).toUpperCase()
  const imageUrl =
    isClicked === true ? (
      <p>{password}</p>
    ) : (
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
        alt="stars"
        className="star"
      />
    )

  const onDeletingUser = () => {
    onDelete(id)
  }

  return (
    <li className="item-container">
      <div className={initialClassName}>
        <p className="initial">{initial}</p>
      </div>
      <div className="password-text">
        <p>{website}</p>
        <p>{username}</p>
        {imageUrl}
      </div>
      <div>
        <button
          type="button"
          className="btn-dlt"
          onClick={onDeletingUser}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="dlt"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
