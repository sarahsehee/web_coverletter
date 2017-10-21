var nav = {
	"left" : "Back",
	"right" : "Resume"
};

var bio = {
	"skills" : [
		{
			"skillTitle" : "Design",
			"skillItems" : ["Concept Developing","Wireframing","Flow", "Prototyping", "User Experience Design","User Interface Design", "Usability Test", "Analyzing Key Metrics","A/B Test"]
		},
		{
			"skillTitle" : "Tools",
			"skillItems" : ["SketchApp","Adobe Creative Suite","ProtoPie","FramerJS","InVision","Google Sheets","Google Analytics","HTML","CSS","Zeplin","Trello"]
		},
		{
			"skillTitle" : "Languages",
			"skillItems" : ["Native in Korean","Full professional proficiency in English","Elementary proficiency in German","Intermediate in Javascript"]
		}
	]
};
//Education Information JSON//
var education = {
	"schools" : [
		{ 
			"name" : "Rhode Island School of Design",
			"degree" : "Bachelor of Fine Arts",
			"dates" : "2009-2014",
			"location" : "Providence, RI USA",
			"major" : "Industrial Design"
		},
		{
			"name" : "Universität Der Künste - Berlin",
			"degree" : "Exchange Program",
			"dates" : "Fall 2013",
			"location" : "Berlin, Germany",
			"major" : "Product Design and Media Art"
		},
		{
			"name" : "MIT Sloan School of Management",
			"dates" : "Spring 2013",
			"degree" : "Joint Program",
			"location" : "Cambridge, MA USA",
			"major" : "Product Design and Development"
		}
	]
};

var work = {
	"jobs" : [
		{ 
			"employer" : "I/O, Inc.",
			"title" : "Product Designer",
			"location" : "Seoul, South Korea",
			"dates" : "Mar 2016 - May 2017",
			"description": "Designed smart lighting experience of a product Switcher. The primary role was to define and solve UX problems of the web and mobile applications by analyzing user behaviour. Led the product team to develop and ship sixteen features from May 2016 to December 2016 as a product manager. Collaborated with a variety of teams including customer support, engineering, and marketing."
		},
		{
			"employer" : "Samsung Research America",
			"title" : "Interaction Designer",
			"location" : "Mountain View, CA USA",
			"dates" : "Aug 2014 - Jul 2015",
			"description" : "Worked on a visual display product launching in 2018. Gained experience on both software and hardware, including touch screen and remote control UI. Collaborated with user researchers and engineers to create design iterations and working prototypes."
		},
		{
			"employer" : "Peek.com",
			"title" : "Design Intern",
			"location" : "San Francisco, CA USA",
			"dates" : "Jan 2015 - Jul 2015",
			"description" : "Worked alongside the design director to improve UI/UX across Peek’s web portal and create multiple design iterations for future assets. Participated in launching Peek’s iOS mobile app from early stages of UX design to high fidelity visual design iterations."
		}
	]
};

function displayWork(){
	for (job in work.jobs){
		$("#work").append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedWorkDates = HTMLworkDates.replace("%something%", work.jobs[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%something%", work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedWorkTitle,formattedWorkDescription);
		$(".left-column:last").append(formattedWorkEmployer, formattedWorkDates,formattedWorkLocation);
	}
};
displayWork();


function displaySkill(){
	for (name in bio.skills) {
		$("#skill").append(HTMLskillsStart);
		var formattedSkillTitle = HTMLskillsTitle.replace("%data%", bio.skills[name].skillTitle);
		$(".skill-entry:last").append(formattedSkillTitle);
		for (n=0; n<bio.skills[name].skillItems.length; n++){
			var formattedSkillItems = HTMLskillsItem.replace("%data%", bio.skills[name].skillItems[n]);
			$(".hi2:last").append(formattedSkillItems);
		}
	}
};

displaySkill();


education.display = function(){
	for (schoolItem in education.schools){
		$(".try").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[schoolItem].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[schoolItem].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[schoolItem].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[schoolItem].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[schoolItem].major);
		$(".school:last").append(formattedSchoolName, formattedSchoolDegree, formattedSchoolMajor, formattedSchoolDates, formattedSchoolLocation);
	}
};
education.display();

