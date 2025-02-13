import { NavLink } from 'react-router-dom'
import './Style/Footer.css'
const Footer = () => {
  return (
    <>
<footer>
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        
      </div>
    </div>
  </div>
</footer>
<div className="bottom">
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <div className="img-logo">
          <img src="/public/img/Logo.png" alt=""/>
        </div>
        <div className="text">
          <p>Lorem ipsum dolor sit amet consectetu
            r adipisicing elit.
             Perspiciatis, esse quibusdam!</p>
            </div>
             <div className="bottom-social">
            
<a className='mx-3' href="#" target="_blank" title="copperclothingweb on Twitter" rel="noopener" aria-describedby="a11y-new-window-message">
  <i className="fa-brands fa-twitter"></i>
</a>

<a className='mx-3' href="#" target="_blank" title="copperclothingweb on Facebook" rel="noopener" aria-describedby="a11y-new-window-message">
  <i className="fab fa-facebook"></i>
</a>

<a className='mx-3' href="#" target="_blank" title="copperclothingweb on Pinterest" rel="noopener" aria-describedby="a11y-new-window-message">
  <i className="fab fa-pinterest-p" ></i>
</a>

<a className='mx-3' href="#" target="_blank" title="copperclothingweb on Instagram" rel="noopener" aria-describedby="a11y-new-window-message">
  <i className="fab fa-instagram"></i>
</a>
             </div>
       
      </div>
      <div className="col-lg-2">
        <div className="key-word">

          <h2>Categories</h2>
        </div>
        <div className="links">
          <form>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/Catalog">Catalog</NavLink>
              </li>
              <li>
                <NavLink to="/colliction">Collections</NavLink>
              </li>
              <li>
                <NavLink to="/Bolges">Blogs</NavLink>
              </li>
              <li>
                <NavLink to="/Contact-us">Contact Us</NavLink>
              </li>
              <li>
                  <NavLink to="/SIgnin">Sign In</NavLink>
              </li>
              <li>
                <NavLink to="/CREATE ACCOUNT">Create An Account</NavLink>
              </li>
              <li>
                <NavLink to="/product">All Products</NavLink>
              </li>
            </ul>
          </form>
        </div>
        
      </div>
      <div className="col-lg-2">
       <h2>Quick links
      </h2>
      <div className="links">
        <form>
          <ul>
            <li>
              <NavLink to="/Faq">Faq</NavLink>
            </li>
            <li>
              <NavLink to="/Wishlist">Wishlist</NavLink>
            </li>
            <li>
              <NavLink to="#">Article</NavLink>
            </li>
            <li>
              <NavLink to="search">Search</NavLink>
            </li>
           
          </ul>
        </form>
      </div>
        
      </div>
      <div className="col-lg-4">
       <h2>Newsletter Signup</h2> 
       <p>You may unsubscribe at any moment. 
        For that purpose,
         please find our contact info in the legal notice</p>
         <div className="btne">
           <input type="email" placeholder="Your email address"/>
          <button type="button" className="btn ">Subscribe</button>
         </div>
        
      </div>
     
    </div>
  </div>
</div>
    </>
  )
}

export default Footer
