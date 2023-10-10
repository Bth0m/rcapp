import { useState, useMemo } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { useQuery } from "react-query";
import "mapbox-gl/dist/mapbox-gl.css";

import { getEvents } from "../api/services";
import Pin from "./pin";

const CustomMap = () => {
  const [popupInfo, setPopupInfo] = useState(null);

  const { data } = useQuery("events", async () => {
    const res = getEvents().then((data) => data);
    return res;
  });

  const pins = useMemo(
    () =>
      data &&
      data.map((event, index) => {
        if (
          event.lng < 90 &&
          event.lng > -90 &&
          event.lat < 90 &&
          event.lat > -90
        ) {
          return (
            <Marker
              key={`marker-${index}`}
              longitude={event.lng}
              latitude={event.lat}
              anchor="bottom"
              onClick={(e) => {
                e.originalEvent.stopPropagation();
                setPopupInfo(event);
              }}
            >
              <Pin />
            </Marker>
          );
        }
      }),
    [data]
  );

  return (
    <Map
      initialViewState={{
        longitude: -51.3789,
        latitude: -22.7558,
        zoom: 6,
      }}
      className="map-container h-screen"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      mapboxAccessToken="pk.eyJ1IjoiZHVtc3RlcjIzIiwiYSI6ImNsaHA4a3JwYjIzcmYzcXBiZHZyMGh6OXgifQ.zIIH-td3JEm8pJplITh9TQ"
    >
      {pins}
      {popupInfo && (
        <Popup
          anchor="top"
          longitude={Number(popupInfo.lng)}
          latitude={Number(popupInfo.lat)}
          onClose={() => setPopupInfo(null)}
        >
          <h1 className="text-black text-center font-extrabold text-base">
            {" "}
            {popupInfo.Country} - {popupInfo.City}
          </h1>
          <div className="my-1 h-0.5 border-t-0  bg-black" />
          <div>
            <span className="text-black font-semibold">AQI Value: </span>
            <span className="text-black text-center">
              {popupInfo["AQI Value"]}
            </span>
          </div>
          <div>
            <span className="text-black font-semibold">AQI Category: </span>
            <span className="text-black text-center">
              {popupInfo["AQI Category"]}
            </span>
          </div>
          <div>
            <span className="text-black font-semibold">CO AQI Value: </span>
            <span className="text-black text-center">
              {popupInfo["CO AQI Value"]}
            </span>
          </div>
          <div>
            <span className="text-black font-semibold">CO AQI Category: </span>
            <span className="text-black text-center">
              {popupInfo["CO AQI Category"]}
            </span>
          </div>
          <div>
            <span className="text-black font-semibold">Ozone AQI Value: </span>
            <span className="text-black text-center">
              {popupInfo["Ozone AQI Value"]}
            </span>
          </div>
          <div>
            <span className="text-black font-semibold">
              Ozone AQI Category:{" "}
            </span>
            <span className="text-black text-center">
              {popupInfo["Ozone AQI Category"]}
            </span>
          </div>
          <div>
            <span className="text-black font-semibold">NO2 AQI Value: </span>
            <span className="text-black text-center">
              {popupInfo["NO2 AQI Value"]}
            </span>
          </div>
          <div>
            <span className="text-black font-semibold">NO2 AQI Category: </span>
            <span className="text-black text-center">
              {popupInfo["NO2 AQI Category"]}
            </span>
          </div>
          <div>
            <span className="text-black font-semibold">PM2.5 AQI Value: </span>
            <span className="text-black text-center">
              {popupInfo["PM2.5 AQI Value"]}
            </span>
          </div>
          <div>
            <span className="text-black font-semibold">
              PM2.5 AQI Category:{" "}
            </span>
            <span className="text-black text-center">
              {popupInfo["PM2.5 AQI Category"]}
            </span>
          </div>
          <div>
            {popupInfo?.comment && (
              <>
                <span className="text-black font-semibold">Comment: </span>
                <span className="text-black text-center">
                  {popupInfo?.comment}
                </span>
              </>
            )}
          </div>
        </Popup>
      )}
    </Map>
  );
};

export default CustomMap;
