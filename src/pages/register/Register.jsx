import "./register.css"

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">WecSocial</h3>
                <span className="loginDesc">Connect with friends and the world<br></br> around you on wecSocial.</span>
            </div>
            <div className="loginRight">
                <div className="loginbox">
                    <input placeholder="Username" className="loginInput"></input>
                    <input placeholder="Email" className="loginInput"></input>
                    <input placeholder="Password" className="loginInput"></input>
                    <input placeholder="Confirm Password" className="loginInput"></input>
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Login to Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
