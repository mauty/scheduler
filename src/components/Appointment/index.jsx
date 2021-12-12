import React from 'react';

import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';
import "components/Appointment/styles.scss";

// HOOKS
import useVisualMode from 'hooks/useVisualMode';



const Appointment = (props) => {
  // console.log(props)
  const { interview, time } = props;
  
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  

  const { mode, transition, back } = useVisualMode(
    interview ? SHOW : EMPTY
  );
  

  
  return (
    <>
      <Header time={time}/>
      <article className="appointment">
        {/* {interview ? <Show student={interview.student} interviewer={interview.interviewer.name}/> : <Empty />} */}
        {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
        {mode === SHOW && (
          <Show
            student={interview.student}
            interviewer={interview.interviewer.name}
          />
        )}
        {mode === CREATE && <Form interviewers={[]} onCancel={back}/>}
      </article>
    </>
  )
}

export default Appointment;