import React from "react";
import "./HomeMain.css";
import { Link } from "react-router-dom";

const HomeMain = () => {
  return (
    <div>
      <div className="MainFlex">
        <div className="demobox">
          <img src="https://cdn.pixabay.com/photo/2015/03/11/12/31/buildings-668616__480.jpg"></img>
          <Link to="/Blog">
            <h2>Best Things to Do in December in New York</h2>
          </Link>

          <p>Date : October 29, 2021</p>
          <br></br>
          <p>Auther : ANDREA WIEN</p>
          <br></br>
          <p>
            Summary: Miracle on 34th Street. Home Alone. Elf. There’s a reason
            these blockbuster holiday hits all take place in New York City: to
            put it simply, it’s magical. While you may have to battle the biting
            winds or seek reprieve from the frigid cold, it’s New York’s winter
            weather that gives the city its hard-nosed grit and lovable charm
            year-round. Even if it’s just illusion, it feels like the city gets
            a little smaller come November, as everyone huddles closer to stay
            warm.
          </p>
          <br></br>
          <p>
            Bookending New York’s holiday traditions are the annual Macy’s
            Thanksgiving Day Parade on one side and the New Year’s fireworks in
            Times Square on the other. But nestled in between these highly
            televised events are plenty of smaller affairs that pack all the
            punch of holiday cheer with an added dose of New York wonder. During
            the holidays, locals and visitors can opt to recreate romantic movie
            moments by ice skating in Bryant Park, or ordering up frozen hot
            chocolates at Serendipity III. If it’s not nostalgia that tickles
            your fancy, head to Dyker Heights and take in the lights, or take in
            the city views in miniature at the New York Botanical Garden Holiday
            Train Show. It must be said, however, that the real holiday magic of
            New York lies in the unknown, buried in the memories and energy of a
            million wintery wonderlands gone by. Something changes in the air
            when the first snowflake falls – an indescribable sense that
            anything is possible. Give in to this feeling and suddenly you’ll
            realize that the city becomes your oyster, a playground where hidden
            gems and long-lost secrets present themselves to you at every turn.
          </p>
        </div>
        <div className="demobox">
          <img src="https://media.istockphoto.com/id/523513953/photo/times-square-in-new-york-city.jpg?s=612x612&w=0&k=20&c=ibPzzIPHrsIdPElVpZYHyWyvqIN4VXTzNP5UXiQcpu8="></img>
          <Link to="/Blog">
            <h2>Name</h2>
          </Link>
          <p>Date</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
            libero minima. Inventore numquam, quae ex quas consequuntur maiores
            perspiciatis qui perferendis aperiam cupiditate modi temporibus
            blanditiis sed ipsum vitae vel!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
            libero minima. Inventore numquam, quae ex quas consequuntur maiores
            perspiciatis qui perferendis aperiam cupiditate modi temporibus
            blanditiis sed ipsum vitae vel!
          </p>
        </div>
        <div className="demobox">
          <img src="https://media.istockphoto.com/id/523513953/photo/times-square-in-new-york-city.jpg?s=612x612&w=0&k=20&c=ibPzzIPHrsIdPElVpZYHyWyvqIN4VXTzNP5UXiQcpu8="></img>
          <Link to="/Blog">
            <h2>Name</h2>{" "}
          </Link>
          <p>Date</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
            libero minima. Inventore numquam, quae ex quas consequuntur maiores
            perspiciatis qui perferendis aperiam cupiditate modi temporibus
            blanditiis sed ipsum vitae vel!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
            libero minima. Inventore numquam, quae ex quas consequuntur maiores
            perspiciatis qui perferendis aperiam cupiditate modi temporibus
            blanditiis sed ipsum vitae vel!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
