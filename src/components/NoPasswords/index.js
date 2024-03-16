import './index.css'

const NoPasswords = props => {
  const {passwordLength} = props

  console.log(passwordLength)

  return (
    <div className="cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-passwd-icon"
      />
      <p className="parag">No Passwords</p>
    </div>
  )
}

export default NoPasswords
