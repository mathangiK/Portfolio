var timelineCounter = 0;
var timelineData = {
	Experiance1: {
					card1:{
						symbol : 'degree',
						data: '<span>Under-graduation from <b>PUNE UNIVERSITY</b></span><br><span>In discipline of <i><em>Informtaion Technology</em></i></span>'
					},
					card2:{
						symbol : 'award',
						data: '<span>Secured <b>second rank</b> in university</span>'
					},
					card3:{
						symbol : 'manage',
						data: '<span>Department sponsorship<b> co-ordinator </b></span><br><span><b>Representative</b> of Information Technology department in college</span>'
					}
	},
	Experiance2: {
					card1:{
						symbol : 'degree',
						data: '<span>Worked on mobile suite development for Remedy ITSM solution as an project intern</span>'
					},
					card2:{
						symbol : 'award',
						data: '<span>Change Manager mobile suite with quick access to approvals</span>'
					},
					card3:{
						symbol : 'manage',
						data: '<span>Admin tool for easy server access</span>'
					},
					card4:{
						symbol : 'manage',
						data: '<span>Analytics for IT manager</span>'
					}
	},
	Experiance3: {
					card1:{
						symbol : 'degree',
						data: '<span>Started as Associate Product Developer in Remedyforce, a Saas based ITSM solution</span>'
					},
					card2:{
						symbol : 'award',
						data: '<span>Involved in feature enhancement on the salesforce platform</span>'
					},
					card3:{
						symbol : 'manage',
						data: '<span>Front-end development using popular frameworks (JQuery mobile, AngularJs and ExtJs)</span>'
					},
					card4:{
						symbol : 'manage',
						data: '<span>Involved in Idea Jams and won the <i>Service Support Innovation Award</i></span>'
					}
	},
	Experiance4: {
					card1:{
						symbol : 'degree',
						data: '<span>Promoted to Product Developer and headed a team in driving a blog initiative from the research and development division</span>'
					}
	}
}

var cards_level1 = '<div id="card_level1_section" >'+
						'<div class="row card-container" data-scrollreveal="enter down and move 50px over 1.33s">'+
							'<div class="col-lg-8 col-lg-offset-2">'+              
								'<div class="card-layout-level-one row">'+	
									'<div class="col-lg-2">'+
										'<div id="card_icon_level1" ></div>'+
									'</div>'+
									'<div class="col-lg-10">'+
										'<span class="card-text-level-one" id="card_text_level1"></span>'+				
									'</div>'+	
								'</div>'+             
							'</div>'+
						'</div>'+
					'</div>';
function getCardsLevel2HtmlCode(timelineLevels){
var cards_level2 = '<div id="card_level2_section_'+timelineLevels+'">'+
						'<div class="row card-container " data-scrollreveal="enter down and move 50px over 1.33s">'+
							'<div class="col-lg-1 col-lg-offset-2 ">'+
								'<div class="card_indicator"></div>'+
							'</div>'+
							'<div class="col-lg-7">'+            
								'<div class="card-layout-level-two row">'+	
									'<div class="col-lg-2">'+
										'<div id="card_icon_level2_'+timelineLevels+'"></div>'+
									'</div>'+
									'<div class="col-lg-10">'+
										'<span class="card-text-level-two" id="card_text_level2_'+timelineLevels+'"></span>'+				
									'</div>'+	
								'</div>'+             
							'</div>'+
						'</div>'+
					'</div>';

	return cards_level2;
}			
		
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

function initializeSections(timelineContainer){
	timelineContainer.append(cards_level1);
	var timelineLevels = 1;
	while(timelineLevels<4){
		timelineContainer.append(getCardsLevel2HtmlCode(timelineLevels));
		timelineLevels = timelineLevels + 1;
	}
	timelineContainer.append('<br><button id="timelineNext" style="width:300px;" class="btn btn-default" type="submit" onclick="timelineDisplay()">Go on</button>');					
	$('#card_level2_section_3').addClass('hide-section');
}

