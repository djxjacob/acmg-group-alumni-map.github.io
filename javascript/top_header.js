<!--
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%% top_headerjs-- JavaScript file to insert HTML code           %%%%  
// %%%% for the top-of-page header into multiple web pages.          %%%%
// %%%% -- Bob Yantosca (yantosca@seas.harvard.edu), 28 Mar 2014     %%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
"use strict";
function showTopHeader() {
 
  // Add the HTML code here. 
  // The "\" character continues one line to the next.
  // Also no space characters can follow the"\" character.
  var txt =
   '<div id="header-wrapper">\
    	<div id="header" class="container"> \
\
        	<!-- This adds the group logo at left top of page -->\
         	<div id="jacob">\
          		<a href="http://acmg.seas.harvard.edu/"><img src="logos/logo_medium.jpg" width="90" height="80" border=0></a>\
	         </div>\
\
        	<!-- This adds the Harvard logo at left top of page -->\
         	<div id="harvard">\
          		<a href="http://www.harvard.edu/"><img src="logos/Harvard_Logo.png" width="70" height="80" border=0></a>\
	         </div>\
\
    	     <!-- This adds the top-of-page text -->\
        	 <div id="logo">\
            	<h1>ATMOSPHERIC CHEMISTRY MODELING GROUP - HARVARD UNIVERSITY</h1>\
    	        <p class="topheader" align="center">GROUP LEADERS: <a href="https://projects.iq.harvard.edu/acmg/people/daniel-j-jacob" target="_new">DANIEL J. JACOB</a> and <a href="https://scholar.harvard.edu/mickley" target="_new">LORETTA J. MICKLEY</a></p>\
        	 </div>\
	      </div>\
\
	     <!-- This adds the crimson nav bar menu -->\
		 <div id="menu" class="container">\
   			<ul>\
				<li><a href="https://projects.iq.harvard.edu/acmg">HOME</a></li>\
				<li><a href="https://projects.iq.harvard.edu/acmg/research">RESEARCH</a></li>\
				<li><a href="https://projects.iq.harvard.edu/acmg/publications-acmg">PUBLICATIONS</a></li>\
				<li><a href="https://projects.iq.harvard.edu/acmg/acmg-presentations">PRESENTATIONS</a></li>\
				<li><a href="https://projects.iq.harvard.edu/acmg/education">EDUCATION</a></li>\
	            <li><a href="https://projects.iq.harvard.edu/acmg/acmg-people">PEOPLE</a></li>\
	            <li><a href="http://acmg.seas.harvard.edu/geos/index.html">GEOS-Chem</a></li>\
				<li><a href="https://projects.iq.harvard.edu/acmg/contact-us">CONTACT US</a></li>\
        	 </ul>\
      	</div>\
	</div>'
  
  // Write the HTML code into the document
  document.write( txt );
}
-->
