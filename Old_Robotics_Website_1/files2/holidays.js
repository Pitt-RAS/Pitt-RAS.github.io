// all code created by Angela A. DeFrancesco
// email me @ angelad@email.com

function holiday(month, edate, description, pictures) {
  this.month = month ;
  this.edate = edate ;
  this.description = description ;
  this.pictures = pictures ;
}

var holiday_list = new Array() ;
var holiday_number = -1 ;

holiday_list[++holiday_number] = new holiday(
  "J a n u a r y",
  1,
  "New Years Day",
  "none"
);

holiday_list[++holiday_number] = new holiday(
  "M a r c h",
  15,
  "Ides of March",
  "none"
);

holiday_list[++holiday_number] = new holiday(
  "M a r c h",
  17,
  "St. Patrick's Day",
  "none"
);

holiday_list[++holiday_number] = new holiday(
  "A p r i l",
  1,
  "April Fool's Day",
  "none"
);

holiday_list[++holiday_number] = new holiday(
  "J u l y",
  4,
  "Fourth of July",
  "none"
);

holiday_list[++holiday_number] = new holiday(
  "O c t o b e r",
  31,
  "All Hallow's Eve",
  "none"
);

holiday_list[++holiday_number] = new holiday(
  "N o v e m b e r",
  11,
  "Veteran's Day",
  "none"
);

holiday_list[++holiday_number] = new holiday(
  "D e c e m b e r",
  25,
  "Christmas",
  "none"
);

