import React from "react";
import "./HomeMain.css";

import { Link } from "react-router-dom";

const HomeMain = () => {
  return (
    <div>
      <div className="MainFlex">
        <div className="demobox">
          <img src="https://i.ytimg.com/vi/kGJr1Nh-1CY/maxresdefault.jpg"></img>
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/Blog"
          >
            <h2 className="subtitle">
              Best Things to Do in December in New York
            </h2>
          </Link>

          <p className="datetitle">Date : October 29, 2021</p>

          <p className="authertitle">Auther : ANDREA WIEN</p>

          <p className="summarytitle">
            Summary: Miracle on 34th Street. Home Alone. Elf. There’s a reason
            these blockbuster holiday hits all take place in New York City: to
            put it simply, it’s magical. While you may have to battle the biting
            winds or seek reprieve from the frigid cold, it’s New York’s winter
            weather that gives the city its hard-nosed grit and lovable charm
            year-round. Even if it’s just illusion, it feels like the city gets
            a little smaller come November, as everyone huddles closer to stay
            warm.
          </p>

          <p className="othertitle">
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
            gems and long-lost secrets present themselves to you at every
            turn...
          </p>
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/Blog"
          >
            <h2 className="subtitle">Read More</h2>
          </Link>
        </div>
        <div className="demobox">
          <img src="https://i.guim.co.uk/img/media/7e7b161c1296ff31e1a580de4ae7bc012082a861/157_120_5033_3020/master/5033.jpg?width=620&quality=45&dpr=2&s=none"></img>
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/Blog1"
          >
            <h2 className="subtitle">
              Apple iPhone 14 Pro review: new ideas in a familiar package
            </h2>
          </Link>

          <p className="datetitle">Date : September 26, 2022</p>

          <p className="authertitle">Auther : SAMUEL GIBBS</p>

          <p className="summarytitle">
            Summary: The iPhone 14 Pro is Apple's latest top-end flagship
            smartphone. New always-on display has been designed around a new
            smaller, floating notch design. Price rise due to weak US dollar
            means the phone is £150 (A$400) more expensive than its predecessor.
          </p>

          <p className="othertitle">
            Apple’s latest top smartphone model, the iPhone 14 Pro, features
            upgraded cameras, a new always-on display and some funky animations
            around a new smaller, floating notch design. It also features a
            substantial price rise as a result of currency shifts. Weak currency
            rates against the dollar mean the new phone is £150 (A$400) more
            expensive than its predecessor, coming in at £1,099 (A$1,749)
            despite costing the same $999 in the US. The 14 Pro has the same
            6.1in OLED display and premium stainless steel and glass design as
            previous models, but the large notch at top of the screen containing
            the cameras for Face ID has been replaced by a 31% smaller
            pill-shaped design Apple calls the “dynamic island”. The pill is
            animated, expanding and contracting to accommodate system alerts and
            ongoing notifications, such as charging status, album art and a
            little waveform when playing music or a countdown timer. Tapping and
            holding the notch reveals more of the notification, such as music
            playback controls, and just a tap opens the app...
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/Blog"
            >
              <h2 className="subtitle">Read More</h2>
            </Link>
          </p>
        </div>{" "}
        <div className="demobox">
          <img src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/08/person-using-video-editing-software-featured.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"></img>
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/Blog2"
          >
            <h2 className="subtitle">How to Edit Videos Like a Pro: 10 Tips</h2>
          </Link>

          <p className="datetitle">Date : October 9, 2021</p>

          <p className="authertitle">Auther : NOLEN JONKER</p>

          <p className="summarytitle">
            Summary: If you're just getting into video editing, there are some
            things you need to know about the process. Trimming is by far the
            most important editing tool you'll use. Organizing a project this
            way will keep things easily accessible and result in a speedy
            workflow.
          </p>

          <p className="othertitle">
            Editing is typically the final process that happens before a video
            gets to you for final viewing. If you've had to make a video
            yourself, you'll also know it can be a time-consuming process. If
            you're just getting into the editing game, you may be confused as to
            what to do with the many millions of clips you have—well, we're here
            to help. Here are several things worth remembering to help enhance
            your editing chops.
            <br></br>
            1. Maintain a Project Directory
            <br></br>
            When editing a big project for the first time ever, it's easy to
            just throw everything onto your desktop and hope for the best. Well,
            to say it simply, don't do that. Every single time you start an
            editing project, you need to make a project directory. Create a
            project folder, and within that folder, have a few more folders with
            labels like Raw Footage, Sound, Music, Photos, Graphics, and so on.
            Place all of the materials in these folders according to their type.
            It's also a good idea to label each individual file with a brief
            description of its contents. The project file itself (whether that
            be one for iMovie or Premiere) can be placed in the directory
            as-is—no special folders needed. Organizing the project this way
            will keep things easily accessible and result in a speedy workflow.
            <br></br>
            2. Two Is the Magic Number <br></br> So...
          </p>
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/Blog"
          >
            <h2 className="subtitle">Read More</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
