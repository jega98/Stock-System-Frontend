import React from 'react';
import axios from 'axios';


const Login = () => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [checkbox, setCheckBox] = React.useState("")
  
    function handleSignin (){
      console.log(email,password,checkbox)
  
  
      axios.post(`http://localhost:3000/login`, {user: {"email":email,"password":password,"checkbox":checkbox }})
      .then(res => {
        console.log(res);
        console.log(res.data);
        if(res.data === "password is right") {
             window.location.reload()
          } 
        else if(res.data === "password is wrong") {alert("password is wrong")}
        else if(res.data ==="user is not found") {alert("coming soon")}
    })

}
    return (
        <div>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="string" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" value={checkbox} onChange={(e) => setCheckBox(e.target.value)} />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={() => handleSignin()}>Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </div>
    )
}
export default Login;