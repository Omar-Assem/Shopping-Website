import { Dcolliction } from "./Dcolliction";

const Collection = () => {
  return (
    <>
      <section className="colliction">
        <div className="container p-20">
          <div className="row">
            {Dcolliction.map((e,i)=>{
              return(
                <>
                 <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
              <div className="card2">
                <div className="img">
                  <img src={e.img} alt={e.title} />
                </div>
                <div className="card-body">
                  <h5>{e.title}</h5>
                </div>
              </div>
            </div>
                </>
              )
            })}
          
          </div>
        </div>
      </section>
    </>
  );
};

export default Collection;
