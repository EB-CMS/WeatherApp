import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { WeatherType } from "../utilities/WeatherType";

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
  } = styles;

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;
  const weatherCondition = weather[0]?.main;
  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: WeatherType[weatherCondition]?.backgroundcolor },
      ]}
    >
      <View style={container}>
        <Feather
          name={WeatherType[weatherCondition]?.icon}
          size={100}
          color="white"
        />
        <Text style={tempStyles}>{`${Math.round(temp)}°C`}</Text>
        <Text style={feels}>{`Feels like ${Math.round(feels_like)}°`}</Text>
        <RowText
          containerStyles={highLowWrapper}
          messageOne={`High: ${Math.round(temp_max)}° `}
          messageTwo={`Low: ${Math.round(temp_min)}°`}
          messageTwoStyles={highLow}
          messageOneStyles={highLow}
        />
      </View>
      <RowText
        containerStyles={bodyWrapper}
        messageOne={weather[0]?.description}
        messageTwo={WeatherType[weatherCondition]?.message}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tempStyles: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    color: "black",
    fontSize: 30,
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 10,
  },
  description: {
    fontSize: 45,
  },
  message: {
    fontSize: 26,
  },
});

export default CurrentWeather;
