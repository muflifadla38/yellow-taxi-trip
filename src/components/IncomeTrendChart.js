import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import Spinner from "./Spinner";
import { tripService } from "../services/api";
import { getMonthNames, showAlert } from "../utils/helper";

const IncomeTrendChart = () => {
  const [loading, setLoading] = useState(true);
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    fetchIncomes();
  }, []);

  const fetchIncomes = async () => {
    try {
      const { data } = await tripService.getIncomeTrend();
      setIncomes(data);
    } catch (error) {
      showAlert("error", error.response?.data.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    title: {
      text: "Monthly Income Trend",
      align: "center",
    },
    xaxis: {
      type: "category",
      categories: getMonthNames(),
      title: {
        text: "Amount Total",
      },
    },
    yaxis: {
      title: {
        text: "Months",
      },
    },
  };

  const series = [
    {
      name: "Total Amount",
      data: incomes,
    },
  ];

  return (
    <div>
      <div className="h-[500px] relative">
        {loading ? (
          <Spinner className="z-[1100]" />
        ) : (
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={500}
            width="100%"
          />
        )}
      </div>
    </div>
  );
};

export default IncomeTrendChart;
