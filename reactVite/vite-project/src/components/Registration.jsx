import { useState } from 'react'

function Registration() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  function getData(e){
    e.preventDefault();
    // alert(name+email+password)
    const data={name,email,password};
    console.log(data);
  }
  return (
    <div>
      <h3>Register Form</h3>
      <form>
         <div className="form-group">
           <label htmlFor="YourName">Name</label>
             <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="YourName" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={getData}>Register</button>
      </form>
    </div>
  )
}

export default Registration
