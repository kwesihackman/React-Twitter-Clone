import React from "react";
import "./sideoption.css";

type Props = {
  Icon: Function;
  text: string;
};

const SideOption: React.FC<Props> = ({ text, Icon }) => {
  return (
    <div className="sidebarOption">
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default SideOption;
