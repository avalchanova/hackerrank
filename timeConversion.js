function timeConversion(s) {
  // Write your code here
  // 12:01:00PM

  let m = s.slice(-2);
  let oldTime = s.substring(0, 8);
  //   console.log(m);
  //   console.log(oldTime);

  let [hours, minutes, seconds] = oldTime.split(":");
  hours = Number(hours);
  //   minutes = Number(minutes);
  //   seconds = Number(seconds);
  //   console.log(hours);

  if (m === "PM") {
    if (hours === 12) {
      hours = 12;
    } else {
      hours += 12;
    }
  } else if (m === "AM") {
    if (hours === 12) {
      hours = 0;
    }
  }

  if (hours < 10) {
    hours = "0" + hours;
  }
  let resultTime = hours + ":" + minutes + ":" + seconds;
  return resultTime;
}
timeConversion("01:04:45PM");
