import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "components/Navigation";
import Footer from "components/Footer";
import Body from "components/Body";

function App() {
  const [currentNav, setCurrentNav] = useState(1);

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
        <Navigation currentNav={currentNav} setCurrentNav={setCurrentNav} />
        <Switch>
          <Route path="/">
            <Body currentNav={currentNav} />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
