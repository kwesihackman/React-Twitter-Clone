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

import "./sidebar.css";
import SideOption from "./SideOption";

interface Props {}

const Sidebar = (props: Props) => {
  return (
    <div>
      <TwitterIcon />
      <SideOption text="Home" Icon={HomeIcon} />
      <SideOption text="Explore" Icon={SearchIcon} />
      <SideOption text="Notifications" Icon={NotificationsNoneIcon} />
      <SideOption text="Messages" Icon={MailOutlineIcon} />
      <SideOption text="Bookmarks" Icon={BookmarkBorderIcon} />
      <SideOption text="Lists" Icon={ListAltIcon} />
      <SideOption text="Profile" Icon={PermIdentityIcon} />
      <SideOption text="More" Icon={MoreHorizIcon} />
      {/* tweet  */}
    </div>
  );
};

export default Sidebar;
