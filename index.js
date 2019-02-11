$(document).ready( () => {
   let timezone = 'America/Los_Angeles' // or we can get the local timezone and pass it in the tz let timezone = moment.tz.guess()

    let utcTimeDisplay = () => {
       
    let unixTime = Date.now()  

    let utcDate = moment.utc().format('DD MMM YYYY')
    
    let utcTime = moment.utc().format('HH:mm:ss')
    
    let localTime = moment().tz(timezone).format('HH:mm:ss')

    let localDate = moment().tz(timezone).format('DD MMM YYYY')

    $('#utc_date').text(utcDate)
    $('#utc_time').text(utcTime)
    $('#unix_time').text(Math.ceil(unixTime/1000))
    $('#local_date').text(localDate)
    $('#local_time').text(localTime)
    $('#local_timezone').text(timezone)
     setTimeout(utcTimeDisplay,250)
   }
   utcTimeDisplay();
   let unixTime = Date.now()
   unixTime = Math.ceil(unixTime/1000)
   $('#millis').text(unixTime)
  
  $("#seconds").keyup(function(event) {
    let sec = $(this).val()
    let value = sec
    let utcDateTime = moment.unix(value)
    utcDateTime = moment(utcDateTime).add('8','hours')
    let localDateTime = moment.unix(value).tz(timezone).format('MMMM DD YYYY HH:mm:ss')
    utcDateTime = utcDateTime.format('MMMM DD YYYY HH:mm:ss')
    $("#utc_date_time").val(utcDateTime)
    $("#local_date_time").val(localDateTime)
  });
 
   
  $('#utc-vs-gmt-complex').text(utcVsGmtComplex)
  
  let year, month, day, hour, minute, second
  year = month = day = hour =minute =second = 0
  $("#local-year").keyup(function(event) {
    year = $(this).val()
    $("#milli-since-epoch").val(Math.ceil(moment().year(year).month(month).date(day).hour(hour).minutes(minute).second(second).valueOf()/1000))
  });
  $("#local-month").keyup(function(event) {
    month = $(this).val()
    $("#milli-since-epoch").val(Math.ceil(moment().year(year).month(month).date(day).hour(hour).minutes(minute).second(second).valueOf()/1000))
  });
  $("#local-day").keyup(function(event) {
    day = $(this).val()
    $("#milli-since-epoch").val(Math.ceil(moment().year(year).month(month).date(day).hour(hour).minutes(minute).second(second).valueOf()/1000))
  });
  $("#local-hour").keyup(function(event) {
    hour = $(this).val()
    $("#milli-since-epoch").val(Math.ceil(moment().year(year).month(month).date(day).hour(hour).minutes(minute).second(second).valueOf()/1000))
  });
  $("#local-minutes").keyup(function(event) {
    minute = $(this).val()
    $("#milli-since-epoch").val(Math.ceil(moment().year(year).month(month).date(day).hour(hour).minutes(minute).second(second).valueOf()/1000))
  });
  $("#local-seconds").keyup(function(event) {
    second = $(this).val()
    $("#milli-since-epoch").val(Math.ceil(moment().year(year).month(month).date(day).hour(hour).minutes(minute).second(second).valueOf()/1000))
  });


})