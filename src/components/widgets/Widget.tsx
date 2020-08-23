import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./widget.css";
import Trends from "./Trends";
import db from "../firebase/firebase";

const Widget = () => {
  const [trends, setTrends] = useState<any[]>([]);

  useEffect(() => {
    db.collection("trends").onSnapshot((snapshot) =>
      setTrends(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>Trends</h2>
        {trends.map((trend) => (
          <Trends
            position={trend.position}
            category={trend.category}
            hashtag={trend.hashtag}
            tweets={trend.tweets}
          />
        ))}
      </div>
    </div>
  );
};

export default Widget;