function timelineDisplay(){
	timelineCounter = timelineCounter + 1;
	var timelineContainer = $('#card_container');
	var timelineImage = $('#timelineImage');
	
	if(timelineCounter == 6){		
		timelineCounter = 0;
		timelineContainer.html('<hr>');
		timelineImage.attr("src","img/timeline.png");
		$('#speech_bubble').addClass('bubble');
		$('#speech_bubble').removeClass('bubble-info');
		$('#speech_bubble_text').text('Do you want to know more?');
		$('#speech_bubble_next').removeClass('hide-section');	
		$('#timeline_arrow').addClass('hide-section');			
		return;
	}
	
	timelineImage.attr("src","img/timeline"+timelineCounter+".png");
	//timelineImage.attr("height",((timelineCounter*7)+200)+"px;");
	if(timelineCounter == 5){
		$('#card_level1_section').addClass('hide-section');
		$('#timelineNext').text('reset');
		$('#speech_bubble_text').text('Many more to come!!');
		$('#speech_bubble').removeClass('hide-section');
		return;
	}
	height="200px;";
	if(timelineCounter == 1){	
		initializeSections(timelineContainer);
		timelineContainer.removeClass('hide-section');
		$('#timeline_arrow').removeClass('hide-section');
		$('#speech_bubble_next').addClass('hide-section');
		$('#speech_bubble').removeClass('bubble');
		$('#speech_bubble').addClass('bubble-info');		
		$('#speech_bubble_text').text('Look! A feather in my cap');
	} 
	if(timelineCounter == 2)
		$('#card_level2_section_3').removeClass('hide-section');
	
	if(timelineCounter == 4){
		for(var i=1;i<4;i++)
			$('#card_level2_section_'+i).addClass('hide-section');
	}
	var temp = timelineImage.width();
	var timelineImageHeight = timelineImage.height();
	
	//level1
	$('#card_icon_level1').addClass(timelineData["Experiance"+timelineCounter]["card1"]["symbol"]);
	$('#card_text_level1').html(timelineData["Experiance"+timelineCounter]["card1"]["data"]);
	
	//level2
	var timelineLevels = 2;
	while(timelineLevels<5){
		if (typeof(timelineData["Experiance"+timelineCounter])!='undefined' && typeof(timelineData["Experiance"+timelineCounter]["card"+timelineLevels]) != 'undefined'){
			$('#card_icon_level2_'+(timelineLevels-1)).addClass(timelineData["Experiance"+timelineCounter]["card"+timelineLevels]["symbol"]);
			$('#card_text_level2_'+(timelineLevels-1)).html(timelineData["Experiance"+timelineCounter]["card"+timelineLevels]["data"]); 
		}else{
			break;
		}
		timelineLevels += 1;
	}
	
	$('html,body').animate({
        scrollTop: $(".timeline-section").offset().top},'slow');
	
	$("#timeline_arrow").animate({width: "+=50px"},1000);
	$("#timeline_arrow").animate({width: "-=50px"},1000);
}

//extra
//timelineImage.animate({width: (temp+20), height: (timelineImageHeight+10)}, 'slow');
	//timelineImage.animate({width: temp, height: timelineImageHeight}, 'slow');
	//timelineImage.animate({width: (temp)}, 'slow');
	//timelineImage.animate({height: (timelineImageHeight)}, 'slow');*/
	//timelineImage.animate({width: ""+(timelineImage.clientWidth)+"px"}, 'slow')
		
	//timelineImage.addClass('zoom-image');
	//timelineImage.removeClass('zoom-image');


$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});


function init() {
}

function getProjectId(projectNumber){
	var content = '';
	var title = '';
	switch(projectNumber){
		case '1': title = 'Result Analysis System';
				content = '<p>Result Analysis System that process the university results for Pune Institute of Computer Technology, and graphically representing the conclusions drawn. It includes various filters for the results and also analysis based on faculty, class, and subject representation was implemented to understand trends and consolidate information for the management. It further also generated the merit list for the particular year, as well as performance analysis over a period of time was included. The access levels defined provided the enrolled students and the faculty members’ access to appropriate information.</p><p>Technologies used: <i><b>Visual Basic 6.0, Oracle 9i server</b></i></p>';
				break;
		case '2': title = 'Blood Bank Management';
				content ='<p>Formulated a web-based project designed with a search functionality for the blood in storage and donor list. Provided an option for people seeking rare blood group to seek out donors and for interested and altruistic donors to pledge for blood donation. </p><p>Technologies used: <i><b>HTML/CSS, Java, JSP, JavaScript, MySQL</b></i></p>';
				break;
		case '3': title = 'AR System Mobile Services and Application';
				content ='<p>Designed and implemented solutions which encompassed a three tier architecture with the AR system, Remedy an ITSM solution, communicating with the mobile client. This ITSM solution afforded me an insight into the complex business scenarios, high-level design considerations, persona based development model and familiarized me with the agile development model churning out iterative shippable solution. As part of this project developed three mobile applications targeting different audience bases.</p><p>We developing three mobile solutions for change management, module inside ITSM solutions embodying the major use cases and a reporting tool for the IT head overseeing the whole process.</p><p>A change management solutions designed to provide the key features used by change managers, also included an approval process for the changes requests.  The second solution was targeted towards the IT head overseeing the whole process. Providing a bird eye view of the system helped make the decisions. The third solution was a working prototype of an application to aid the system administrator monitor the servers currently online and other system processes.</p><p>Technologies used: <i><b>Java, Rest APIs, AR APIs, Javascript, HTML5, CSS3, Jersey Framework, Cordova(Phonegap)</b></i></p>';
				break;
		case '4': title = 'Blog Initiative at BMC Software';
				content ='<p>I became involved in writing blogs of the pioneer business processes we follow at Remedyforce. As a part of this drive we had a team of talented members of the team pen blogs on areas of expertise. We also had an array of audience to market these blogs, the uniqueness of this endeavor hinged on how information can reach customer first hand right from the research and development team, who have in fact create the product.</p>';
				break;
		case '5': title = 'Eloquent Silence - A personal blog';
				content ='<p>Through this blog I like talking about day to day happening that affect most of us which we just brush away in a hurry. The main motive is to make people take 5 minutes from their day and ponder over these things. Further I enjoy interacting with like-minded individuals through this medium.</p>';
				break;
	}
	$('#modal_title').text(title);
	$('#modal_body').html(content);
	
}

/*
function check_if_in_view(animation_elements) {
  var $window = $(window);
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each(animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('vLine');
    } else {
      $element.removeClass('vLine');
    }
  });
}
*/