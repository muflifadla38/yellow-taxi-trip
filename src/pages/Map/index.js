import { useEffect, useState } from "react";
import { showAlert } from "../../utils/helper";
import { tripService } from "../../services/api";
import Map from "../../components/Map";
import Filter from "../../components/Filter";
import Spinner from "../../components/Spinner";

const MapPage = () => {
  const [loading, setLoading] = useState(true);
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetchTrips({
      pickupDate: new Date("2014-01-01"),
      dropoffDate: new Date("2014-01-01"),
      limit: 15,
    });
  }, []);

  const fetchTrips = async (params) => {
    try {
      const { data } = await tripService.getTrips(params);
      setTrips(data);
    } catch (error) {
      showAlert("error", error.response?.data.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-2 mx-auto md:px-4">
      <Filter fetchData={fetchTrips} setLoading={setLoading} />

      <div className="h-[70vh] relative">
        {loading ? <Spinner className="z-[1100]" /> : <Map trips={trips} />}
      </div>
    </div>
  );
};

export default MapPage;
