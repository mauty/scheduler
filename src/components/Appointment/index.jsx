import React from 'react';

import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import "components/Appointment/styles.scss";

const Appointment = (props) => {
  
  return (
    <>
      <Header />
      <article className="appointment">
        <h2>{props.time}</h2>
      </article>
    </>
  )
}

export default Appointment;