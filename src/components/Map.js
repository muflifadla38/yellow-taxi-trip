import "leaflet/dist/leaflet.css";
import L from "leaflet";
import PropTypes from "prop-types";
import { MapContainer, Polyline, Popup, TileLayer } from "react-leaflet";
import { getRandomColor, formatDate } from "../utils/helper";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Map = ({ trips }) => {
  return (
    <MapContainer
      id="map"
      center={[40.723372, -73.998791]}
      zoom={12}
      zoomControl={true}
      scrollWheelZoom={false}
      style={{ height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {trips.map((trip, index) => (
        <Polyline
          key={index}
          positions={[
            [trip.pickup_latitude, trip.pickup_longitude],
            [trip.dropoff_latitude, trip.dropoff_longitude],
          ]}
          color={getRandomColor()}
          eventHandlers={{
            mouseover: (e) => {
              e.target.openPopup();
            },
            mouseout: (e) => {
              e.target.closePopup();
            },
          }}
        >
          <Popup>
            <b>Vendor {trip.vendor_id}</b>
            <br />
            <b>Pickup Time:</b> {formatDate(trip.pickup_datetime)}
            <br />
            <b>Dropoff Time:</b> {formatDate(trip.dropoff_datetime)}
            <br />
            <b>Distance:</b> {Number(trip.trip_distance).toFixed(2)}{" "}
            miles
            <br />
            <b>Passenger:</b> {trip.passenger_count}
            <br />
            <b>Fare:</b> ${Number(trip.fare_amount).toFixed(2)}
            <br />
            <b>Tax:</b> ${Number(trip.mta_tax).toFixed(2)}
            <br />
            <b>Tip:</b> ${Number(trip.tip_amount).toFixed(2)}
            <br />
            <b>Tolls:</b> ${Number(trip.tolls_amount).toFixed(2)}
            <br />
            <b>Total Amount:</b> ${Number(trip.total_amount).toFixed(2)}
          </Popup>
        </Polyline>
      ))}
    </MapContainer>
  );
};

Map.propTypes = {
  trips: PropTypes.array,
};

export default Map;
