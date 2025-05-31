import { NavLink } from 'react-router-dom';
import { Dfooter, Dlinks, Dicon } from './Dheader';

const Footer = () => {
  return (
    <>
      <footer className="bg-light pt-5">
        <div className="container">
          <div className="row gy-4">

            {/* Logo + Description + Social */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="mb-3">
                <img src="/img/Logo.png" alt="Logo" className="img-fluid w-50" />
              </div>
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, esse quibusdam!
              </p>
              <div className="d-flex gap-3 mt-3">
                {Dicon.map((e, i) => (
                  <a
                    key={i}
                    href="#"
                    target="_blank"
                    rel="noopener"
                    aria-describedby="a11y-new-window-message"
                    className="text-dark fs-5"
                  >
                    <i className={e.url}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="col-6 col-md-3 col-lg-2">
              <h5>Categories</h5>
              <ul className="list-unstyled">
                {Dfooter.map((e, i) => (
                  <li key={i}>
                    <NavLink to={`/${e.url}`} className="text-muted text-decoration-none d-block py-1">
                      {e.url}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="col-6 col-md-3 col-lg-2">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                {Dlinks.map((e, i) => (
                  <li key={i}>
                    <NavLink to={`/${e.url}`} className="text-muted text-decoration-none d-block py-1">
                      {e.url}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-12 col-md-12 col-lg-4">
              <h5>Newsletter Signup</h5>
              <p className="text-muted">
                You may unsubscribe at any moment.
                For that purpose, please find our contact info in the legal notice.
              </p>
              <form className="d-flex flex-column flex-sm-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="form-control"
                />
                <button type="button" className="btn btn-dark">
                  Subscribe
                </button>
              </form>
            </div>

          </div>
        </div>
        <div className="text-center py-3 border-top mt-4 text-muted small">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
