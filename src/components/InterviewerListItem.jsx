import React from "react";

import "components/InterviewerListItem.scss";

import classNames from "classnames";

export default function InterviewerListItem(props) {
  const { id, name, avatar, selectedInterviewer, setSelectedInterviewer } = props
  const clickHandler = () => {
    setSelectedInterviewer(id)
  };
  
  let interviewerClasses = classNames("interviewers__item", {
    "interviewers__item--selected": selectedInterviewer === id
  }
  )

  return (
    <li
    onClick={clickHandler}
    className={interviewerClasses}>
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      />
      {selectedInterviewer === id && name}
    </li>
  )
}
