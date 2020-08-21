import React from "react";
import "./sideoption.css";

type Props = {
  Icon: Function;
  text: string;
  active: boolean;
};

const SideOption: React.FC<Props> = ({ text, Icon, active }) => {
  return (
    <div className={`sidebarOption ${active ? "sidebarOption--active" : ""}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default SideOption;
