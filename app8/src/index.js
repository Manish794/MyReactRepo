import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Student from './Student';
import Student1 from './Student1';
import Student2 from './Student2';
import Student3 from './Student3';

var stud = {
  sid: 102,
  sname: 'Rahul',
  email: 'rahul@gmail.com',
  phone: 88888888
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Student
      sid={101}
      //sname="Manish1"
      phone={12345678}
      buttonValue="Show/Hide"
    />
    <Student
      sid={101}
      sname="Manish"
      email="mansih@gmail.com"
      phone={12345678}
      buttonValue="Show/Hide"
    />

    <Student1
      sid={stud.sid}
      sname={stud.sname}
      phone={stud.phone}
    />

    <Student2
      sid="103"
      sname="Aadi"
      email="aadi@gmail.com"
      phone="7777777" />

    <Student3
      sid="104"
      sname="Manoj"
      email="manoj@gmail.com"
      phone="66666666"
    />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
