var cover = {
	"lead" : "Project1",
	"title" : "Designing Timer Pop-Up Guide"
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
	"textLabel" : "What is Switcher Timer",
	"text" : "Switcher has a killer feature called Timer which turns on or off the light automatically even without bluetooth pairing. While a user's Switcher app is connecting to a Switcher device via Bluetooth, he or she can save a timer to turn on or off the light inside the device so that it can function even without bluetooth connection with a smartphone. "
};



var introSection = newSection.replace("%data%", content.id);
var introText = prText8.replace("%data%",content.textTag);
var introTextLabel = prTextLabel.replace("%data%", content.textLabel);
var introTextSrc = prTextSrc.replace("%data%", content.text);
$("#automation").append(introSection);
$("#intro").append(introText);
$("#intro-text").append(introTextLabel,introTextSrc);


