// all code created by Angela A. DeFrancesco
// email me @ angelad@email.com

function leap_year(year) {
  if (year%4 == 0)
    return 1 ;
  else
   return 0 ;
}

function get_incr(year) {
  if (year > 1995)
    return 1 ;
  else
    return -1 ;
}

function get_days_in_month(month,year) {
  if (month < 1 || month > 12)
    return 0 ;
  switch (month) {
    case 4: case 6: case 9: case 11:
      return 30 ;
    case 2:
      if (leap_year(year))
        return 29 ;
      else
        return 28 ;
    default:
      return 31 ;
  }
}

function dates(month,year) {
  ival = get_incr(year) ;
  curr_days = 0 ;
  for (var i=1995; i!=year; i+=ival) {
    if (leap_year(i))
      curr_days = curr_days + 366 ;
    else
      curr_days = curr_days + 365 ;
  }
  for (var j=1; j<month; j++)
    curr_days = curr_days + get_days_in_month(j,year) ;
  return curr_days ;
}

var weekday = new Array() ;
weekday[0] = "Sat" ;
weekday[1] = "Sun" ;
weekday[2] = "Mon" ;
weekday[3] = "Tues" ;
weekday[4] = "Weds" ;
weekday[5] = "Thur" ;
weekday[6] = "Fri" ;
weekday[7] = "Sat" ;

function get_first_day(month,year) {
  var first = dates(month,year) ;
  return (first%7 + 1) ;
}

function get_last_day(month,year) {
  var last = dates(month,year) ;
  return (last + get_days_in_month(month,year))%7 ;
}

function get_month(month) {
  switch (month) {
    case 1:
      return "J a n u a r y" ;
    case 2:
      return "F e b r u a r y" ;
    case 3:
      return "M a r c h" ;
    case 4:
      return "A p r i l" ;
    case 5:
      return "M a y" ;
    case 6:
      return "J u n e" ;
    case 7:
      return "J u l y" ;
    case 8:
      return "A u g u s t" ;
    case 9:
      return "S e p t e m b e r" ;
    case 10:
      return "O c t o b e r" ;
    case 11:
      return "N o v e m b e r" ;
    case 12:
      return "D e c e m b e r" ;
    default:
      return "Unknown" ;
  }
}

var today = new Date() ;
var todays_date = today.getDate() ;
var todays_month = get_month(today.getMonth() + 1);
var todays_year = today.getYear() ;
if (navigator.appName == "Netscape")
  todays_year += 1900 ;

function getWeeks(month,year) {
  var days = get_days_in_month(month,year) ;
  var firstday = get_first_day(month,year) ;
  var lastday = get_last_day(month,year) ;
  var weeks = days ;
  if (firstday != 1)
    weeks = weeks + (firstday-1) ;
  if (lastday != 0)
    weeks = weeks + (7-lastday) ;
  weeks = Math.round(weeks/7) ;
  return weeks ;
}

function search(month,year,date) {
  var statement = "" ;
  var current = 0 ;
  if ((month == today.getMonth() + 1) && year == todays_year)
    current = 1 ;

  if (current && date == todays_date)
    statement += "<TD HEIGHT=40 BACKGROUND=\"images/today.gif\"><SMALL><B>" ;
  else
    statement += "<TD HEIGHT=40><SMALL><B>" ;

  for (var q=0; q<=event_number; q++) {
    if (date == events_list[q].start && get_month(month) == events_list[q].month && year == events_list[q].year) {
      statement += "<FONT COLOR=RED>" ;
      break ;
    }
    else if (events_list[q].start != events_list[q].end) {
      for (var l=events_list[q].start; l<=events_list[q].end; l++) {
        if ((date == l) && get_month(month) == events_list[q].month && year == events_list[q].year) {
          statement += "<FONT COLOR=RED>" ;
          break ;
        }
      }
    }
  }
  
  for (var r=0; r<=holiday_number; r++) {
    if (date == holiday_list[r].edate && get_month(month) == holiday_list[r].month) {
      statement += "<FONT COLOR=RED>" ;
      break ;
    }
  }
  statement += date + "</TD>" ;
  return statement ;
}

