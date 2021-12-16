import React from "react";
import PropTypes from "prop-types";

import InterviewerListItem from "./InterviewerListItem";

import "components/InterviewerList.scss";


const InterviewerList = (props) => {
  const { interviewers, selectedInterviewer, setInterviewer } = props;

  const interviewerComponentArray = interviewers.map((interviewer) => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        interviewer={interviewer.id === selectedInterviewer}
        setInterviewer={() => setInterviewer(interviewer.id)}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewerComponentArray}</ul>
    </section>
  );

};

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired,
  selectedInterviewer: PropTypes.number,
  setInterviewer: PropTypes.func,
};

export default InterviewerList;
