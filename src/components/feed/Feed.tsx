import React from "react";
import "./feed.css";
import Tweetbox from "../tweetbox/Tweetbox";

interface Props {}

export const Feed = (props: Props) => {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <Tweetbox />
      {/* tweetbox */}
      {/* feedlist */}
    </div>
  );
};
