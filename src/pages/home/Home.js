import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../data";
import WidgetSmall from "../../components/widgetsmall/WidgetSmall";
import WidgetLarge from "../../components/widgetLarge/WidgetLarge";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        datakey="Active User"
      />
      <div className="homeWidgets">
          <WidgetSmall />
          <WidgetLarge />
      </div>
    </div>
  );
};

export default Home;
