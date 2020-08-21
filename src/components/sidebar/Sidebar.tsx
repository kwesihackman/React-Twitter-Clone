import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ListAltIcon from "@material-ui/icons/ListAlt";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import SideOption from "./SideOption";
import { Button } from "@material-ui/core";
import "./sidebar.css";

interface Props {}

const Sidebar = (props: Props) => {
  return (
    <div>
      <TwitterIcon />
      <SideOption active={true} text="Home" Icon={HomeIcon} />
      <SideOption active={false} text="Explore" Icon={SearchIcon} />
      <SideOption
        active={false}
        text="Notifications"
        Icon={NotificationsNoneIcon}
      />
      <SideOption active={false} text="Messages" Icon={MailOutlineIcon} />
      <SideOption active={false} text="Bookmarks" Icon={BookmarkBorderIcon} />
      <SideOption active={false} text="Lists" Icon={ListAltIcon} />
      <SideOption active={false} text="Profile" Icon={PermIdentityIcon} />
      <SideOption active={false} text="More" Icon={MoreHorizIcon} />
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
};

export default Sidebar;
