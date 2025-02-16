import { NavLink } from 'react-router-dom'
import './Style/Footer.css'
import { Dfooter, Dlinks } from './Dheader'
import { Dicon } from './Dheader'
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
              {Dicon.map((e,i)=>{
                return(
                  <>
                  <a className='mx-3' href="#" target="_blank"  rel="noopener" aria-describedby="a11y-new-window-message" key={i}>
  <i className={e.url}></i>
</a>
                  </>
                )
              })}
            
             </div>
       
      </div>
      <div className="col-lg-2">
        <div className="key-word">

          <h2>Categories</h2>
        </div>
        <div className="links">
          <form>
            <ul>
              {Dfooter.map((e,i)=>(
                <>
                <li key={i}>
 <NavLink to={`/${e.url}`}>{e.url}</NavLink>
</li>
                </>
 
              ))
          }
          
             
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
            {Dlinks.map((e,i)=>{
              return(
                <>
                  <li key={i}>
              <NavLink to={`/${e.url}`}>{e.url}</NavLink>
            </li>
                </>
              )
            })}
          
        
           
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
