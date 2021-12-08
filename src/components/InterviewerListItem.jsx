import React, {useState} from "react";

import "components/InterviewerListItem.scss";

import classNames from "classnames";

export default function InterviewerListItem(props) {
  const { id, name, avatar } = props
  const [selectedInterviewer, setSelectedInterviewer] = useState(0)
  const handleClick = () => {
    setSelectedInterviewer(id)
    console.log('selectedInterviewer', selectedInterviewer);
  };
  console.log('before classnames', selectedInterviewer, id)
  let interviewerClasses = classNames("interviewers__item", {
    "interviewers__item--selected": selectedInterviewer === id
  }
  )
  console.log('interviewerClasses:', interviewerClasses)

  return (
    <li
    onClick={handleClick}
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
