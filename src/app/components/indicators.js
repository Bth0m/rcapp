"use client";
import { useQuery } from "react-query";

const Indicators = () => {
  const { data, status, error } = useQuery("myData", async () => {
    const lat = -34.6156548;
    const lng = -58.5156993;
    const apiKey = "fff42c7dd12ea716fd256c8175763054";

    const res = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => data);

    return res?.current;
  });

  return (
    <div className="h-16 w-full flex items-center justify-between absolute z-10 bg-black">
      <span className=" ml-4 text-white"> CLIMATE INSIGHT</span>
      <div className="mr-4">
        <span className="mr-4 px-2 border-r-2 text-white ">BUENOS AIRES </span>
        <span className="mr-4 px-2 border-r-2 text-xs text-white">
          Temperature: {data?.temp}K
        </span>
        <span className="mr-4 pr-2 border-r-2 text-xs text-white">
          Pressure: {data?.pressure}hPa
        </span>
        <span className="mr-4 pr-2 border-r-2 text-xs text-white">
          Humidity: {data?.humidity}%
        </span>
        <span className="mr-4 pr-2 border-r-2 text-xs text-white">
          UV: {data?.uvi}
        </span>
        <span className="text-xs text-white">
          Wind speed: {data?.wind_speed}metre/sec
        </span>
      </div>
    </div>
  );
};

export default Indicators;
