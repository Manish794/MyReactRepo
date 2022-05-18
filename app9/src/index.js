import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Student from './Student';

var stud = {
  sid: 102,
  sname: 'Rahul',
  email: 'rahul@gmail.com',
  phone: 88888888
};

const sid = 104;
const sname = "Aadi";
const email = "aadi@gmail.com";
const phone = 9191991;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>

    <Student
      sid="103"
      sname="Aadi"
      email="aadi@gmail.com"
      phone="7777777" />

    <Student
      sid={stud.sid}
      sname={stud.sname}
      email={stud.email}
      phone={stud.phone}
    />

    <Student {...stud} />

    <Student {...stud} phone={11111111} />

    <Student phone={22222222} {...stud} />

    <Student {...{ sid, sname, email, phone }} />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
