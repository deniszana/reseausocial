import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import Log from "../components/Log";

const Home = () => {
    const uid = useContext(UidContext);
    return (
        <div className="home">

        <div className="main">
          <div className="home-header">
          {uid ? "NewPostForm" : <Log signin={true} signup={false} />}
          </div>

        </div>
        <div className="right-side">
          <div className="right-side-container">
            <div className="wrapper">
              "Trends"
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;