import React, { useState } from "react";

import Button from "components/Button";
import InterviewerList from "components/InterviewerList";

const Form = (props) => {
  const { interviewers, student: defaultName, interviewer: selectedInterviwer, onSave, onCancel } = props;
  const [student, setStudent] = useState(defaultName || "");
  const [interviewer, setInterviewer] = useState(selectedInterviwer || null);

  const reset = () => {
    setStudent("");
    setInterviewer(null);
  };

  const cancel = () => {
    reset();
    onCancel();
  };

  const save = () => {
    onSave(student, interviewer)
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name={student}
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(event) => setStudent(event.target.value)}
          />
        </form>
        <InterviewerList
          interviewers={interviewers}
          selectedInterviewer={interviewer}
          setInterviewer={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>
            Cancel
          </Button>
          <Button confirm onClick={save}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
};

export default Form;
