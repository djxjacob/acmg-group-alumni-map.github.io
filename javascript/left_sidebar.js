<!--
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%% left_sidebar.js -- JavaScript file to insert HTML code       %%%%  
// %%%% for the left-hand sidebar menu section into each page.       %%%%
// %%%% -- Bob Yantosca (yantosca@seas.harvard.edu), 28 Mar 2014     %%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
"use strict";
function showLeftSidebar() {
 
  // Add the HTML code here. 
  // The "\" character continues one line to the next.
  // Also no space characters can follow the"\" character.
  var txt =
  	'<div id="sidebar1">\
          <div id="box1">\
	    <ul class="style1">\
             <li class="first"><a href="group_meetings.html">Group meetings</a></li>\
             <li><a href="https://events.seas.harvard.edu/search/events?order=date&search=Atmospheric+Environmental+Chemistry" target="_blank">Seminars</a></li>\
             <li><a href="https://projects.iq.harvard.edu/acmg/acmg-people/group-alumni-list">Alumni List and Map</a></li>\
             <li><a href="https://projects.iq.harvard.edu/acmg/forum">Graduate Student Forum</a></li>\
             <li><a href="https://projects.iq.harvard.edu/acmg/journal-club">Journal Club</a></li>\
             <li><a href="https://projects.iq.harvard.edu/acmg-jlaqc">JLAQC</a></li>\
             <li><a href="https://projects.iq.harvard.edu/acmg/faq">FAQs by PhD Applicants</a></li>\
             <li><a href="https://projects.iq.harvard.edu/acmg/ug-research">Undergraduate Research</a></li>\
             <li><a href="https://projects.iq.harvard.edu/acmg/employment">Employment</a></li>\
             <li><a href="http://wiki.as.harvard.edu/wiki/doku.php" target="_blank">Wiki (private)</a></li>\
             <li><a href="https://calendar.google.com/calendar/embed?src=harvard.edu_plmrf7p2gdr4j42ak59cslscgs%40group.calendar.google.com&ctz=America%2FNew_York" target="_blank">Calendar (private)</a></li>\
             </ul>\
          </div>\
       </div>';
  
  // Write the HTML code into the document
  document.write( txt );
}

//-->
