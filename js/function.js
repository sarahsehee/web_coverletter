
var jumbotron = {
	"lead" : "Application",
	"name" : "Hi, ProtoPie!",
	"coverletter" : "My name is Sarah Sehee Lim. This is my web application including a cover letter, resume and portfolio for <span>a patissier position<\/span>. Throughout all pages on this website, every single moving images including .gif and videos are made with ProtoPie🙌 <br><br> As an international student in the States, I’ve always encountered language barriers in design critique sessions and presentations. Back then, there weren’t many choices of prototyping tools other than pen-and-paper mockup and form core. Rarely some students dived into the sea of coding, but not many people returned successfully. Prototyping wasn’t a tremendous issue because everyone was quite satisfied with their filthy paper models like Pop!<br> My concern about effective communication escalated as soon as I landed in Silicon Valley as an interaction designer. Unlike hardware products that I studied in school, there are too many screens, animations, and endless iterations after multiple cycles of user testing. It was impossible to get a tool that is \"just right\". I spend overnight working on a prototype that is half-done, failed to get a feedback I desperately needed and couldn’t go on mythical five-person usability testing because I was already exhausted from prototyping.<br><br>I believe my journey to find a just-right prototyping tool and a broad range of interaction design career will work like magical sprinkles in baking future Pies. I am ready to join ProtoPie to help fellow designers to save their precious time and get confident in their design process as I did✨",
	"links" : [
		{
			"text" : "Check out resume",
			"link" : "resume.html"
		}
	]
};


var projects = {
	"card" : [
		{	
			"index" : "Project 1",
			"link" : "timer.html",
			"title" : "Improving Timer Experience",
			"description" : ["User Experience"," User Interface"," Product Management"]
		},
		{
			"index" : "Project 2",
			"link" : "curation.html",
			"title" : "Designing Interactive Survey",
			"description" : ["User Interface"," Interaction Design"," Prototyping"," User Testing"]
		},
		{
			"index" : "Project 3",
			"link" : "samsung.html",
			"title" : "Thinking Beyond Mobile Screen",
			"description" : ["User Experience, Interaction Design"]
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
		var projectIndex = projectCardIndex.replace("%data%", projects.card[item].index);
		var projectTitle = projectCardTitle.replace("%data%", projects.card[item].title);
		var projectDescription = projectCardDes.replace("%data%", projects.card[item].description);
		$(".card-body:last").append(projectIndex,projectTitle,projectDescription);
	}
};
project.display();






