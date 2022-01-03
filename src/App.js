import React, {useState, useEffect} from 'react';
import moment from 'moment';
import 'moment-timezone';
import { 
  Heading,
  Box,
  Flex,
  Text,
  Input
 } from "@chakra-ui/react";  


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
      <Heading textAlign="center" padding="5vh 0" bg="#D5DBDB">Time-Zone Updating app</Heading>
      <Flex justifyContent="center" align="center">
    <Box  padding="8vh 5%" border="1px solid black" margin="5vh 7%">
      <Heading fontSize="22" marginBottom="1vh">Current Time- IST</Heading>
      <Text>Date : {indianDate}</Text>
      <Text>Time : {TimeIn}</Text>
      <Text fontSize="18" marginTop="1vh"> Enter the time you want to convert 
      <Input width="25%" type="time" onChange={onInputChange}></Input> 
      </Text>
    </Box>

    </Flex>

    <Flex justifyContent="center" align="center">

    <Box  padding="8vh 5%" border="1px solid black" margin="4vh 4%" bg="#f5f6f7">
      <Heading fontSize="22" marginBottom="1vh">US</Heading>
      <Text>Date : {usDate}</Text>
      <Text>Time : {TimeUs}</Text>
    </Box>

    <Box  padding="8vh 5%" border="1px solid black" margin="4vh 4%" bg="#f5f6f7">
      <Heading fontSize="22" marginBottom="1vh">Europe</Heading>
      <Text>Date : {europeDate}</Text>
      <Text>Time : {TimeEu}</Text>
    </Box>

    <Box  padding="8vh 5%" border="1px solid black" margin="4vh 4%" bg="#f5f6f7">
      <Heading fontSize="22" marginBottom="1vh">Bangkok</Heading>
      <Text>Date : {bangkokDate}</Text>
      <Text>Time : {TimeBk}</Text>
    </Box>

    </Flex>

    </>
    
    
  );
}

export default App;
