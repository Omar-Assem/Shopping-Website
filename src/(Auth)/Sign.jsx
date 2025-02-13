import './style/Auth.css'
const Sign = () => {
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
              <input type="text" placeholder="First Name" className="email" />
              <input type="text" placeholder="Last Name" className="email" />

              <input className="email" type="email" placeholder="email" />
              <input type="password" className="email" placeholder="password" />
              <button type="button" className="btn">Create</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Sign
