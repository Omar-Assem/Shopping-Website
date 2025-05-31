import { NavLink } from "react-router-dom";
import "./Blog.css";
import { Aside, Column } from "./Dblog";
const Blog = () => {
  return (
    <>
      <section className="bolges">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="side-link">
                <h2>Categories</h2>

                <form>
                  <ul>
                    {Aside.map((e, i) => {
                      return (
                        <>
                          <li key={i}>
                            <NavLink to={e.url}>{e.title}</NavLink>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </form>
              </div>

              <div className="column">
                <div className="text">
                  <h2>Recent Post</h2>
                </div>
                <div className="col-lg-1">
                  <div className="row">
                    {Column.map((e, i) => {
                      return (
                        <>
                          <div className="col-lg-6" key={i}>
                            <div className="img">
                              <img src={e.img} alt={e.title} />
                            </div>
                            <div className="col-lg-6">
                              <div className="img-body">
                                <p>{e.title}</p>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                
                  </div>
                </div>
              
                <div className="meta">
                  <h2>Meta</h2>
                  <li>
                    <a href="#">Search</a>
                  </li>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="card2">
                <img src="img/35.webp" alt="" />

                <div className="card-body">
                  <h3>five centuries</h3>
                  <div className="icons">
                    <i className="fa-solid fa-calendar"></i>
                    <span>29 Jan, 2021</span>
                    <i className="fa-solid fa-comments"></i>
                    <span>0 Comment</span>
                  </div>
                  <p>
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    pri
                  </p>
                  <div className="link">
                    <a href="">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 ">
              <div className="card2">
                <img src="img/34.webp" alt="" />
                <div className="card-body">
                  <h3>took a galley</h3>
                  <div className="icons">
                    <i className="fa-solid fa-calendar"></i>
                    <span>29 Jan, 2021</span>
                    <i className="fa-solid fa-comments"></i>
                    <span>0 Comment</span>
                  </div>
                  <p>
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    pri
                  </p>
                  <div className="link">
                    <a href="">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="card2">
                <img src="img/35.webp" alt="" />
                <div className="card-body">
                  <h3>specimen book</h3>
                  <div className="icons">
                    <i className="fa-solid fa-calendar"></i>
                    <span>29 Jan, 2021</span>
                    <i className="fa-solid fa-comments"></i>
                    <span>0 Comment</span>
                  </div>
                  <p>
                    the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s, wh
                  </p>
                  <div className="link">
                    <a href="">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
