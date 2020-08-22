import React from "react";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import EventIcon from "@material-ui/icons/Event";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import PollIcon from "@material-ui/icons/Poll";
import "./tweetbox.css";
import { Button, Avatar } from "@material-ui/core";

interface Props {}

const Tweetbox = (props: Props) => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://api.adorable.io/avatars/400/43e7b55ece917cd7d98428a18871bd97.png" />
          <input type="text" placeholder="what's happening?" />
        </div>
        <div className="tweetBox_icons_wrapper">
          <div className="tweetBox_icons">
            <InsertPhotoIcon />
            <PollIcon />
            <SentimentSatisfiedIcon />
            <EventIcon />
          </div>
          <Button className="tweetBox__button" fullWidth={false}>
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Tweetbox;
