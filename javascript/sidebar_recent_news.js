<!--
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%% sidebar_recent_news.js -- JavaScript file to insert HTML     %%%%
// %%%% links for AQAST news items into multiple web pages.          %%%%
// %%%% Bob Yantosca (yantosca@seas.harvard.edu), 08 Jan 2013        %%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function showRecentNews() {
 
  // Define the ordered list with news items
  // Titles are H3 style, text has Paragraph style. 
  // The "\" character continues one line to the next.
  // Also no space characters can follow the"\" character.
  var txt =
   '<h2>Recent news</h2>\
	<ul class="style2">\
       <li class="first">\
	     <h3><a href"http://acmg.seas.harvard.edu/aqast/highlights/2014/ozone_garden_sept_2014.pdf" target="_blank">ANOTHER SUCCESSFUL SEASON FOR THE OZONE GARDEN</a></h3>\
         <p>AQAST members led by Jack Fishman have developed a network of 13 ozone gardens in botanical gardens and other public venues across the US to demonstrate the damaging impact of ozone on vegetation.  Read the <a href="http://acmg.seas.harvard.edu/aqast/highlights/2014/ozone_garden_sept_2014.pdf" target="_blank">2014 season report by Jack Fishman</a> and <a href="http://acmg.seas.harvard.edu/publications/aqast/articles/Fishman_et_al_BAMS_Ozone_Garden_Sep2014.pdf" target="_blank">his recent article featured on the cover of the Bulletin of the American Meteorological Society</a>.</p>\
	  </li>\
       <li>\
	     <h3><a href="http://www.nytimes.com/2014/08/21/business/international/cities-air-problems-only-get-worse-with-climate-change.html" target="_blank">NEW YORK TIMES ARTICLE ON THE EFFECT OF CLIMATE CHANGE ON AIR QUALITY</em></a></h3>\
         <p><a href="http://www.nytimes.com/2014/08/21/business/international/cities-air-problems-only-get-worse-with-climate-change.html">The article</a> features an interview with AQAST member Daniel Jacob on how climate change will make regional ozone pollution worse while also helping to reduce the ozone background.<a href="http://www.cnn.com/2014/06/27/us/nasa-air-quality/index.html?hpt=hp_t2" target="_blank">.</a></p>\
	   </li>\
       <li>\
	     <h3><a href="http://www.cnn.com/2014/06/27/us/nasa-air-quality/index.html?hpt=hp_t2" target="_blank">AQAST MEMBERS HIGHLIGHT AIR QUALITY ACHIEVEMENTS OF AURA SATELLITE AT 10th ANNIVERSARY CELEBRATION</em></a></h3>\
         <p>The Aura satellite launched in 2004 has provided unprecedented documentation of air quality trends worldwide. AQAST members Bryan Duncan, Russ Dickerson, and Anne Thompson told the story of US air quality trends seen from the NO2 data at the Aura 10th anniversary media event on June 27. That story was picked up by many media outlets and Bryan Duncan was interviewed on CNN. <a href="http://www.cnn.com/2014/06/27/us/nasa-air-quality/index.html?hpt=hp_t2" target="_blank">Read the CNN story here.</a></p>\
	   </li>\
	 </ul>\
     <p><a href="newsletters.html" class="link-style">read more</a></p>';
  
  // Write the HTML code into the document
  document.write( txt );
}

//-->