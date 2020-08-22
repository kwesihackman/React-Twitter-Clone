import React from "react";
import "./feed.css";
import Tweetbox from "../tweetbox/Tweetbox";
import Post from "../post/Post";

interface Props {}

export const Feed = (props: Props) => {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <Tweetbox />
      <Post
        avatar="https://api.adorable.io/avatars/400/43e7b55ece917cd7d98428a18871bd97.png"
        displayName="Eric Hackman"
        username="@eric_hackman"
        verified
        image="https://media.giphy.com/media/duzpaTbCUy9Vu/giphy.gif"
      />
      <Post
        avatar="https://api.adorable.io/avatars/400/43e7b55ece917cd7d98428a18871bd97.png"
        displayName="Eric Hackman"
        username="@eric_hackman"
        verified
        image="https://media.giphy.com/media/duzpaTbCUy9Vu/giphy.gif"
      />
      <Post
        avatar="https://api.adorable.io/avatars/400/43e7b55ece917cd7d98428a18871bd97.png"
        displayName="Eric Hackman"
        username="@eric_hackman"
        verified
        image="https://media.giphy.com/media/duzpaTbCUy9Vu/giphy.gif"
      />
      <Post
        avatar="https://api.adorable.io/avatars/400/43e7b55ece917cd7d98428a18871bd97.png"
        displayName="Eric Hackman"
        username="@eric_hackman"
        verified
        image="https://media.giphy.com/media/duzpaTbCUy9Vu/giphy.gif"
      />
      {/* <Post /> */}
      {/* tweetbox */}
      {/* feedlist */}
    </div>
  );
};
