import React from 'react';
import InterviewerListItem from './InterviewerListItem';

// import "/components/InterviewerListItem.scss";
import "/components/InterviewerList.scss";

export default function InterviewerList(props) {
  
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        <InterviewerListItem />
      </ul>
    </section>
  )
}
