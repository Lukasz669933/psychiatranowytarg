const { default: axios } = require("axios");

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

const bookAppointment = (data) => axiosClient.post("/appointments", data);
const getBookingList = (userEmail) =>
  axiosClient.get(
    "/appointments?[filters][Email][$eq]=" + userEmail + "&populate=*"
  );
const deleteBooking = (id) => axiosClient.delete("/appointments/" + id);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  bookAppointment,
  getBookingList,
  deleteBooking,
};
