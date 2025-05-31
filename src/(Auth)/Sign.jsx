import { useState } from "react";
import "./style/Auth.css";
const Sign = () => {
  const [User, setUser] = useState({
    fName:"",
    lName:"",
    email: "",
    password : "",
  });
  const hnadlerUseer = (e)=>{
let OldDATA = User
OldDATA[e.target.name] = e.target.value
setUser(OldDATA)
  }
  return (
    <>
      <section>
        <div className="continar">
          <div className="main">
            <div className="main-text">
              <h2>Create Account</h2>
            </div>
            <div className="account-form">
              <form>
                <input
                  type="text"
                  placeholder="First Name"
                  className="email"
                  name="fName"
                  onChange={hnadlerUseer}
                />
                <input
                  type="text"
                  placeholder="Last Name "
                  className="email"
                  name="LastName"
                  onChange={hnadlerUseer}
                />
                <input
                  className="email"
                  type="email"
                  placeholder="email"
                  name="email"
                  onChange={hnadlerUseer}
                />
                <input
                  type="password"
                  className="email"
                  placeholder="password"
                  name="password"
                  onChange={hnadlerUseer}
                />
                <button type="button" className="btn" onClick={() => {
                 fetch("http://localhost:5177/Auth",{
                  method:'POST',
                  headers : {
                    'Content-Type':'application/json'
                  },
                  body:JSON.stringify({User})

                 })
                }
                }>
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sign;
