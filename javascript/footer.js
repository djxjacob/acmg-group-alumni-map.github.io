<!--
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%% footer.s-- JavaScript file to insert HTML code               %%%%  
// %%%% for the footer into multiple web pages.                      %%%%
// %%%% -- Bob Yantosca (yantosca@seas.harvard.edu), 28 Mar 2014     %%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
"use strict";
function showFooter() {
 
  // Add the HTML code here. 
  // The "\" character continues one line to the next.
  // Also no space characters can follow the"\" character.
  var txt =
   '<div id="footer">\
   		<p>Copyright (c) 2014 Harvard University Atmospheric Chemistry Modeling Group. Original design: <a href="http://www.freecsstemplates.org/" rel="nofollow">FCT</a> and <a href="http://fotogrph.com/">Fotogrph</a>.</p>\
	</div>'
  
  // Write the HTML code into the document
  document.write( txt );
}

//-->