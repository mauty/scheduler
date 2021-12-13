export function getAppointmentsForDay(state, day) {
  const resultsArray = [];
  const selectedAppointments = [];
  for (let eachDay of state.days) {
    if (eachDay.name === day) {
      for (let appointment of eachDay.appointments) {
        selectedAppointments.push(appointment);
      }
    }
  }
  for (let appointment of selectedAppointments) {
    resultsArray.push(state.appointments[appointment]);
  }
  return resultsArray;
}

export function getInterview(state, interviewObjectFromAppointment) {
  if (interviewObjectFromAppointment === null) {
    return null;
  }
  const interviewerId = interviewObjectFromAppointment.interviewer;
  const interviewerObject = {
    interviewer: state.interviewers[interviewerId],
    student: interviewObjectFromAppointment.student,
  };
  return interviewerObject;
}

export function getInterviewersForDay(state, day) {
  const resultsArray = [];
  const selectedInterviewers = [];
  for (let eachDay of state.days) {
    if (eachDay.name === day) {
      for (let interviewer of eachDay.interviewers) {
        selectedInterviewers.push(interviewer);
      }
    }
  }
  for (let interviewer of selectedInterviewers) {
    resultsArray.push(state.interviewers[interviewer]);
  }
  return resultsArray;
}
