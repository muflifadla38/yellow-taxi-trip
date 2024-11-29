import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import Spinner from "./Spinner";
import { tripService } from "../services/api";
import { getMonthNames, showAlert } from "../utils/helper";

const DemandTrendChart = () => {
  const [loading, setLoading] = useState(true);
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {
      const { data } = await tripService.getDemandTrend();
      setTrips(data);
    } catch (error) {
      showAlert("error", error.response?.data.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  const options = {
    title: {
      text: "Monthly Demand Trend",
      align: "center",
    },
    xaxis: {
      type: "category",
      categories: getMonthNames(),
      title: {
        text: "Months",
      },
    },
    yaxis: {
      title: {
        text: "Number of Trips",
      },
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
  };

  const series = [
    {
      name: "Number of Trips",
      data: trips,
    },
  ];

  return (
    <div className="mb-8">
      <div className="h-[500px] relative">
        {loading ? (
          <Spinner className="z-[1100]" />
        ) : (
          <ReactApexChart
            options={options}
            series={series}
            type="line"
            height={500}
            width="100%"
          />
        )}
      </div>
    </div>
  );
};

export default DemandTrendChart;
