import { Dproducts } from "./Data";

const Products = () => {
  return (
    <>
      <section className="cards">
        <div className="key-word">
          <pre>
            <h1>Popular Collection</h1>
          </pre>
        </div>
        <div className="container mt-4">
          <div className="row ">
            <div className="col-lg-1"></div>

            <div className="col-lg-2 col-md-6 col-sm-12">
            </div> 
      <div className="row">
        {Dproducts.map((e, i) => {
          return (
            <>
              <div className="col-lg-2 col-md-6 col-sm-12">
                <div className="card" key={i}>
                  <div className="like">
                    <span>{e.offer ? e.offer : ''}</span>
                    <span className={`mora ${!e.isSold ?' bg-transparent' : 'mora'}`}>{e.isSold? e.isSold: '' }</span>
                  </div>
                  <div className="card-continar">
                    <img src={e.overLay} alt={e.title} className="luka" />
                    <img src={e.img} alt={e.title} className="luka2" />
                  </div>
                  <div className="card-body">
                    <p className="my-2">{e.title.length>10? e.title.slice(0,10)+'..':e.title}</p>
                    <h3>
                      <span>{e.oldPrice} </span> {e.price}
                    </h3>
                  </div>
                  <div className="overliye">
                    <span>
                      <i className="fa-solid fa-heart"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-eye"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-cart-shopping"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-compress"></i>
                    </span>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {/* <div className="card">
                <div className="card-continar">
                  <img
                    src="img/10.webp"
                    alt="FEATURES COLLECTION"
                    className="luka"
                  />
                  <img src="img/luka.webp" alt="" className="luka2" />
                </div>

                <div className="card-body">
                  <p>Filmy fancy dress</p>
                  <h3>¥72,565</h3>
                </div>

                <div className="overliye">
                  <span>
                    {" "}
                    <i className="fa-solid fa-heart"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-eye"></i>
                  </span>
                  <span>
                    {" "}
                    <i className="fa-solid fa-cart-shopping"></i>
                  </span>
                  <span>
                    {" "}
                    <i className="fa-solid fa-compress"></i>
                  </span>
                </div>
              </div>
          
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="card">
                <div className="like">
                  <span>-4%</span>
                  <span className="mora">Soldout</span>
                </div>
                <div className="card-continar">
                  <img src="img/1.webp" alt="BEST SELLING." className="luka" />
                  <img src="img/8.webp" alt="BEST SELLING." className="luka2" />
                </div>
                <div className="card-body">
                  <p>Mortimer Furniture</p>
                  <h3>
                    <span>¥21,769 </span> ¥21,044
                  </h3>
                </div>
                <div className="overliye">
                  <span>
                    {" "}
                    <i className="fa-solid fa-heart"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-eye"></i>
                  </span>
                  <span>
                    {" "}
                    <i className="fa-solid fa-cart-shopping"></i>
                  </span>
                  <span>
                    {" "}
                    <i className="fa-solid fa-compress"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="card">
                <div className="card-continar">
                  <img src="img/7.webp" alt="NEW PRODUCTS" className="luka" />
                  <img src="img/18.webp" alt="NEW PRODUCTS" className="luka2" />
                </div>
                <div className="card-body">
                  <p>1Utensils in holders</p>
                  <h3>¥13,062</h3>
                </div>
                <div className="overliye">
                  <span>
                    {" "}
                    <i className="fa-solid fa-heart"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-eye"></i>
                  </span>
                  <span>
                    {" "}
                    <i className="fa-solid fa-cart-shopping"></i>
                  </span>
                  <span>
                    {" "}
                    <i className="fa-solid fa-compress"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="card">
                <div className="card-continar">
                  <img src="img/5.webp" alt="NEW COLLECTION" className="luka" />
                  <img
                    src="img/15.webp"
                    alt="NEW COLLECTION"
                    className="luka2"
                  />
                </div>
                <div className="card-body">
                  <p>Filmy fancy dress</p>
                  <h3>¥43,539</h3>
                </div>
                <div className="overliye">
                  <span>
                    {" "}
                    <i className="fa-solid fa-heart"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-eye"></i>
                  </span>
                  <span>
                    {" "}
                    <i className="fa-solid fa-cart-shopping"></i>
                  </span>
                  <span>
                    {" "}
                    <i className="fa-solid fa-compress"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="card">
                <div className="like">
                  <span className="mora">Soldout</span>
                </div>
                <div className="card-continar">
                  <img src="img/3.webp" alt="NEW PRODUCTS" className="luka" />
                  <img src="img/7.webp" alt="NEW PRODUCTS" className="luka2" />
                </div>
                <div className="card-body">
                  <p>American Ateiler</p>
                  <h3>¥7,256</h3>
                </div>
                <div className="overliye">
                  <span>
                    {" "}
                    <i className="fa-solid fa-heart"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-eye"></i>
                  </span>
                  <span>
                    {" "}
                    <i className="fa-solid fa-cart-shopping"></i>
                  </span>
                  <span>
                    {" "}
                    <i className="fa-solid fa-compress"></i>
                  </span>
                </div>
              </div> */}
      {/* </div> */}
      {/* <div className="col-lg-1"></div>
            <div className="col-lg-1"></div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="card">
                <div className="card-continar">
                  <img
                    src="img/9.webp"
                    alt="FEATURES COLLECTIO"
                    className="luka"
                  />
                  <img
                    src="img/29_124126ca-3b0d-4c70-85a3-104a8b5282d0.webp"
                    alt="FEATURES COLLECTIO"
                    className="luka2"
                  />
                </div>

                <div className="card-body">
                  <p>Round neck cotton</p>
                  <h3>¥116,104</h3>
                </div>
                <div className="overliye">
                  <span>
                    {" "}
                    <i className="fa-solid fa-heart"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-eye"></i>
                  </span>
                  <span>
                    {" "}
                    <i className="fa-solid fa-cart-shopping"></i>
                  </span>
                  <span>
                    {" "}
                    <i className="fa-solid fa-compress"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="card">
                <div className="card-continar">
                  <img src="img/8.webp" alt="BEST SELLING." className="luka" />

                  <img
                    src="img/12_2c94f423-ec3c-4fc5-91a8-5e2dacf698f8.webp"
                    alt="BEST SELLING."
                    className="luka2"
                  />
                </div>

                <div className="card-body">
                  <p>Kardiel parlor sofa</p>
                  <h3>¥75,468</h3>
                </div>
                <div className="overliye">
                  <span>
                    {" "}
                    <i className="fa-solid fa-heart"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-eye"></i>
                  </span>
                  <span>
                    {" "}
                    <i className="fa-solid fa-cart-shopping"></i>
                  </span>
                  <span>
                    {" "}
                    <i className="fa-solid fa-compress"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="card">
                <div className="card-continar">
                  <img src="img/6.webp" alt="NEW PRODUCTS" className="luka" />
                  <img
                    src="img/30_a66f06be-82f5-466f-a430-aca56793d244.webp"
                    alt="NEW PRODUCTS"
                    className="luka2"
                  />
                </div>

                <div className="card-body">
                  <p>Royal blue depths </p>
                  <h3>¥101,591</h3>
                </div>
                <div className="overliye">
                  <span>
                    {" "}
                    <i className="fa-solid fa-heart"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-eye"></i>
                  </span>
                  <span>
                    {" "}
                    <i className="fa-solid fa-cart-shopping"></i>
                  </span>
                  <span>
                    {" "}
                    <i className="fa-solid fa-compress"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="card">
                <div className="like">
                  <span>-20%</span>
                </div>
                <div className="card-continar">
                  <img src="img/4.webp" alt="NEW COLLECTION" className="luka" />
                  <img
                    src="img/9.webp"
                    alt="NEW COLLECTION"
                    className="luka2"
                  />
                </div>

                <div className="card-body">
                  <p>Western top and Jeans</p>
                  <h3>
                    <span>¥36,282</span>¥29,026
                  </h3>
                </div>
                <div className="overliye">
                  <span>
                    {" "}
                    <i className="fa-solid fa-heart"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-eye"></i>
                  </span>
                  <span>
                    {" "}
                    <i className="fa-solid fa-cart-shopping"></i>
                  </span>
                  <span>
                    {" "}
                    <i className="fa-solid fa-compress"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="card">
                <div className="card-continar">
                  <img src="img/2.webp" alt="NEW PRODUCTS" className="luka" />
                  <img src="img/21.webp" alt="NEW PRODUCTS" className="luka2" />
                </div>

                <div className="card-body">
                  <p>B&O Audio Headphone</p>
                  <h3>¥14,368</h3>
                </div>
                <div className="overliye"> */}
       {/* <span>
                    {" "}
                    <i className="fa-solid fa-heart"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-eye"></i>
                  </span>
                  <span>
                    {" "}
                    <i className="fa-solid fa-cart-shopping"></i>
                  </span>
                  <span>
                    {" "}
                    <i className="fa-solid fa-compress"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
           */}
        </div>
        </div>
      </section> 
    </>
  );
};

export default Products;
