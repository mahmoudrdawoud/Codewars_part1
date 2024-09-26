// 8 kyu 
// L1: Set Alarm


function setAlarm(employed, vacation) {
  return employed && !vacation;
}

console.log(setAlarm(true, false));