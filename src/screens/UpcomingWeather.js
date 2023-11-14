import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
  ImageBackground,
} from "react-native";
import ListItem from "../components/ListItem";

//Testing Data
/*const DATA = [
  {
    dt_txt: "2022-08-28 15:00:00",
    main: {
      temp_min: 27.84,
      temp_max: 32.45,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },

  {
    dt_txt: "2022-08-29 15:00:00",
    main: {
      temp_min: 17.55,
      temp_max: 19.55,
    },
    weather: [
      {
        main: "Clear",
      },
    ],
  },
  {
    dt_txt: "2022-08-30 15:00:00",
    main: {
      temp_min: 26.84,
      temp_max: 29.45,
    },
    weather: [
      {
        main: "Cloud",
      },
    ],
  },
];*/

const UpcomingWeather = ({ weatherData }) => {
  //function
  const renderItem = ({ item }) => {
    return (
      <ListItem
        condition={item.weather[0].main}
        dt_txt={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max}
      />
    );
  };
  const { container, image } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/upcomingweather-background.jpg")}
        style={image}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.current || 0,
    backgroundColor: "tomato",
  },
  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
