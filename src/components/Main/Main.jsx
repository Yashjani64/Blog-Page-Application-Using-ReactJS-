import React, { Component } from "react";
import XMLdata from "./Data.xml";
import XMLParser from "react-xml-parser";
import axios from "axios";
import "./HomeMain.css";

class Main extends Component {
  data = [];
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      activePost: {},
      blogData: [],
    };
  }

  getXmlData() {
    let blogs = [];
    axios
      .get(XMLdata, {
        "Content-Type": "application/xml; charset=utf-8",
      })
      .then(function (response) {
        let xmlToJson = new XMLParser().parseFromString(response.data);

        xmlToJson.children.forEach((post) => {
          let postData = {};
          post.children.forEach((data) => {
            postData[data.name] = data.value;
          });
          blogs.push(postData);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    return blogs;
  }

  componentDidMount() {
    this.data = this.getXmlData();
    setInterval(() => {
      this.setState({
        blogData: this.data,
      });
    }, 2000);
  }

  render() {
    var Handlechange = (e) => {
      this.setState({
        activePost: this.state.blogData.find((post) => {
          return post.title === e.target.innerText;
        }),
      });
      this.setState({ isSelected: !this.state.isSelected });
      window.scrollTo(0, 0);
    };
    window.addEventListener("storage", () => {
      this.setState({
        isSelected: localStorage.getItem("isSelected") === "true",
      });
    });
    let ap = this.state.activePost;
    const x = this.state.isSelected;

    return (
      <main className="p-4 MainFlex">
        <div className="main-container ">
          {x ? (
            <div className="post ">
              <h1 className="mb-4 subtitle">{ap.title}</h1>
              <p className="date datetitle">{ap.date}</p>
              <p className="author authertitle">{ap.author}</p>
              <img className="my-3 w-75 mx-auto imagcss" src={ap.img} />
              <p className="othertitle">{ap.body}</p>
            </div>
          ) : (
            <div className="post-list">
              {this.state.blogData.length > 0 ? (
                this.state.blogData.map((data) => {
                  return (
                    <div className="card mb-5" key={data.date}>
                      <div className="card-horizontal">
                        <img
                          className="card-img-top"
                          src={data.img}
                          alt="Card image cap"
                        />
                        <div className="card-body">
                          <h1
                            className="card-title mb-4"
                            onClick={Handlechange}
                          >
                            {data.title}
                          </h1>
                          <p className="card-text summarytitle">
                            {data.summary}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div class="spinner">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    );
  }
}
export default Main;