function write_month(month,year) {
  var statement = "" ;
  var blanks = (dates(month,year))%7;
  var days_in_month = get_days_in_month(month,year) ;
  var this_month = get_month(month) ;
  var week_num = getWeeks(month,year) ;
  var k = 1 ;
  var m = 0 ;
  var n = 0 ;
  statement = "<TABLE COLS=7 BORDER=1 WIDTH=350>" ;
  statement += "<TR><TD COLSPAN=7><CENTER><FONT COLOR=#635200 FACE=\"Arial\"><B>" + this_month + " " + year + "</TD></TR>" ;
  statement += "<TR ALIGN=CENTER><TH WIDTH=50><SMALL>" + weekday[1] ;
  for (var i=2; i<=7; i++)
    statement += "</TH><TH WIDTH=50><SMALL>" + weekday[i] ;
  statement += "</TH></TR>" ;
  if (blanks != 7 && blanks != 0) {
    statement += "<TR ALIGN=CENTER VALIGN=TOP>" ;
    for (var j=0; j<blanks; j++)
      statement += "<TD HEIGHT=40>&nbsp;</TD>" ;
    for (k=1; k<=(7-blanks); k++)
      statement += search(month,year,k) ;
    week_num = week_num - 1 ;
  }
  statement += "</TR>" ;
  n = k - 1 ;
  for (var l=0; l<week_num; l++) {
    statement += "<TR ALIGN=CENTER VALIGN=TOP>" ;
    for (m=0; m<7; m++) {
      if (((l*7)+m+k) <= days_in_month) {
        n++ ;
        statement += search(month,year,n) ;
      }
      else {
        for (var o=0; o<7-m; o++)
          statement += "<TD>&nbsp;</TD>" ;
        break ;
      }
    }
  }
  statement += "</TR></TABLE>" ;
  return statement ;
}

function write_events(month,year) {
  var statement = "" ;
  statement += "<CENTER><FONT COLOR=#635200 FACE=\"Arial\"><B>" + get_month(month) + "&nbsp;&nbsp;E v e n t s</B></FONT></CENTER>" ;
  statement += "<TABLE BORDER=0 WIDTH=250 COLS=2>" ;
  for (var i=1; i<=get_days_in_month(month,year); i++) {
    for (var q=0; q<=event_number; q++) {
      if (i == events_list[q].start && get_month(month) == events_list[q].month && year == events_list[q].year) {
        statement += "<TR><TD WIDTH=30 VALIGN=TOP><B>" + i ;
        if (events_list[q].start != events_list[q].end)
          statement += "-" + events_list[q].end ;
        statement += ":</B></TD><TD>" + events_list[q].description + "&nbsp;&nbsp;" ;
        if (events_list[q].link != "none")
          statement += "<A HREF=\"" + events_list[q].link + "\" STYLE=\"color:Blue;\"><IMG SRC=\"images/link.gif\" WIDTH=25 BORDER=0 ALIGN=CENTER></A>" ;
        if (events_list[q].picture != "none")
          statement += "<A HREF=\"" + events_list[q].picture + "\" STYLE=\"color:Blue;\"><IMG SRC=\"images/camera.jpg\" WIDTH=25 BORDER=0 ALIGN=CENTER></A>" ;
        statement += "</TD></TR>" ;
      }
    }
    for (var r=0; r<=holiday_number; r++) {
      if (i == holiday_list[r].edate && get_month(month) == holiday_list[r].month)
        statement += "<TR><TD WIDTH=10 VALIGN=TOP><B>" + i + ":</B></TD><TD>" + holiday_list[r].description + "</TD></TR>" ;
    }
  }
  statement += "</TABLE>" ;
  return statement ;
}

function write_all() {
  var month = parseInt(document.doc_dates.doc_month.value) ;
  var year = parseInt(document.doc_dates.doc_year.value) ;
  if (month == 0)
    alert("You have to pick a month first.")
  else if (year == 0)
    alert("You have to pick a year first.")
  else {
    if (navigator.appName == "Netscape") {
      alert("May I suggest switching to IE?") ;
    }
    else {
      month_box.innerHTML = write_month(month,year) ;
      list_box.innerHTML = write_events(month,year) ;
    }
  }
}