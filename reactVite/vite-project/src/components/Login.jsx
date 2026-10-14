function Login() {
  return (
    <div>
      <h2>Login Form</h2>
      <form>
        <div className="form-group">
         <label htmlFor="loginEmail">Email address</label>
         <input type="email" className="form-control" id="loginEmail" aria-describedby="emailHelp"/>
    
        </div>
        <div className="form-group">
         <label htmlFor="loginPassword">Password</label>
         <input type="password" className="form-control" id="loginPassword"/>
        </div>
        <div className="form-group form-check">
         <input type="checkbox" className="form-check-input" id="loginCheck"/>
         <label className="form-check-label" htmlFor="loginCheck">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}

export default Login