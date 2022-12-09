import React from "react";
import Foot from "../../components/Footer/Foot";
import Head from "../../components/Header/Head";
import HomeMain from "../../components/Main/HomeMain";
import Main from "../../components/Main/Main";
import Nav from "../../components/Navigation/Nav";
// import Navigation from "../../components/Navigation/navigation";

import "./Home.css";
function Home() {
  return (
    <div>
      <Head />
      <>
        <div className="Flex">
          {/* <HomeMain /> */}
          <Main />
          {/* <Navigation /> */}
          <Nav className="pr-3" />
        </div>
      </>

      <Foot />
    </div>
  );
}

export default Home;
