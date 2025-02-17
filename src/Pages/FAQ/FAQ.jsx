import { Dfaq } from "./Dfaq";

const FAQ = () => {
  return (
    <>
      <div className="container my-5">
        {Dfaq.map((e,i)=>{
          return(
            <>
               <details className="my-2"  key={i}>
          <summary >
            <h2>{e.Q}</h2>
          </summary>
          <p>
           {e.A}
          </p>
        </details>
        </>
          )
        })}
       </div>
    </>
  );
};

export default FAQ;
