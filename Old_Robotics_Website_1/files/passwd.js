var logins = new Array() ;
var login_count = -1 ;
logins[++login_count] = 12222109 ;  // officers
logins[++login_count] = 1508504 ;   // members
logins[++login_count] = 8182233 ;

function dohash(pass,base) {
  var alpha="abcdefghijklmnopqrstuvwxyz0123456789";
  var hash=0;
  for (i=0;i<pass.length;i++)
    hash=hash*base+alpha.indexOf(pass.substring(i,i+1).toLowerCase(),0);
  return hash;
};

function check(pswd) {
  pswd = dohash(pswd,7) ;
  for (var j=0; j<=login_count; j++) {
    if (pswd == logins[j])
      return 1 ;
  }
  return 0 ;
};

function valid() {
  var today=new Date();
  return Math.floor(today.getTime()/1000);
};
