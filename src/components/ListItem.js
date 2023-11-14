import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import moment from "moment";
import { WeatherType } from "../utilities/WeatherType";

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props;
  const { date, temp, item, dateTextwrapper } = styles;
  return (
    <View style={item}>
      <Feather name={WeatherType[condition]?.icon} size={40} color={"black"} />
      <View style={dateTextwrapper}>
        <Text style={date}>{moment(dt_txt).format("dddd")}</Text>
        <Text style={date}>{moment(dt_txt).format("HH:mm")}</Text>
      </View>

      <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5,
    backgroundColor: "#E0F7FA",
  },
  temp: {
    fontSize: 18,
    fontWeight: "bold",
  },
  date: {
    fontSize: 18,
  },
  dateTextwrapper: {
    flexDirection: "column",
  },
});

export default ListItem;
