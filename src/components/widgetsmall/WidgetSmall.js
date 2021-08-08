import { Visibility } from "@material-ui/icons";
import React from "react";
import "./widgetsmall.css";

const WidgetSmall = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widigetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Anna Kellar</span>
            <span className="widgetSmUserTitle">Software Enginner</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widigetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Anna Kellar</span>
            <span className="widgetSmUserTitle">Software Enginner</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widigetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Anna Kellar</span>
            <span className="widgetSmUserTitle">Software Enginner</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widigetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Anna Kellar</span>
            <span className="widgetSmUserTitle">Software Enginner</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widigetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Anna Kellar</span>
            <span className="widgetSmUserTitle">Software Enginner</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSmall;
