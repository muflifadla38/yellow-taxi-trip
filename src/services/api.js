import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "https://yellow-taxi-trip-api.vercel.app/api/v1";

export const tripService = {
  getTrips: async (params) => {
    const response = await axios.get(`${API_URL}/trips`, {
      params,
    });

    return response.data;
  },

  getDemandTrend: async (params) => {
    const response = await axios.get(`${API_URL}/demand-trend`);
    return response.data;
  },

  getIncomeTrend: async (params) => {
    const response = await axios.get(`${API_URL}/income-trend`);
    return response.data;
  },
};
