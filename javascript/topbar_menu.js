<!--
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%% topbar_menu.js-- JavaScript file to insert HTML code         %%%%  
// %%%% for the top-of-page nav menu into multiple web pages.        %%%%
// %%%% -- Bob Yantosca (yantosca@seas.harvard.edu), 28 Mar 2014     %%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
"use strict";
function showTopMenu() {
 
  // Add the HTML code here. 
  // The "\" character continues one line to the next.
  // Also no space characters can follow the"\" character.
  var txt =
   '<div id="menu" class="container">\
   		<ul>\
			<li><a href="index.html">HOME</a></li>\
			<li><a href="research.html">RESEARCH</a></li>\
			<li><a href="publications.html">PUBLICATIONS</a></li>\
			<li><a href="presentations.html">PRESENTATIONS</a></li>\
			<li><a href="education.html">EDUCATION</a></li>\
            <li><a href="people.html">PEOPLE</a></li>\
            <li><a href="geos_chem.html">GEOS-Chem</a></li>\
			<li><a href="contact_us.html">CONTACT US</a></li>\
         </ul>\
      </div>'
  
  // Write the HTML code into the document
  document.write( txt );
}

//-->