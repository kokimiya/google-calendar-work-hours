function main() {
  const calendarId = '';
  let calendar = CalendarApp.getCalendarById(calendarId);

  let startDate = new Date('2023-12-25');
  let endDate = new Date('2024-01-01');

  let eventName = "起動時間"
  let fromTimeString = "10:00"
  let toTimeString = "22:30"

  // startDateからendDateまでの予定を全て削除する
  deleteAllEvent(calendar, startDate, endDate);

  // startDateからendDateまでの平日に予定を入れる
  addWeekdaySchedule(calendar, startDate, endDate, eventName, fromTimeString, toTimeString);

  // startDateからendDateまでの祝日に予定がある場合、削除する
  deleteJapaneseHoliday(calendar);
}