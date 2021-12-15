import { useState, useEffect } from "react";
import axios from "axios";


const useApplicationData = () => {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get("api/days"),
      axios.get("api/appointments"),
      axios.get("api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  const updateSpots = (id, appointments) => {
    let spotsRemaining = 0;
    const dayFound = state.days.filter((day) => day.appointments.includes(id))
    for (let day of dayFound) {
      for (let appointment of day.appointments) {
        if (appointments[appointment].interview === null) {
          spotsRemaining++
        }
      }
    }
    const newDay = {...dayFound[0], spots: spotsRemaining}
    return newDay;
  }

  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: {...interview}
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios
    .put(`/api/appointments/${id}`, {interview:appointments[id].interview})
    .then((res) => {
      const newDay = updateSpots(id, appointments)
      const newDays = state.days.map((day) => {
        if (day.id === newDay.id) {
          return newDay
        }
        return day
      })
      setState({
        ...state,
        appointments,
        days:newDays,
      });
    });
  };

  const cancelInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    
    return axios
    .delete(`/api/appointments/${id}`)
    .then((res) => {
      const newDay = updateSpots(id, appointments)
      const newDays = state.days.map((day) => {
        if (day.id === newDay.id) {
          return newDay
        }
        return day
      })
      setState({
        ...state,
        appointments,
        days: newDays,
      });
    });
  };

  return { state, setDay, bookInterview, cancelInterview}
}

export default useApplicationData;