// all code created by Angela A. DeFrancesco
// email me @ angelad@email.com

var mod_date = document.lastModified ;

function event(month, start, end, year, description, link, picture) {
  this.month = month ;
  this.start = start ;
  this.end = end ;
  this.year = year ;
  this.description = description ;
  this.link = link ;
  this.picture = picture ;
}

var events_list = new Array() ;
var event_number = -1 ;

events_list[++event_number] = new event(
  "O c t o b e r",
  23,
  23,
  2002,
  "Meeting, 9:30 pm",
  "none",
  "none"
);

events_list[++event_number] = new event(
  "O c t o b e r",
  16,
  16,
  2002,
  "Mobot Open House, 6:00 p.m., <A HREF=\"http://www-2.cs.cmu.edu/~mobot/\" STYLE=\"color:BLue;\">Location ??</A>",
  "none",
  "none"
);

events_list[++event_number] = new event(
  "O c t o b e r",
  31,
  31,
  2002,
  "<A HREF=\"http://www.pitt.edu/~aadst17/party.html\" STYLE=\"color:Blue;\">Souf Oaklin\' Ghetto party</A>",
  "none",
  "none"
);

events_list[++event_number] = new event(
  "A u g u s t",
  26,
  26,
  2002,
  "First day of fall classes",
  "none",
  "none"
);

events_list[++event_number] = new event(
  "A p r i l",
  6,
  14,
  2002,
  "Pittsburgh SciTech Festival",
  "http://www.scitechfestival.com",
  "none"
);

events_list[++event_number] = new event(
  "D e c e m b e r",
  1,
  1,
  2001,
  "FIRST Lego Competition, NREC",
  "http://www.rec.ri.cmu.edu",
  "pics/01nrecfirst.html"
);

events_list[++event_number] = new event(
  "J a n u a r y",
  7,
  7,
  2002,
  "First day of spring classes",
  "none",
  "none"
);

events_list[++event_number] = new event(
  "A p r i l",
  27,
  27,
  2002,
  "Last day of spring classes",
  "none",
  "none"
);

events_list[++event_number] = new event(
  "A p r i l",
  26,
  28,
  2002,
  "Annual IEEE Summit Robot Competition",
  "http://www.ewh.ieee.org/reg/2/r2sac/reg2contest2002.html",
  "none"
);

events_list[++event_number] = new event(
  "M a r c h",
  3,
  9,
  2002,
  "Spring Break",
  "none",
  "none"
);

events_list[++event_number] = new event(
  "A p r i l",
  19,
  19,
  2002,
  "Mobot Races",
  "http://www-2.cs.cmu.edu/~mobot/",
  "none"
);

events_list[++event_number] = new event(
  "A p r i l",
  20,
  20,
  2001,
  "Mobot Races",
  "http://www-2.cs.cmu.edu/~mobot/",
  "pics/01mrace.html"
);

events_list[++event_number] = new event(
  "A p r i l",
  14,
  14,
  2000,
  "CMU Mobot Races",
  "http://www-2.cs.cmu.edu/~mobot/",
  "pics/00mrace.html"
);

events_list[++event_number] = new event(
  "M a r c h",
  31,
  31,
  2002,
  "Easter",
  "none",
  "none"
);

events_list[++event_number] = new event(
  "N o v e m b e r",
  30,
  30,
  2001,
  "Blue Moon",
  "none",
  "none"
);

events_list[++event_number] = new event(
  "N o v e m b e r",
  28,
  28,
  2002,
  "Thanksgiving",
  "none",
  "none"
);

events_list[++event_number] = new event(
  "D e c e m b e r",
  2,
  2,
  2000,
  "NREC FIRST Lego League State Robotics Championship",
  "http://www.rec.ri.cmu.edu",
  "pics/00nrecfirst.html"
);

events_list[++event_number] = new event(
  "N o v e m b e r",
  3,
  3,
  2000,
  "NREC Tour",
  "http://www.rec.ri.cmu.edu",
  "pics/nrec.html"
);
