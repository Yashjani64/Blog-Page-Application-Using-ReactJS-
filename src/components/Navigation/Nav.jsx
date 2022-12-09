import React, { Component } from "react";
import "./navigation.css";
import axios from "axios";
// import React, { useState } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  fetchArticles() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=5a73091276224979ac4e390eaf49ad95"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: this.shuffleArray(result.articles).slice(
              Math.max(this.shuffleArray(result.articles).length - 5, 0)
            ),
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  componentDidMount() {
    this.fetchArticles();
    setInterval(() => {
      this.fetchArticles();
    }, 60000);
  }
  render() {
    var Handlechange = (e) => {
      window.localStorage.setItem("isSelected", "false");
      window.dispatchEvent(new Event("storage"));
    };
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <nav className="pt-4 cointainer">
          {/* <button class="button-17" role="button">
            <Link to="/">
              <h2 className="linktext">HOME!</h2>
            </Link>
          </button> */}
          <a className="btn btn-primary mb-2 innearCont" onClick={Handlechange}>
            Latest News!
          </a>
          {items.map((item) => (
            <div className="card mb-2" key={item.author}>
              <img
                className="card-img-top innerimg "
                src={item.urlToImage}
                alt="Card image cap"
              />
              <div className="card-body ">
                <h5 className="card-title headText2">{item.title}</h5>
                <p className="card-subtitle">{item.author}</p>
                <p className="card-text ">{item.des}</p>
                <a
                  href={item.url}
                  target="_blank"
                  className="btn btn-primary button-17 "
                >
                  See Full Article
                </a>
              </div>
            </div>
          ))}
        </nav>
      );
    }
  }
}
export default Nav;
