import React from "react";

import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import "components/Appointment/styles.scss";

// HOOKS
import useVisualMode from "hooks/useVisualMode";

const Appointment = (props) => {
  // console.log("props from appointment:", props);
  const { id, time, interview, interviewers, bookInterview } = props;

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";

  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);

  function save(name, interviewer) {
    transition(SAVING);
    const interview = {
      student: name,
      interviewer: interviewer
    };
    bookInterview(id, interview).then(() => transition(SHOW));
  };

  return (
    <>
      <Header time={time} />
      <article className="appointment">
        {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
        {mode === SAVING && <Status onAdd={() => transition(SAVING)} message="Saving..." />}
        {mode === SHOW && (
          <Show
            student={interview.student}
            interviewer={interview.interviewer.name}
          />
        )}
        {mode === CREATE && (
          <Form interviewers={interviewers} onCancel={back} onSave={save} />
        )}
      </article>
    </>
  );
};

export default Appointment;
