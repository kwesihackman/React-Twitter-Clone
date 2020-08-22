import React from "react";
import Icon from "@mdi/react";
import "./post.css";
import { Avatar } from "@material-ui/core";
import {
  mdiCheckDecagram,
  mdiTwitterRetweet,
  mdiHeartOutline,
  mdiHeart,
  mdiUpload,
  mdiCommentOutline,
} from "@mdi/js";

interface Props {
  displayName?: string;
  username?: string;
  verified?: boolean;
  timestamp?: string;
  text?: string;
  avatar?: string;
  image?: string;
}

const Post: React.FC<Props> = ({
  displayName,
  username,
  verified,
  timestamp,
  image,
  avatar,
  text,
}) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <span className="post__displayName">{displayName}</span>
            {verified && (
              <span>
                <Icon
                  path={mdiCheckDecagram}
                  title="Verified"
                  size={0.5}
                  color="#1da1f2"
                  style={{ alignSelf: "center" }}
                />
              </span>
            )}
            <span className="post_headerUsername">{username}</span>
          </div>
          <div className="post__headerDescription">
            BUilding twitter clone awesome
          </div>
        </div>
        <div className="post__image">
          {image && <img src={image} alt={displayName} />}
        </div>
        <div className="post__footer">
          <Icon
            path={mdiCommentOutline}
            title="comment"
            size={0.7}
            color="#F2F6FF"
          />

          <Icon
            path={mdiTwitterRetweet}
            title="retweet"
            size={0.9}
            color="#F2F6FF"
          />

          <Icon
            path={mdiHeartOutline}
            title="like"
            size={0.7}
            color="#F2F6FF"
          />

          <Icon path={mdiUpload} title="share" size={0.7} color="#F2F6FF" />
        </div>
      </div>
    </div>
  );
};

export default Post;
