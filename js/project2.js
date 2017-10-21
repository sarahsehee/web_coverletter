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
			"\"Gooma hates darkness...but I can't always turn on the light for him 24 hours because of utility fees.\""
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
			"\"Both of us are too busy in the morning. Sometimes we forgot to turn off the light before leaving the apartment.\""
			]
		}
	]
};


function displayPersona(){
	for (n in persona.type) {
		var cardDeck = proCardDeck.replace("%data%", persona.type[n].id);
		var cardImg = proCardImg.replace("%data%", persona.type[n].img);
		var cardName = proCardName.replace("%data%", persona.type[n].name);
		var cardList = proCardList.replace("%data%", persona.type[n].listId);
		var cardList = proCardList.replace("%data%", persona.type[n].listId);
		$("#persona:last").append(cardDeck);
		$(".pre:last").prepend(cardImg);
		$(".card-body:last").append(cardName,cardList);
		for (i=0; i<persona.type[n].listContent.length; i++){
			var cardListItem = proCardListItem.replace("%data%", persona.type[n].listContent[i]);
			$(".list-group:last").append(cardListItem);
		}
	}
};

displayPersona();

