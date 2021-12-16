import React from "react";

import "components/DayListItem.scss";

import classNames from "classnames";

const DayListItem = function (props) {
  const { name, spots, selectedDay, setSelectedDay } = props;

  const clickHandler = () => setSelectedDay(name);

  const dayClasses = classNames("day-list__item", {
    "day-list__item--selected": selectedDay,
    "day-list__item--full": spots === 0,
  });

  const formatSpots = (spots) => {
    if (spots === 0) {
      return "no spots remaining";
    }
    if (spots === 1) {
      return "1 spot remaining";
    }
    return `${spots} spots remaining`;
  };

  return (
    <li onClick={clickHandler} className={dayClasses} data-testid='day'>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots(spots)}</h3>
    </li>
  );
};


export default DayListItem;
