import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "components/Navigation";
import Footer from "components/Footer";
// import Body from "components/Body";
import GridBody from "components/GridBody";

import About from "containers/About";
import Art from "containers/Art";

import { Parallax } from "const";
import useParallax from "helper/useParallax";

function App() {
  // console.log(currentNav);
  // const lazyLoad = (target: any) => {
  //   const io = new IntersectionObserver((entries, observer) => {
  //     entries.forEach((entry) => {
  //       console.log(":D");
  //       if (entry.isIntersecting) {
  //         const img = entry.target;
  //         const src = img.getAttribute("data-lazy") || "";
  //         img.setAttribute("src", src);
  //       }
  //       observer.disconnect();
  //     });
  //   });

  //   io.observe(target);
  // };

  // useEffect(() => {
  //   const targets = document.querySelectorAll("img");
  //   targets.forEach(lazyLoad);
  // }, []);

  useParallax();

  return (
    <div className="container px-4 mx-auto">
      <header>
        <h1 className="big-title translate" data-speed="0.1">
          Discover.
        </h1>
        <img
          src={Parallax[4].src}
          className="person translate"
          data-speed="-0.25"
          alt="person"
        />
        <img
          src={Parallax[1].src}
          className="mountain1 translate"
          data-speed="-0.2"
          alt="mountain1"
        />
        <img
          src={Parallax[2].src}
          className="mountain2 translate"
          data-speed="0.4"
          alt="mountain2"
        />
        <img
          src={Parallax[3].src}
          className="mountain3 translate"
          data-speed="0.3"
          alt="mountain3"
        />
        <img
          src={Parallax[5].src}
          className="sky translate"
          data-speed="0.5"
          alt="sky"
        />
      </header>

      <section>
        <div className="shadow"></div>
      </section>

      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/art/:id" children={<Art />} />
          <Route path="/">
            <GridBody />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
