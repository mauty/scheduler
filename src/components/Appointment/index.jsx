import React from 'react';

import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import "components/Appointment/styles.scss";

const Appointment = (props) => {
  console.log(props)
  const { id, interview, time } = props;
  return (
    <>
      <Header time={time}/>
      <article className="appointment">
        {interview ? <Show student={interview.student} interviewer={interview.interviewer.name}/> : <Empty />}
      </article>
    </>
  )
}

export default Appointment;