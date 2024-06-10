import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";

export default function Homepage() {
  return (
    <div className="home">
      <FeaturedInfo />
      {/* <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      /> */}
      <div className="homeWidgets">
        {/* <WidgetSm />
        <WidgetLg /> */}
      </div>
    </div>
  );
}
