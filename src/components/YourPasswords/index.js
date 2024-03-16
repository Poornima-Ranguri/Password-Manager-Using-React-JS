import './index.css'

const YourPassword = props => {
  const {count, onClickingCheckbox, onSearchingValue} = props

  const checkboxClicking = () => {
    onClickingCheckbox()
  }

  const onChangeSearchInput = event => {
    const searchInput = event.target.value
    onSearchingValue(searchInput)
  }

  return (
    <div className="your-passwords-container">
      <div className="nav-bar-container">
        <div className="count-container">
          <h1 className="parag">Your Passwords</h1>
          <p className="count">{count}</p>
        </div>
        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
            alt="search"
            className="search-icon"
          />

          <input
            className="input-search"
            type="search"
            placeholder="Search"
            onChange={onChangeSearchInput}
          />
        </div>
      </div>
      <div className="show-password-container">
        <input
          type="checkbox"
          className="check-box"
          onClick={checkboxClicking}
          id="myCheckbox"
        />
        <label htmlFor="myCheckbox" className="parag">
          Show Passwords
        </label>
      </div>
    </div>
  )
}

export default YourPassword
