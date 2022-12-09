import React from "react";

import "./App.css";
import Home from "./pages/Home";
// import Blog from "./pages/Blog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Yes from "./pages/Blog/index1";
// import Blog1 from "./pages/Blog/index1";
// import Blog2 from "./pages/Blog/index2";
import Main from "./components/Main/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/main" element={<Main />} />
        {/* <Route path="/blog1" element={<Blog1 />} />
        <Route path="/blog2" element={<Blog2 />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
