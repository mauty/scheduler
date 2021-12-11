
export function getAppointmentsForDay(state, day) {
  const resultsArray = [];
  const selectedAppointments = [];
  for (let eachDay of state.days) {
    if (eachDay.name === day) {
      for (let appointment of eachDay.appointments) {
        selectedAppointments.push(appointment)
      }
    }
  }
  for (let appointment of selectedAppointments) {
    resultsArray.push(state.appointments[appointment])
  }
  return resultsArray;
}

export function getInterview(state, interviewObjectFromAppointment) {
  // console.log('interviewObjectFromAppointment',interviewObjectFromAppointment)
  if (interviewObjectFromAppointment === null) {
    return null
  }
  const interviewerId = interviewObjectFromAppointment.interviewer
  const interviewerObject = {interviewer: state.interviewers[interviewerId], student: interviewObjectFromAppointment.student}
  // console.log('interviewerObject', interviewerObject)
  return interviewerObject;
}