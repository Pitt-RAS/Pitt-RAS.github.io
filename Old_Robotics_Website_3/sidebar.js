function printSideBar(subNum)
{
var sidebar = "";
var dds = "";
var i;
var competitions = "";

for(i = 0; i < subNum; i++)
{
	dds += "../";
}

if(subNum == 0)
{
	competitions = "competitions/";
}

sidebar += "<table class=\"side_menu\">\n";
sidebar += "	<tr>\n";
sidebar += "		<td class=\"side_menu_l\"><a href=\"" + dds + "index.html\">Home</a></td>\n";
sidebar += "	</tr>\n";
sidebar += "	<tr>\n";
sidebar += "		<td class=\"side_menu_l\"><a href=\"" + dds + "whyjoin.html\">Join The Club!</a></td>\n";
sidebar += "	</tr>\n";
sidebar += "	<tr>\n";
sidebar += "		<td class=\"side_menu_l\"><a href=\"" + dds + "currentcompetitions.html\">Current Competition</a></td>\n";
sidebar += "	</tr>\n";
sidebar += "	<tr>\n";
sidebar += "		<td class=\"side_menu_l\"><a href=\"" + dds + "pastcompetitions.html\">Past Competitions</a></td>\n";
sidebar += "	</tr>\n";
sidebar += "	<tr>\n";
sidebar += "		<td class=\"side_menu_l\"><a href=\"" + dds + "tutorials.html\">Tutorials</a></td>\n";
sidebar += "	</tr>\n";
sidebar += "	<tr>\n";
sidebar += "		<td class=\"side_menu_l\"><a href=\"" + dds + "links.html\">Useful Links</a></td>\n";
sidebar += "	</tr>\n";
sidebar += "	<tr>\n";
sidebar += "		<td class=\"side_menu_l\"><a href=\"" + dds + "contact.html\">Contact</a></td>\n";
sidebar += "	</tr>\n";
sidebar += "	<tr>\n";
sidebar += "		<td class=\"side_menu_l\"><a href=\"" + dds + "history.html\">History</a></td>\n";
sidebar += "	</tr>\n";
sidebar += "	<tr>\n";
sidebar += "		<td class=\"side_menu_e\"></td>\n";
sidebar += "	</tr>\n";
sidebar += "</table>\n";
document.write(sidebar);
}