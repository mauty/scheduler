import React from "react";

import "components/DayListItem.scss";

import classNames from "classnames";

export default function DayListItem(props) {
  const {name, spots, selected, setSelectedDay} = props
  const handleClick = () => setSelectedDay(name)
  let dayClasses = classNames("day-list__item", {
    "day-list__item--selected": selected === name,
    "day-list__item--full": (spots === 0)
  });

  const formatSpots = (spots) => {
    if (spots === 0) {
      return 'no spots remaining'
    }
    if (spots === 1) {
      return '1 spot remaining'
    }
    return spots + ' spots remaining'
  }

  return (
    <li onClick={handleClick} className={dayClasses}>
      <h2 className="text--regular">{name}</h2> 
      <h3 className="text--light">{formatSpots(spots)}</h3>
    </li>
  );
}