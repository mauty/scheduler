import React from "react";

import "components/InterviewerListItem.scss";

import classNames from "classnames";

export default function InterviewerListItem(props) {
  const { name, avatar, selectedInterviewer, setSelectedInterviewer } = props
  // const clickHandler = () => {
  //   setSelectedInterviewer(id)
  // };
  
  let interviewerClasses = classNames("interviewers__item", {
    "interviewers__item--selected": selectedInterviewer
  }
  )

  return (
    <li
    onClick={setSelectedInterviewer}
    className={interviewerClasses}>
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      />
      {selectedInterviewer && name}
    </li>
  )
}
