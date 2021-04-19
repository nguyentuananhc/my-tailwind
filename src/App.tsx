import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "components/Navigation";
import Footer from "components/Footer";
// import Body from "components/Body";
import GridBody from "components/GridBody";

import About from "containers/About";

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

  return (
    <div className="container px-4 mx-auto">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
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
