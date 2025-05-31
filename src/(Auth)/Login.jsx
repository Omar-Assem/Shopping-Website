import './style/Auth.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
      <section>
            <div className="continar">
                <div className="row">
                    <div className="col-lg-5">
                     <div className="sign-in">
                        <h2>Sign In</h2>
                        <p>Log in to your account to discover 
                            all great features in this template</p>
                            <div className="acount">
                                <input type="email" className="email" placeholder="Email"/>
                                <input type="password" placeholder="Password" className="email"/>
                                <button type="button" className="sign-in">Sign in</button>
                                <div className="forget-password">
                                  <a href="">Forgot Your Password?</a>
                                </div>
                            </div>
                       
                     </div>
                    </div>
                     <div className="col-lg-7">
                        <div className="sign-in">
                            <h2>NEW CUSTOMER</h2>
                            <p>By creating an account with our store, you will be able to 
                                move through the checkout
                                 process faster, store multiple shipping addresses, 
                                 view and track your orders in your account and more.

                            </p>
                           
                                <button type="button" >
                                  <Link to="/Create-Account">Create Account</Link>
                                </button>
                            
                        </div>
                    </div>
    
                    
                </div>
            </div>
         
        </section>
    </>
  )
}

export default Login
