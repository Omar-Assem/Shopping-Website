import { Link } from "react-router-dom"

const Catalog = () => {
  return (
    <>
     <section className="catalog">
    <div className="continar">
        <div className="main">
            <h1 className='text-center'>
                404
            </h1>
           <h1 className='text-center'>
               Page not found!
           </h1>
           
           <p className='text-center'>PLEASE GO BACK TO   <span>
           <Link to={"/"}>HOMEPAGE</Link>

           </span> </p>
         
        </div>
     </div>
 </section>
    </>
  )
}

export default Catalog
