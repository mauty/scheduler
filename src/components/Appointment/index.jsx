import React from "react";

import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";

import "components/Appointment/styles.scss";

// HOOKS
import useVisualMode from "hooks/useVisualMode";

const Appointment = (props) => {
  // console.log("props from appointment:", props);
  const { id, time, interview, interviewers, bookInterview, cancelInterview } = props;

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFRIM";

  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);

  function save(name, interviewer) {
    transition(SAVING);
    const interview = {
      student: name,
      interviewer: interviewer
    };
    bookInterview(id, interview).then(() => transition(SHOW));
  };

function confirmDelete() {
  transition(CONFIRM)
}

  function deleteAppt() {
    transition(DELETING);
    const interview = null;
    cancelInterview(id, interview).then(() => transition(EMPTY));
  }

  return (
    <>
      <Header time={time} />
      <article className="appointment">
        {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
        {mode === SAVING && <Status onAdd={() => transition(SAVING)} message="Saving..." />}
        {mode === DELETING && <Status onAdd={() => transition(DELETING)} message="Deleting..." />}
        {mode === CONFIRM && <Confirm onConfirm={deleteAppt} onCancel={back} message="Are you Sure?" />}
        {mode === SHOW && (
          <Show
            student={interview && interview.student}
            interviewer={interview && interview.interviewer.name}
            onDelete={confirmDelete}
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
