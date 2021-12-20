import React, { useState } from "react";

import Button from "components/Button";
import InterviewerList from "components/InterviewerList";

const Form = (props) => {
  const { interviewers, student: defaultName, interviewer: selectedInterviwer, onSave, onCancel } = props;
  const [student, setStudent] = useState(defaultName || "");
  const [interviewer, setInterviewer] = useState(selectedInterviwer || null);
  const [error, setError]= useState('');

  const reset = () => {
    setStudent("");
    setError("")
    setInterviewer(null);
  };

  const cancel = () => {
    reset();
    onCancel();
  };

  const validate = () => {
    if (student === "") {
      setError("Student name cannot be blank");
      return;
    }
    if (interviewer === null) {
      setError("You must select an interviewer");
      return;
    }
    setError("")
    onSave(student, interviewer);
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
            data-testid="student-name-input"
            value={student}
            onChange={(event) => setStudent(event.target.value)}
          />
        </form>
        <section className="appointment__validation">{error}</section>
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
          <Button confirm onClick={validate}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
};

export default Form;
