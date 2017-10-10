var cover = {
	"lead" : "Switcher, I/O Inc",
	"title" : "Designing Interactive In-App Survey"
};

var summary = {
	"id" : "summary",
	"overviewText" : "Switcher is a smart light controller targeting single or a married couple family in South Korea. Our target user is aged from 25 to 35 years old living in a studio or one bed apartment.",
	"teamText" : "Product Design, Marketer, iOS Engineer"
};

var content = {
	"id" : "intro",
	"imageTag" : "intro-image",
	"image" : "img/",
	"textTag" : "intro-text",
	"textLabel" : "What is Switcher Automation",
	"text" : "When a user connects her phone to a Switcher visa bluetooth, he or she can save a timer to turn on or off the light inside the device so that it can function even without bluetooth connection with a smartphone. <br><br> As a product designer, my role was to improve Switcher Timer experience to make Switcher become a real \"Smart Home Device\" in their life. "
};


var persona = {
	"id" : "persona",
	"type" : [
		{
			"id" : "number1",
			"img" : "img/persona1.png",
			"name" : "Yumi Jang, 27, Single",
			"listId" : "persona1",
			"listContent" : 
			[
			"Front-End Web Engineer",
			"Studio Apartment with a dog - 1 Year Lease",
			"Gooma hates darkness...but I can't always turn on the light for 24hrs because of utility fees"
			]
		},
		{	
			"id" : "number2",
			"img" : "img/persona2.png",
			"name" : "Jenny Chung, 34 & Tae Yoon, 32, Married Couple",
			"listId" : "persona2",
			"listContent" : 
			[
			"Journalist & Architect",
			"One-Bed Apartment - 2 Years Lease",
			"Both of us are too busy in the morning. Sometimes we forgot to turn off the light before leaving the apartment."
			]
		}
	]
};

var title = prTitle.replace("%data%",cover.title);
var lead = prLead.replace("%data%",cover.lead);
var summarySection = newSection.replace("%data%", summary.id);
var overview = prOverview.replace("%data%", summary.overviewText);
var team = prTeam.replace("%data%", summary.teamText);
$("#project-cover").append(lead, title, summarySection);
$("#summary").append(overview,team);

var introSection = newSection.replace("%data%", content.id);
var introImg = prImg4.replace("%data%", content.imageTag);
var introImgSrc = prImgSrc.replace("%data%", content.image);
var introText = prText8.replace("%data%",content.textTag);
var introTextLabel = prTextLabel.replace("%data%", content.textLabel);
var introTextSrc = prTextSrc.replace("%data%", content.text);
$("#project-intro").append(introSection);
$("#intro").append(introImg,introText);
$("#intro-image").append(introImgSrc);
$("#intro-text").append(introTextLabel,introTextSrc);


function displayPersona(){
	for (n in persona.type) {
		var cardDeck = proCardDeck.replace("%data%", persona.type[n].id);
		var cardImg = proCardImg.replace("%data%", persona.type[n].img);
		var cardName = proCardName.replace("%data%", persona.type[n].name);
		var cardList = proCardList.replace("%data%", persona.type[n].listId);
		var cardList = proCardList.replace("%data%", persona.type[n].listId);
		$("#persona:last").append(cardDeck);
		$(".card:last").prepend(cardImg);
		$(".card-body:last").append(cardName,cardList);
		for (i=0; i<persona.type[n].listContent.length; i++){
			var cardListItem = proCardListItem.replace("%data%", persona.type[n].listContent[i]);
			$(".list-group:last").append(cardListItem);
		}
	}
};

displayPersona();

