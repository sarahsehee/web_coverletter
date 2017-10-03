
var jumbotron = {
	"lead" : "Application",
	"name" : "Hi, ProtoPie!",
	"coverletter" : "My name is Sarah Sehee Lim. This is my web application including a cover letter, resume and portfoli for <a href=\"https://www.wanted.co.kr/wd/5428?referer_id=21099\" target=\"_blank\">a patissier position<\/a>.",
	"links" : [
		{
			"text" : "Resume",
			"link" : "resume.html"
		},
		{
			"text" : "Portfolio",
			"link" : "#project-start"
		}
	]
};


var projects = {
	"card" : [
		{
			"title" : "Improving Timer Experience",
			"description" : ["User Experience"," User Interface"," Product Management"],
			"image" : "img/rental.png"
		},
		{
			"title" : "Designing Life Style Questionnaire IXD",
			"description" : ["User Interface"," Interaction Design"," Prototyping"," User Testing"],
			"image" : "http://via.placeholder.com/200x150"
		},
		{
			"title" : "project title 3",
			"description" : ["User Experience"," User Interface"," Product Management"],
			"image" : "http://via.placeholder.com/200x150"
		}
	]
};


var footer = {
	"label" : "Get In Touch",
	"contacts" : [
		{
			"icon" : "%",
			"text" : "+82 10 9522 7837",
			"link" : "%"
		},
		{
			"icon" : "%",
			"text" : "sarahsehee.lim@gmail.com",
			"link" : "%"
		},
		{
			"icon" : "%",
			"text" : "sarahsehee",
			"link" : "%"
		},
		{
			"icon" : "%",
			"text" : "sarahsehee",
			"link" : "%"
		},
		{
			"icon" : "%",
			"text" : "Seoul, South Korea",
			"link" : "%"
		}
	],
	"message" : "made with love and perfection and protoPie"
}

var lead = jumbotronLead.replace("%data%",jumbotron.lead);
var name = jumbotronName.replace("%data%",jumbotron.name);
var coverletter = jumbotronLetter.replace("%data%",jumbotron.coverletter);
$("#name").append(jumbotronContainer);
$('.jumbo').append(lead,name,coverletter,jumbotronList);



function displayButton(){
	for (i in jumbotron.links){
		var buttonLink = jumbotronButton.replace("%data%",jumbotron.links[i].link);
		var buttonText = jumbotronText.replace("%data%",jumbotron.links[i].text);
		$('.nav:last').append(buttonLink);
		$('.nav-link:last').append(buttonText);
	}
};

displayButton();




project.display = function(){
	for (item in projects.card){
	//concat Project and title
		$(".card-deck").append(projectCard);
		var projectImage = projectCardImage.replace("%data%",projects.card[item].image);
		var projectTitle = projectCardTitle.replace("%data%", projects.card[item].title);
		var projectDescription = projectCardDes.replace("%data%", projects.card[item].description);
		$(".card:last").prepend(projectImage);
		$(".card-body:last").append(projectTitle,projectDescription);
	}
};
project.display();






