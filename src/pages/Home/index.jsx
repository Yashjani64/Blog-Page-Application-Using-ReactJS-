import React from "react";
import Foot from "../../components/Footer/Foot";
import Head from "../../components/Header/Head";
import HomeMain from "../../components/Main/HomeMain";
import Nav from "../../components/Navigation/Nav";
import Navigation from "../../components/Navigation/navigation";

import "./Home.css";
function Home() {
  return (
    <div>
      <Head />
      <>
        <div className="Flex">
          <HomeMain />
          <Navigation />
        </div>
      </>

      <Foot />
    </div>
  );
}

export default Home;
