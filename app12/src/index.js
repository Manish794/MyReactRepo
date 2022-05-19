import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import StudentList from './StudentList';

var students = [
  {
  sid: 101,
  sname: 'Rahul',
  email: 'rahul@gmail.com',
  phone: {office: 999999101, home: 888888101},
  addresses: [
      {
          type: "Home",
          aid: "A-101",
          street: "BTM Layout",
          city: "Blore",
          pin: 560099
      },
      {
          type: "Office",
          aid: "A-102",
          street: "White Field",
          city: "Blore",
          pin: 560066
      }
  ]
},
{
  sid: 102,
  sname: 'Manish',
  email: 'manish@gmail.com',
  phone: {office: 999999102, home: 888888102},
  addresses: [
      {
          type: "Home",
          aid: "A-201",
          street: "HSR Layout",
          city: "Hyd",
          pin: 560011
      },
      {
          type: "Office",
          aid: "A-202",
          street: "E City",
          city: "Del",
          pin: 110088
      }
  ]
}
];



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <StudentList data={students}/>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
