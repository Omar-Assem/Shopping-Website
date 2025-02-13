import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Style/Header.css";
import { NavLink } from "react-router-dom";


const Header = () => {
  const messages = [
    "FREE GLOBAL SHIPPING - 20% OFF ORDERS OVER $100" ,
     "FREE GLOBAL SHIPPING - 60% OFF ORDERS OVER $500" ,
  ];
  
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false); 
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length); // يغير النص بعد الاختفاء
        setVisible(true); // يرجع النص الجديد يظهر
      }, 500); // تأخير النص الجديد بعد 500ms
    }, 3000); // كل 3 ثواني

    return () => clearInterval(interval);
  }, []);
  return (
    <>
     
      <div className="offer">
        <AnimatePresence mode="wait">
            {
                visible && (
                    <motion.p
                    key={index}
                    className="text-lg"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {messages[index]}
                  </motion.p>

                )
            }
       
        </AnimatePresence>
      </div>

     
      <div className="feedback-social">
        <div className="col-lg-9">
          <div className="call-me">
            Order Online Call Us <a href="#">0123456789</a>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="social">
            <a href="#" target="_blank" title="Twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" target="_blank" title="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" target="_blank" title="Pinterest">
              <i className="fab fa-pinterest-p"></i>
            </a>
            <a href="#" target="_blank" title="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <NavLink className="navbar-brand" to={"/"}>
              <img src="/img/Logo.png" alt="Logo" />
            </NavLink>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav ms-auto mb-3 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/"}>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/Catalog"}>Catalog</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/Collection"}>Collection</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/Blog"}>Blogs</NavLink>
                </li>
               
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/Contact-us"}>Contact Us</NavLink>
                </li>
            
                
 <li className="nav-item">
 <NavLink className="nav-link" to={"/signIn"}>Create Account</NavLink>
</li>

             
               
                <li className="nav-item">
                  <NavLink className="nav-link" to={'/Cart'}>
                    <i className="fa-solid fa-bag-shopping"></i> Cart
                  </NavLink>
                </li>
              
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    <i className="fa-regular fa-user"></i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/logIn"}>| Sign in</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
