<!--
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%% sidebar_related_sites -- JavaScript file to insert HTML code %%%%  
// %%%% for the "RELATED SITES" section at the bottom of each page.  %%%%
// %%%% -- Bob Yantosca (yantosca@seas.harvard.edu), 04 Aug 2015     %%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
"use strict";
function showRelatedSites() {
 
  // Add the HTML code here. 
  // The "\" character continues one line to the next.
  // Also no space characters can follow the"\" character.
  var txt =
   '<br/>\
   <div id="portfolio-wrapper">\
       <div id="portfolio" class="container">\
           <div class="title">\
              <a name="Related" id="Related"></a><h2>RELATED SITES</h2>\
	       </div>\
           <div class="column1">\
              <div class="box">\
                 <h3><a href="http://seas.harvard.edu/" target="_blank">Harvard John A. Paulson<br />School of Engineering<br />and Applied Sciences</a></h3>\
                 <p><a href="http://seas.harvard.edu" target="_blank"><img src="logos/HSEAS_Seal.jpg" width="65" height="65" alt="SEAS" /></a></p>\
              </div>\
           </div>\
           <div class="column2">\
              <div class="box">\
                 <h3><a href="http://eps.harvard.edu/" target="_blank">Harvard University<br />Department of Earth<br />and Planetary Sciences</a></h3>\
                 <p><a href="http://eps.harvard.edu/" target="_blank"><img src="logos/harvard-logo.png" width="65" height="65" alt="Harvard University" /></a></p>\
             </div>\
			</div>\
            <div class="column3">\
               <div class="box">\
                  <h3><a href="http://environment.harvard.edu" target="_blank">Harvard University<br />Center for the<br />Environment</a></h3>\
                  <p><a href="http://environment.harvard.edu" target="_blank"><img src="logos/huce3_small.png" width="65" height="65" alt="HUCE" /></a></p>\
              </div>\
            </div>\
            <div class="column4">\
               <div class="box">\
                  <h3><a href="http://acmg.seas.harvard.edu/jlaqc/index.html" target="_blank">JOINT LABORATORY<br />FOR AIR QUALITY AND CLIMATE<br />(JLAQC)</a></h3>\
                  <p><a href="http://acmg.seas.harvard.edu/jlaqc/index.html" target="_blank"><img src="http://acmg.seas.harvard.edu/jlaqc/images/jlaqc_logo.png" width="65" height="65" alt="AQAST" /></a></p>\
               </div>\
            </div>\
        </div>\
    </div>'
  
  // Write the HTML code into the document
  document.write( txt );
}

//-->
