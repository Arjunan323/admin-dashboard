import React from "react";
import "./topbar.css";

import { NotificationsNone, Language , Settings} from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
          <span className="logo">ADMIN</span>
        </div>
        <div className="topRight">
          <div className="topbarIconConationer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconConationer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconConationer">
            <Settings />
          </div>

          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
