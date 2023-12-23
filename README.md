# About
Googleカレンダーに、平日の予定を繰り返し入力するGoogle Apps Script(GAS)
  
外部API(Holidays JP API)を利用して、日本の祝日を取得しています。  
去年・今年・来年のデータしか取得できないので注意してください。

# Development
Follow this guide to set up your environment etc.

## main.gs
1. calendarIdに、GoogleカレンダーIDを記入してください。
```
  let calendar = CalendarApp.getCalendarById('GoogleカレンダーID');
```

2. startDateとendDateに、予定を入れる日付の範囲を記入してください。
```
  let startDate = new Date('YYYY-MM-DD');
  let endDate = new Date('YYYY-MM-DD');
```

3. eventNameに、予定のタイトルを入力してください。
```
  let eventName = "起動時間"
```

4. fromTimeStringとtoTimeStringに予定の時間を入力してください。
```
  let fromTimeString = "hh:mm"
  let toTimeString = "hh:mm"
```
# External API
https://holidays-jp.github.io/api/v1/date.json

# Technology used
Google Apps Script(GAS)