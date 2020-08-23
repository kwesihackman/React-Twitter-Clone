import React from "react";
import "./trends.css";

interface Props {
  position: number;
  category: string;
  hashtag: string;
  tweets: string;
}

const Trends: React.FC<Props> = ({ position, category, hashtag, tweets }) => {
  return (
    <div className="trends">
      <div className="trends__header">
        <div>{position}</div>
        <div>&#8226;</div>
        <div>{category}</div>
        <div>&#8226;</div>
        <div>Trending</div>
      </div>
      <div className="trends__body">
        <div>{hashtag}</div>
      </div>
      <div className="trends__footer">
        <div>{tweets}</div>
      </div>
    </div>
  );
};

export default Trends;
