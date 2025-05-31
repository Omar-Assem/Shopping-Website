import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Dheader, Dicon } from "./Dheader";
import "./Style/Header.css";

const Header = () => {
  const messages = [
    "FREE GLOBAL SHIPPING - 20% OFF ORDERS OVER $100",
    "FREE GLOBAL SHIPPING - 60% OFF ORDERS OVER $500",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <>
      <div className="offer">
        <AnimatePresence mode="wait">
          <motion.p
            key={index} // هذا المفتاح يسبب إعادة تشغيل الانيميشن
            className="text-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {messages[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="feedback-social container d-flex justify-content-between py-2">
        <div className="call-me">
          Order Online Call Us <a href="tel:0123456789">0123456789</a>
        </div>
        <div className="social">
          {Dicon.map((e, i) => (
            <a href="#" target="_blank" key={i} rel="noopener noreferrer" className="mx-2">
              <i className={e.url}></i>
            </a>
          ))}
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
                {Dheader.map((e, i) => (
                  <li className="nav-item" key={i}>
                    <NavLink className="nav-link" to={`/${e.url}`}>
                      {e.url}
                    </NavLink>
                  </li>
                ))}
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/Cart"}>
                    <i className="fa-solid fa-cart-shopping">0</i>
                  </NavLink>
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
