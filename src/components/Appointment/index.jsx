import React from "react";

import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

import "components/Appointment/styles.scss";

// HOOKS
import useVisualMode from "hooks/useVisualMode";

const Appointment = (props) => {
  const { id, time, interview, interviewers, bookInterview, cancelInterview } = props;

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const EDIT = "EDIT";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);

  const save = (name, interviewer) => {
    transition(SAVING);
    const interview = {
      student: name,
      interviewer: interviewer
    };
    bookInterview(id, interview)
      .then(() => transition(SHOW))
      .catch((err) => {
        console.log('err from save', err)
        transition(ERROR_SAVE, true)
      });
  };

  const confirmDelete = () => {
    transition(CONFIRM)
  }

  const deleteAppt = () => {
    transition(DELETING, true);
    const interview = null;
    cancelInterview(id, interview)
      .then(() => transition(EMPTY))
      .catch((err) => transition(ERROR_DELETE, true));
  }

  const edit = () => {
    transition(EDIT);
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
            interviewer={interview.interviewer.name}
            onEdit={edit}
            onDelete={confirmDelete}
          />
        )}
        {mode === CREATE && (
          <Form
          interviewers={interviewers}
          onCancel={back}
          onSave={save} />
        )}
        {mode === EDIT && (
          <Form
          interviewers={interviewers}
          student={interview.student}
          interviewer={interview.interviewer.id}
          onCancel={back}
          onSave={save} />
        )}
        {mode === ERROR_SAVE && <Error onClose={back} message="Drat, there was an error saving your appointment"/>}
        {mode === ERROR_DELETE && <Error onClose={back} message="Drat, there was an error deleting your appointment"/>}
      </article>
    </>
  );
};

export default Appointment;
