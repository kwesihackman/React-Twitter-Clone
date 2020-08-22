import React, { useState } from "react";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import EventIcon from "@material-ui/icons/Event";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import PollIcon from "@material-ui/icons/Poll";
import "./tweetbox.css";
import { Button, Avatar } from "@material-ui/core";
import db from "../firebase/firebase";

const Tweetbox = () => {
  const [tweetMessage, setTweetMessage] = useState("");

  const sendTweet = (e: any) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Eric Hackman",
      username: "eric_hackman",
      timestamp: new Date(),
      avatar: "https://homepages.cae.wisc.edu/~ece533/images/cat.png",
      text: tweetMessage,
      verified: true,
      image:
        "https://specials-images.forbesimg.com/imageserve/5f418963822666325faf285b/960x0.jpg?fit=scale",
    });
    setTweetMessage("");
  };
  return (
    <div className="tweetBox">
      <form onSubmit={sendTweet}>
        <div className="tweetBox__input">
          <Avatar src="https://api.adorable.io/avatars/400/43e7b55ece917cd7d98428a18871bd97.png" />
          <input
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setTweetMessage(e.currentTarget.value)
            }
            type="text"
            placeholder="what's happening?"
            value={tweetMessage}
          />
        </div>
        <div className="tweetBox_icons_wrapper">
          <div className="tweetBox_icons">
            <InsertPhotoIcon />
            <PollIcon />
            <SentimentSatisfiedIcon />
            <EventIcon />
          </div>
          <Button className="tweetBox__button" fullWidth={false} type="submit">
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Tweetbox;
