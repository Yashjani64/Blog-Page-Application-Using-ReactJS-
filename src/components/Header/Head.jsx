import React from "react";
import "./Head.css";
// const Head = () => {
//   return (
//     <div>

//       <img src="im1.png" alt="Trulli" width="500" height="333"></img>
//     </div>
//   );
// };

// export default Head;

import logo from "./im3.png";
console.log(logo);

function Head() {
  // Import result is the URL of your image
  return <img style={{ width: 1300, height: 170 }} src={logo} alt="Logo" />;
}

export default Head;
