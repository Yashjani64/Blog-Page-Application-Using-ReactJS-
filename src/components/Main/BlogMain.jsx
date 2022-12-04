import React from "react";
import { Link } from "react-router-dom";
import "./HomeMain.css";
import "./Blogmain.css";

const BlogMain = () => {
  return (
    <div className="MainFlex">
      <div className="demobox1">
        <img src="https://media.istockphoto.com/id/523513953/photo/times-square-in-new-york-city.jpg?s=612x612&w=0&k=20&c=ibPzzIPHrsIdPElVpZYHyWyvqIN4VXTzNP5UXiQcpu8="></img>
        <Link to="/Blog">
          <h2>Name</h2>{" "}
        </Link>
        <p>Date</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, libero
          minima. Inventore numquam, quae ex quas consequuntur maiores
          perspiciatis qui perferendis aperiam cupiditate modi temporibus
          blanditiis sed ipsum vitae vel!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, libero
          minima. Inventore numquam, quae ex quas consequuntur maiores
          perspiciatis qui perferendis aperiam cupiditate modi temporibus
          blanditiis sed ipsum vitae vel!
        </p>
      </div>
    </div>
  );
};

export default BlogMain;
