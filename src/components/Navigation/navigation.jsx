import "./navigation.css";
import axios from "axios";
import React, { useState } from "react";

import { Link } from "react-router-dom";
const url =
  " https://newsapi.org/v2/everything?q=bitcoin&apiKey=5a73091276224979ac4e390eaf49ad95";
export default function Navigation() {
  const [articles, setProduct] = React.useState(null);
  const [accepted, setAccepted] = useState(false);

  React.useEffect(() => {
    const i = setInterval(() => {
      axios
        .get(url)
        .then((response) => {
          setProduct(response.data.articles);
          console.log(JSON.stringify(response.data.articles));
        })
        .catch((error) => console.log(`Error: ${error}`));
      setAccepted(!accepted);
    }, 6000);
    return () => clearInterval(i);
  }, [accepted]);

  if (!articles) return null;

  return (
    <div class="cointainer">
      <button class="button-17" role="button">
        <Link to="/Blog">
          <h2 className="linktext">HOME!</h2>{" "}
        </Link>
      </button>

      <br />
      <h6 className="subheadText"> CURRENT</h6>
      <h6 className="headText">N E W S!</h6>
      <hr />
      <div className="innearCont">
        {/* Fetching only 5 data at a time  */}
        {articles
          .filter((ele, index) => index < 4)
          .map((item) => (
            <>
              <img src={item.urlToImage} alt="articleImage" width="120" />
              <h4>
                <strong>{item.title}</strong>
              </h4>

              <p className="auther">Author : {item.author}</p>

              <p className="desciption">{item.description}</p>

              <p className="published">Published At: {item.publishedAt}</p>
              <br />
              <hr />
            </>
          ))}
      </div>
    </div>
  );
}
