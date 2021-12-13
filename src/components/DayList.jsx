import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const { days, selectedDay, setSelectedDay } = props;
  const dayListArray = days.map((thisDay) => (
    <DayListItem
      key={thisDay.id}
      name={thisDay.name}
      spots={thisDay.spots}
      selectedDay={thisDay.name === selectedDay}
      setSelectedDay={setSelectedDay}
    />
  ));
  return <ul>{dayListArray}</ul>;
}
