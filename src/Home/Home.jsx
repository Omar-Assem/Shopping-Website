import { Typewriter } from "react-simple-typewriter";
import Landing from "./Landing";
import Products from "./Products";
import LBg from "./LBg";
import Rate from "./Rate";

const HomeSection = () => {
  return (
    <>
      <section className="home">
        <div className="container">
          <div className="text">
            <h1>Brand New Spring Summer</h1>
            <h2>
              <Typewriter
                words={["FEATURES", "COLLECTIONS", "NEW ARRIVALS"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
            <p>The best dark spot correctors for every budget</p>
          </div>
        </div>
      </section>
      <Landing />
      <Products />
      <LBg />
      <Rate />
    </>
  );
};

export default HomeSection;
