function addWeekdaySchedule(calendar, currentDate, endDate, eventName, fromTimeString, toTimeString) {

  console.log("【START】 addWeekdaySchedule");

  let fromTimeArray = fromTimeString.split(":");
  let fromHour = fromTimeArray[0];
  let fromMinute = fromTimeArray[1];
  let toTimeArray = toTimeString.split(":");
  let toHour = toTimeArray[0];
  let toMinute = toTimeArray[1];

  while (currentDate <= endDate) {
    var dayOfWeek = currentDate.getDay();
    var isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5; // 1: Monday, 5: Friday

    if(isWeekday) {
      var startTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), fromHour, fromMinute, 0);
      var endTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), toHour, toMinute, 0);
      calendar.createEvent(eventName, startTime, endTime);
    }

    currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
  }
  console.log("【FINISH】 addWeekdaySchedule");

}

// External API to check if the date is a Japanese holiday
function deleteJapaneseHoliday(calendar) {

  console.log("【START】 deleteJapaneseHoliday");

  // 去年、今年、来年の祝日を取得
  let response = UrlFetchApp.fetch(`https://holidays-jp.github.io/api/v1/date.json`);
  let data = JSON.parse(response.getContentText());
  for (holiday of Object.keys(data)){
    var dateObject = Utilities.parseDate(holiday, "JST", "yyyy-MM-dd");
    var event = calendar.getEventsForDay(dateObject);
    if (event.length === 0) {
      continue;
    }else{         
      event[0].deleteEvent();
    }
  }

  console.log("【FINISH】 deleteJapaneseHoliday");

}

function deleteAllEvent(calendar, startTime, endTime) {

  console.log("【START】 deleteAllEvent");

  const events = calendar.getEvents(startTime, endTime)
 
  for (let i = 0; i < events.length; i++) {
    const event = events[i]
    event.deleteEvent()
  }

  console.log("【FINISH】 deleteAllEvent");
}
