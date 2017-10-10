
var jumbotron = {
	"lead" : "Application",
	"name" : "Hi, ProtoPie!",
	"coverletter" : "My name is Sarah Sehee Lim. This is my web application including a cover letter, resume and portfolio for <span>a patissier position<\/span>. Throughout all pages on this website, every single moving images including .gif and videos are made with ProtoPie✌🏼.It was pretty impossible to get a tool that is just right. I spend overnight working on prototype that is half done, didn’t get a feedback I required and couldn’t go on 5 person user testing because I was already exhuasted from prototyping.Driver Profiles are a fantastic new tool to showcase our driver-partners’ awesomeness and introduce them to their riders. ",
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
			"link" : "file:///Users/limteraction/Desktop/_protoPie/timer.html",
			"title" : "Designing Timer Pop-Up Guide",
			"description" : ["User Experience"," User Interface"," Product Management"],
			"image" : "img/rental.mov"
		},
		{
			"link" : "file:///Users/limteraction/Desktop/_protoPie/curation.html",
			"title" : "Designing Interactive In-App Survey",
			"description" : ["User Interface"," Interaction Design"," Prototyping"," User Testing"],
			"image" : "img/rental.mov"
		},
		{
			"link" : "file:///Users/limteraction/Desktop/_protoPie/samsung.html",
			"title" : "Thinking Beyond Mobile Screen",
			"description" : ["User Experience, Interaction"],
			"image" : "img/desing.png"
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
		var projectLink = projectCard.replace("%data%",projects.card[item].link);
		$(".card-deck").append(projectLink);
		var projectImage = projectCardImage.replace("%data%",projects.card[item].image);
		var projectTitle = projectCardTitle.replace("%data%", projects.card[item].title);
		var projectDescription = projectCardDes.replace("%data%", projects.card[item].description);
		$(".card:last").prepend(projectImage);
		$(".card-body:last").append(projectTitle,projectDescription);
	}
};
project.display();






