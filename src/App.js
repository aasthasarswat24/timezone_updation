import React, {useState, useEffect} from 'react';
import moment from 'moment';
import 'moment-timezone';
import './App.css';

const date = new Date();
console.log(date)

const india = moment().tz( "Asia/Kolkata");
const indianDate = `${india.date()}/${india.month()}/${india.year()}`
const indianTime = `${india.hour()}:${india.minute()}`

const us = moment().tz( "America/Adak");
const usDate = `${us.date()}/${us.month()}/${us.year()}`
const usTime = `${us.hour()}:${us.minute()}`

const europe = moment().tz( "Europe/Zurich");
const europeDate = `${europe.date()}/${europe.month()}/${europe.year()}`
const europeTime = `${india.hour()}:${europe.minute()}`

const bangkok = moment().tz( "Asia/Bangkok");
const bangkokDate = `${bangkok.date()}/${bangkok.month()}/${bangkok.year()}`
const bangkokTime = `${bangkok.hour()}:${bangkok.minute()}`



function App() {

  const [TimeIn, setTime] = useState(indianTime)
  const [TimeUs, setTimeUs] = useState(usTime)
  const [TimeEu , setTimeEu] = useState(europeTime)
  const [TimeBk ,  setTimeBk] = useState(bangkokTime)

  useEffect(()=>{
    console.log(TimeIn);
    setTimeUs((TimeUs)=>{
      const update1 = `${+TimeUs.split(':')[0] +1 } : ${+TimeUs.split(':')[1] +10}`
      return update1
    });
    setTimeEu((TimeEu)=>{
      const update2 = `${+TimeEu.split(':')[0] +1 } : ${+TimeEu.split(':')[1] +10}`
      return update2
    });
    setTimeBk((TimeBk)=>{
      const update3 = `${+TimeBk.split(':')[0] +1 } : ${+TimeBk.split(':')[1] +10}`
      return update3
    })
  },[TimeIn])
  
  const onInputChange=(event)=>{
    setTime(event.target.value)
  }

  return (
    <>
    <div className = "main">
    <div className = "crd">
      <h2>Current Time- IST</h2>
      <h3>Date : {indianDate}</h3>
      <h3>Time : {TimeIn}</h3>
      <h3> Enter the time you want to convert <input type="time" onChange={onInputChange}></input> </h3>
    </div>

    <div className = "crd">
      <h2>US</h2>
      <h3>Date : {usDate}</h3>
      <h3>Time : {TimeUs}</h3>
    </div>

    </div>

    <div className = "main">
    <div className = "crd">
      <h2>Europe</h2>
      <h3>Date : {europeDate}</h3>
      <h3>Time : {TimeEu}</h3>
    </div>
    <div className = "crd">
      <h2>Bangkok</h2>
      <h3>Date : {bangkokDate}</h3>
      <h3>Time : {TimeBk}</h3>
    </div>

    </div>
    </>
  );
}

export default App;
