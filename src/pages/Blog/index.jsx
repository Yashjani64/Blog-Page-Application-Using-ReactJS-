import React from "react";

import Foot from "../../components/Footer/Foot";
import Head from "../../components/Header/Head";
import BlogMain from "../../components/Main/BlogMain";
import HomeMain from "../../components/Main/HomeMain";
import Navigation from "../../components/Navigation/navigation";

function Blog() {
  return (
    <div>
      <Head />
      <>
        <div className="Flex">
          <BlogMain />
          <Navigation />
        </div>
      </>
      <Foot />
    </div>
  );
}

export default Blog;
