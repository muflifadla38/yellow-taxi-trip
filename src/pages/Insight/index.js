import DemandTrendChart from "../../components/DemandTrendChart";
import IncomeTrendChart from "../../components/IncomeTrendChart";

const InsightPage = () => {
  return (
    <div className="md:flex md:gap-6">
      <div className="md:w-1/2">
        <DemandTrendChart />
      </div>
      <div className="md:w-1/2">
        <IncomeTrendChart />
      </div>
    </div>
  );
};

export default InsightPage;
