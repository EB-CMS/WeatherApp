import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [location, setLocation] = useState([]);

  //feching data (location datat) using the async function
  const getLoaction = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setError("Permission to access location was denied!");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setLat(location.coords.latitude);
    setLon(location.coords.longitude);
    setLocation(location);
  };

  //fetching data from the OpenWeatherMap API
  const fetchWeatherData = async () => {
    try {
      const result = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      );
      const data = await result.json();
      setWeather(data);
    } catch (e) {
      setError("Couldn't fetch the weather data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLoaction();
    fetchWeatherData();
  }, [lat, lon]);

  return [loading, error, weather];
};
