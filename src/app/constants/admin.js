export const COLUMNS = [
  {
    name: "Country",
    selector: (row) => row.Country,
  },
  {
    name: "City",
    selector: (row) => row.City,
  },
  {
    name: "AQI Value",
    selector: (row) => row["AQI Value"],
  },
  {
    name: "AQI Category",
    selector: (row) => row["AQI Category"],
  },
  {
    name: "CO AQI Value",
    selector: (row) => row["CO AQI Value"],
  },
  {
    name: "CO AQI Category",
    selector: (row) => row["CO AQI Category"],
  },
  {
    name: "Ozone AQI Value",
    selector: (row) => row["Ozone AQI Value"],
  },
  {
    name: "Ozone AQI Category",
    selector: (row) => row["Ozone AQI Category"],
  },
  {
    name: "NO2 AQI Value",
    selector: (row) => row["Ozone AQI Value"],
  },
  {
    name: "NO2 AQI Category",
    selector: (row) => row["NO2 AQI Category"],
  },
  {
    name: "PM2.5 AQI Value",
    selector: (row) => row["PM2.5 AQI Value"],
  },
  {
    name: "PM2.5 AQI Category",
    selector: (row) => row["PM2.5 AQI Category"],
  },
  {
    name: "Comment",
    selector: (row) => row.comment,
  },
];
