import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Student from './Student';

var student = {
  sid: 102,
  sname: 'Rahul',
  email: 'rahul@gmail.com',
  dob: new Date(),
  active: true,
  phones: [1111111, 2222222, 3333333],
  course: {
      cid: "C-001",
      cname: "React JS",
      trainer: "Manish",
      virtual: true
  },
  addresses: [
      {
          type: "Home",
          aid: "A-001",
          street: "BTM Layout",
          city: "Blore",
          pin: 560099
      },
      {
          type: "Office",
          aid: "A-002",
          street: "White Field",
          city: "Blore",
          pin: 560066
      }
  ]
};



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Student data={student}/>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
