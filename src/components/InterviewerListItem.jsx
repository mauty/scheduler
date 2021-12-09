import React from "react";

import "components/InterviewerListItem.scss";

import classNames from "classnames";

export default function InterviewerListItem(props) {
  const { name, avatar, interviewer, setInterviewer } = props
  // const clickHandler = () => {
  //   setSelectedInterviewer(id)
  // };
  
  let interviewerClasses = classNames("interviewers__item", {
    "interviewers__item--selected": interviewer
  }
  )

  return (
    <li
    onClick={setInterviewer}
    className={interviewerClasses}>
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      />
      {interviewer && name}
    </li>
  )
}
