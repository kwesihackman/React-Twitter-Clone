import React, { useState, useEffect } from "react";
import FlipMove from "react-flip-move";
import "./feed.css";
import Tweetbox from "../tweetbox/Tweetbox";
import Post from "../post/Post";
import db from "../firebase/firebase";

type Posts = {
  displayName: string;
  username: string;
  verified: boolean;
  timestamp: string;
  text: string;
  avatar: string;
  image: string;
};

export const Feed = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <Tweetbox />
      {posts.map((post: any) => (
        <Post
          key={post.text}
          avatar={post.avatar}
          displayName={post.displayName}
          username={`@${post.username}`}
          verified={post.verified}
          image={post.image}
          text={post.text}
        />
      ))}

      {/* <Post /> */}
      {/* tweetbox */}
      {/* feedlist */}
    </div>
  );
};
