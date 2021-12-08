import React from 'react'

import "components/Appointment/styles.scss";

const Appointment = (props) => {
  
  return (
    <article className="appointment">
      <h2>I'm an appointment {props.time}</h2>
    </article>
  )
}

export default Appointment;