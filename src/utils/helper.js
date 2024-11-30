import Swal from "sweetalert2";

export const getRandomColor = () => {
  const letters = "0123456789ABCDEF".split("");
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }

  return color;
};

export const getMonthNames = () => {
  return [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
};

export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

export const formatLocalDateTime = (date) => {
  return date
    .toLocaleString("sv", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      fractionalSecondDigits: 3,
    })
    .replace(" ", "T")
    .replace(",", ".");
};

export const showAlert = (status, message) => {
  const isError = status !== 200;

  return Swal.fire({
    icon: isError ? "error" : "success",
    title: isError ? "Oops!" : "Success!",
    text: message,
  });
};
