// All coding on this site is copyright © 2000-2001 Angela A. DeFrancesco
// email me @ angelad@email.com
// please don't use my stuff without giving me credit!

function get_five(mem_status) {
  for (var j=0; j<=membership; j++) {
    if (member_list[j].status == mem_status) {
      if (member_list[j].status == "Advisor") {
        document.write("<TR><TD COLSPAN=2><CENTER><B><FONT SIZE=3 COLOR=White>") ;
        document.write("A&nbsp;d&nbsp;v&nbsp;i&nbsp;s&nbsp;o&nbsp;r</TD></TR>") ;
        document.write("<TR><TD COLSPAN=2><CENTER><FONT COLOR=White SIZE=+1 FACE=\"Bookman Old Style\"><B>") ;
      }
      else
        document.write("<FONT COLOR=White SIZE=+1 FACE=\"Bookman Old Style\"><U>" + member_list[j].status + "</U><BR><B>") ;
      document.write("<A HREF=\"mailto:" + member_list[j].email + "\">" + member_list[j].name + "</A>") ;
      if (member_list[j].addy != "none")
        document.write("<A HREF=\"" + member_list[j].addy + "\" TARGET=\"_blank\"><IMG SRC=\"images/home.gif\" BORDER=0></A>") ;
      document.write("<BR></FONT><FONT COLOR=White>" + member_list[j].email + "<P></B>") ;
    }
  }
}

function write_members() {
  var list_size = Math.round((membership-6)/2) ;
  document.write("<TABLE COLS=2 WIDTH=\"100%\" BACKGROUND=\"images/block.gif\" BORDER=1>") ;
  document.write("<TR><TD COLSPAN=2><CENTER><B><FONT SIZE=3 COLOR=White>O&nbsp;f&nbsp;f&nbsp;i&nbsp;c&nbsp;e&nbsp;r&nbsp;s</TD></TR>") ;
  document.write("<TR><TD><CENTER><FONT COLOR=White>") ;
  get_five("President") ;
  get_five("Vice President") ;
  document.write("<BR></TD><TD><CENTER><FONT COLOR=White>") ;
  get_five("Treasurer") ;
  get_five("Secretary") ;
  document.write("<BR></TD></TR>") ;
  get_five("Advisor") ;
  document.write("<BR></TD></TR>") ;
  document.write("<TR><TD COLSPAN=2><CENTER><B><FONT SIZE=3 COLOR=White>M&nbsp;e&nbsp;m&nbsp;b&nbsp;e&nbsp;r&nbsp;s</TD></TR>") ;
  document.write("<TR VALIGN=TOP><TD WIDTH=\"50%\"><FONT COLOR=White>") ;
  var mems = 0 ;
  for(var i=0; i<=membership; i++) {
    if(mems==list_size)
      document.write("</TD><TD><FONT COLOR=White>") ;
    if (member_list[i].status == "Member" || member_list[i].status == "Other") {
      var link = "<A HREF=\"mailto:" + member_list[i].email + "\">" ;
      document.write("" + link) ;
      document.write(member_list[i].name + "</A>") ;
      if (member_list[i].addy != "none")
        document.write("<A HREF=\"" + member_list[i].addy + "\" TARGET=\"_blank\">&nbsp;<IMG SRC=\"images/home.gif\" BORDER=0></A>") ;
      document.write("&nbsp;&nbsp;<SMALL>(") ;
      document.write(member_list[i].email) ;
      document.write(")</SMALL><BR>") ;
      mems++ ;
    }
  }
  document.write("</TD></TR></TABLE>") ;
}

function write_list() {
  document.write("<FORM><TEXTAREA ROWS=15 COLS=70 READONLY WRAP=\"virtual\">") ;
  for(var k=0; k<=membership; k++) {
    if (member_list[k].status != "Advisor" && member_list[k].status != "Other")
      document.write(member_list[k].email + ",") ;
  }
  document.write("sorc+robotics@pitt.edu</TEXTAREA></FORM>") ;
}

var mod_date = "" ;
mod_date = document.lastModified ;
