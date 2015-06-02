var question2;
var question3;
var question4;
var question5;
var question6;
var question7;

// var displayMessage = function (message) {
// document.getElementById('messageContainer').innerHTML += message;
// };

console.log("You are walking home from work late in the evening. You decide to take a shortcut through a dark alley. In the back of the alley are three object glowing with mysterious colors. One glowing red appears to be a map, the second glowing blue appears to be a book, and the third glowing yellow appears to be an old style pistol.");


var answer1 = console.log("Curious, you bend down to pick up the... (Type the number of your selection) 1) Red Map, 2) Blue Book, or 3) Yellow Pistol");
	
	switch (answer1) {
		case "1":
			goToRed();
		break;

		case "2":
			goToBlue();
		break;

		case "3":
			goToYellow();
		break;
		
		default: 
			console.log("Hey crazy person. Pick 1, 2, or 3. Are you breaking the game on purpose?");
	}
	
	

	function goToRed(){
		doFirstPrompt();
		function doFirstPrompt() {
			question2 = prompt("You pick up the map and point at something that looks like a boot or a long shoe. You are in Italy, my dear. Which Italian city would you like to visit? Type your selection: Venice, Florence, Rome.");
		    
		    if (question2 === "Venice"){
		    	prompt("we like Venice, too. Please continue on the journey by clicking OK.");
		    	goToVenice();
		    }
		    else if(question2 === "Florence") {
		    	prompt("Florence is our favorite also. Click OK to continue.");
		    	goToFlorence();
		    }
		    else if(question2 === "Rome"){
		    	prompt("Ah! We just love Rome. Great choice! Click OK to continue.");
		    	goToRome();
		    }
		    else{
		    	displayMessage("Come on! Read what the game is asking you to do!");
		    	doFirstPrompt();
		    }
		}
	}

	function goToVenice(){
		doSixPrompt();
			function doSixPrompt(){
				question6 = prompt("Choose one in Venice: 1) Bench, 2) Fountain, 3) Love Tree"); 
			switch(question6) {
				case "1":
				var answerBench = prompt("Which bench do you want to sit on: 1) Venetian Palace Bench or 2) Gothic Street Bench?");
					if(answerBench === "1"){
						prompt("You will have 5 mins of privacy with the queen of Venice. Your life is complete.")
					}
					else if(answerBench === "2"){
						prompt("The Gothic monarchy is awaiting you at the Gate of Darkness. Your life is over.")
					}
					else{
						prompt("Please choose the correct bench");
						doSixPrompt();
					}
				break;

				case "2":
				var answerFountain = prompt("Careful! Water fountains in Italy are poisoned with love. Which magestic fountain would you rather drink from 1)Two Sea Horses or 2)Shell-Shaped Chariot?");
					if(answerFountain === "1"){
						prompt("Good choice! Abundance and wealth will be forever yours. The End.")
					// 	displayMessage("<br><br>Good choice! Abundance and wealth will be forever yours. The End.");
					}
					else if(answerFountain === "2"){
						prompt("Uh-ohs! Not your lucky choice. You are commissioned to bring water to Venice every day! The End.")
					}
					else{
						prompt("Please choose the correct fountain");
						doSixPrompt();
					}
				break;

				case "3":
				var answerFruit = prompt("Which color of apple do you choose 1) Red or 2) Green");
					if(answerFruit === "1"){
						prompt("You die. The End.");
					}
					else if(answerFruit === "2"){
						prompt("You look 20 years younger now. You will stay in Italy forever. The End.");
					}
					else{
						prompt("You need to choose fruit color");
						doSixPrompt();
					}
				break;
			
			}
		}
	}

	function goToFlorence(){
		doSevenPrompt();
			function doSevenPrompt(){
				question7 = prompt("Choose one in Florence: 1) Bella Suite, 2) Madonna, 3) Picasso"); 
			switch(question7) {
				case "1":
				var answerBella = prompt("Step up to one of the most impeccable and finest suites. You are in bed chamber in a warm, opulent setting. What would you choose: 1) Cotton sheets or 2) Roman tub?");
					if(answerBella === "1"){
						prompt("You feel right at home wrapped in cotton sheets and a flat-screen HD TV. You are staying here forever. The End.")
					}
					else if(answerBella === "2"){
						prompt("This is not for someone who wants to get in and out quickly. You are going to soak for a long, long time. We'll be back in 20 hours!")
					}
					else{
						prompt("Please make the right selection");
						doSevenPrompt();
					}
				break;

				case "2":
				var answerMadonna = prompt("Greet Madonna on a Magic Mountain. Do you want to steal Madonna statue? Yes or No?");
					if(answerMadonna === "Yes"){
						prompt("The Italian prison awaits you! You cannot return back to USA.");
					}
					else if(answerMadonna === "No"){
						prompt("You are a fool! You could have had the most valuable work of art!");
					}
					else{
						prompt("Please answer the question correctly");
						doSevenPrompt();
					}
				break;

				case "3":
				var answerPicasso = prompt("You are going to get a Picasso Selfie! Ready? Which one would you like 1) Picasso headshot or 2) Picasso body shot?");
					if(answerPicasso === "1"){
						prompt("You look ridiculous. Go shave then come back!");
					}
					else if(answerPicasso === "2"){
						prompt("Go hit the gym, then come back. You are not ready for the fabulous Picasso body shot.");
					}
					else{
						prompt("Seriously? You don't want a Picasso shot?");
						doSevenPrompt();
					}
				break;
			
			}
		}
	}


		function goToRome(){
		doEightPrompt();
			function doEightPrompt(){
				question8 = prompt("Choose one in Rome: 1) Bathing Beaty, 2) Shakespeare, 3) Romeo and Juliet"); 
			switch(question8) {
				case "1":
				var answerBeauty = prompt("Bathe at the La grande Bellezza @3PM. Please come nude. Do you have an athletic physic - Yes or No?");
					if(answerBeauty === "Yes"){
						prompt("Your entrance is free of charge. We want guests with athletic physic.");
					}
					else if(answerBeauty === "No"){
						prompt("Sorry, you are not welcomed at the Roman Empire. Only athletic physic is acceptable at the Roman Kingdom.");
					}
					else{
						prompt("Sorry, bathing is mandatory in Rome. You need to select something.")
					    doEightPrompt();
					}
					break;

				case "2":
				var answerShakespeare = prompt("Recite a Poem like a pro! FYI, if you do a bad job, Shakespeare has no pity. Which one do you want to recite 1) Sonnet 130 or 2) Sonnet 116?");
				if(answerShakespeare === "1"){
					var test = prompt("You are going to recite a Lover's Complaint Sonnet. You do not know it? Yes or No? Sorry, you lose.");
				    if(test === "Yes"){
				    	prompt("Good job! Shakespeare is proud of you. You win.");
				    }
				    else{
				    	prompt("You fail. Shakespeare is in tears.");
				    }


				}
				else if(answerShakespeare === "2"){
					var test2 = prompt("You are going to recite The Phoenix and the Turtle Sonnet. It is one of the most famous obscure works by Shakespeare. Do you know it? Yes or No?.")
					if(test2 === "Yes"){
						prompt("Awesome! Shakespeare is on cloud 10!");
					}
					else{
						prompt("You just made Shakespeare cry.");
					}
				}
				else{
					prompt("You need to choose a Sonnet.")
				    doEightPrompt();
				}
				break;

				case "3":
				var answerRomeoJuliet = prompt("Plunge into a love dust. Who do you like best 1) Juliet or 2) Romeo?");
				if(answerRomeoJuliet === "1"){
					prompt("You will achieve the greatest depth through your intense love with Juliet.")
				}
				else if(answerRomeoJuliet === "2"){
					prompt("It is not clear exactly why you chose Romeo, beyond immediate physical attraction, but okay. We accept your answer.")
				}
				else{
					prompt("Please choose wisely. Click OK to continue.");
					doEightPrompt();
				}
				break;
			
			}
		}
	}



function goToBlue(){

  var curious = prompt("You wake up in a field of flowers. There is adventure in every direction. You see the white rabbit go into a direction, will you be able to catch him? Pick one. : 1) North, 2) East, 3) South");

  switch (curious) {
    case "1":
    goNorth();
    break;
    case "2":
    goEast();
    break;
    case "3":
    goSouth();
    break;
    default:
    prompt("Sorry I didn't catch that, please reply again");
    goToBlue();
  }
}

function goNorth(){
  var curiouser = prompt("You follow the white rabbit down a rabbit hole. Down, down, down! You fall and find yourself within a room with a small table with a small bottle with a label that says drink me, and a small plate of cookies with a label that says eat me. Are you hungry or thirsty: 1) Eat me!,  2) Drink me!");

  if (curiouser ==="1"){
    prompt("You've grown ten feet tall, you begin to cry and are swallowed up by yours tears and washed out of the house");
    goToBlue();
  }
  else if (curiouser === "2"){
    prompt("If you drink much from a bottle marked poison it is certain to disagree with you sooner or later.");
  shrink(); 
  }
  else {
    prompt("Sorry I didn't catch that, please reply again");
  goNorth();
  }
}
  

  function shrink(){
    var redQueen = prompt("You have found yourself in the Red Queen's garden. She has spotted you and challenged you to a game of croquet. But you also see the white rabbit dart by. What will you do? : 1) Catch that rabbit!,  2) Play against the Red Queen" );

    if (redQueen ==="1"){
      prompt("Off with your head!!!");
      goToBlue();
    }
    else if (redQueen === "2")
    { prompt("You have coquered the Red Queen at her own game!");
   croquet(); }
   else
    {prompt("Sorry I didn't catch that, please reply again");
  shrink();
}

  }

  function croquet(){
    
    var queenAlice = prompt("You have conquered the Red Queen, the people of Wonderland have named you Queen Alice. What do you want to do as your first action as Queen Alice? : 1) Think of six impossible things before breakfast! 2) Go to a Mad Tea Party! ");

    if (queenAlice ==="1")
      {prompt("You can think of more impossible things, start over!");
    goToBlue();
      }
      else if (queenAlice === "2")
       { prompt("You turn down the path to go to the Mad Tea Party, you see the white rabbit and start to chase him, you trip and hit your head. You come to, and realize it was all a dream.");
      shrink(); }
      else
        {prompt("Sorry I didn't catch that, please reply again");
       goToBlue();
 }
}
    function goEast(){
    
     var question2 = prompt("you are walking East down the yellow brickroad, when you come to a fork in the road. On the right side there is a field of poppies. On the left there is a dark forest. Which way do you wanna go?: left or right?");
       if (question2 === 'left'){
         prompt("You walk to the field of poppies and are overcome with exhaustion, you fall into an eternal asleep. No one every finds you. Your journey ends here..");
       }
       else if (question2 === 'right'){
         goNorth();
       }
       else{
         prompt("That was not an option!");
       }
     }
   
   function goSouth(){
     doFirstPrompt();
     function doFistPrompt(){
       question3 = prompt("The strange light you decided to follow turned out to be alliens..ooo. The aliens have two spaceships, ones going to Mars and ones going to Venus. You have to pick a ship to go on. which on will it be?", "1 for Mars & 2 for Venus");
       if (question3 === '1'){
         prompt("You hop aboard the spaceship to Mars. Shortly after you get yo Mars, you realize that you had a one way ticket to be a test subjects for the Mars Mission. You will live out the rest of your days on Mars! Your journey ends here..");
       }
       else if(question3 === '2'){
         prompt("You hop aboard the spaceship to Venus. Shortly after you get to Venus, you are forced into an arranged marriage with Buzz-Lightyear. Your journey ends here..");
       }
       else{
         prompt("That was not an option!");
       }
     }
   }









	function goToYellow(){ 
    	doFirstPrompt();
		function doFirstPrompt() {
			console.log("You reach out and grasp the pistol. The moment your fingers touch it there is a blinding flash of light and you find yourself underwater. You kick and fight your way to the surface. Your head breaks and you see that you are in the ocean next to an enormous ship. A crewman throws you a rope and you climb from the water to the deck of the ship. Before you know it a large angry man spins you around by the shoulders forcing you to look right at his scarred face.");
			question2 = prompt("'Do ye be friend or foe?' Scarface demands of you (Type your selection) 'Foe' or 'Friend'");
			if (question2 === 'Foe'){ 
        		prompt("I'm no friend of pirates! You declare boldly. You're bravery is wasted. These are pirates after all. They make you walk the plank coerced by the tip of a sword. You go back in the water weighed down by a twin pair of cannonballs chained to your legs. The last thing you see is all the crew and the scarfaced captain laughing before your head sinks below the surface and you die.");
        		var answerOne = prompt("You have died. Would you like to play again?");
         			if(answerOne === 'Y') {
              			doFirstPrompt();
            		}
            		else{
            			prompt('Hey Lame-o. You just died. Quitters never win ya know?');
            		}
            }		
			else if(question2 === 'Friend') {
				prompt("'Are you kidding? I've been a pirate all my life. Aarrgh! Matey! Plug that bung-hole and such...' You proudly declare using your entire pirate vocabulary in one fell swoop. The captain and crew don't seem to be buying your story");
          		goToSecretShake();
			}
			else {
				prompt("Come on! It's real simple 'Friend' or 'Foe', two choices! What are you going to do later when there are more than two choices?!");
          		doFirstPrompt();
			}
		}	
	}

	function goToSecretShake(){
  		doSecondPrompt();
  		function doSecondPrompt() {
    		question3 = prompt("The captain looks at you skeptically then thrusts out his hand 'If ye do truly be a pirate then mayhaps you shall perform the secret pirate handshake?' Scarface says. Perform the secret pirate handshake (Type the number of your selection) 1)Fist Bump, 2)Confident wrist grasp, or 3)Kill him! He's a pirate!");
    		switch (question3) {
				case "1":
					prompt("You fist bump and mime an explosion and waggle your fingers downward. The captain shakes his head. 'You don' seem to know our ways. You'll have to learn as you go.' You start out on the lowest rung scrubbing decks and shining boots");
        			goToDrinkGame();
				break;

				case "2":
					prompt("You grasp the captains forearm like you've seen in all the movies and shoot him a wink. 'Arrgh... right... Well I'm afraid you'll be workin' your way up from the bottom,' the captain says. You are now stuck emptying the bilges and peeling potatoes in the galley");
        			goToDrinkGame();
				break;

				case "3":
					prompt("You slap away the captain's hand and pull the flintlock from his belt. Before he can react you plant a ball in his chest. 'I'm the captain now! Anyone have a problem with that?' you shout to the surrounding pirates. They all cheer your brave betrayal of your savior and you begin a long career of pilaging around the high seas. You never again think of how you came to this place. The only thought in your head is 'Damn, it feels good to be a pirate.'");
        			var answerTwo = prompt("You win, I guess. I mean you didn't die so that's basically a win. But that wasn't technically the end. Would you like to play again? Type 'Y' or 'N'");
            			if(answerTwo === 'Y') {
              				doSecondPrompt();
            			}
            			else {
              			break;
            			}
				break;
		
				default: 
					prompt("Yes or no question. Know what if you can't figure this out then you lost. You definately lost.");
        			doSecondPrompt();
			}
		}
	}

	function goToDrinkGame(){
  		doThirdPrompt();
  		function doThirdPrompt(){
    		question4 = prompt("That night the crew invites you to participate in a drinking game as pirates are wont to do. Now you must choose your drink. 1) Beer or Grog. Something piratey in any case. 2) Rum the pirate staple. Rum to the floor! 3) A purple smoking liquid that for some reason smells like raisins.");
    		switch (question4) {
				case "1":
					prompt("You have the bittersweet hoppy taste of beer in your mouth. The crew deems your selection a 'weak option' but continue to dole out large portions of the stuff. You become drunk and pass out. You were never awake when the Royal Navy took the pirate ship. You were hung days later for piracy after a quick trial.");
        			var answerThree = prompt("That's right I killed you. I couldn't be bothered to write a timeline and now you're dead. I feel guilty about it I assure you. Anyway want to play again? Type 'Y' or 'N'");
            		if(answerThree === 'Y') {
            			doThirdPrompt();
            		}
            		else {
              		break;
            		}
				break;

				case "2":
					prompt("You have the sweet taste of rum and a sharp burn in your thoat. The crew seem to deem your choice as acceptable and force cup after cup of the rum into your hands. You fall asleep and never even feel the rival pirates' blade when the sneak aboard in the night to take your ship");
        			var answerFour = prompt("Dead again! Man that George R.R. Martin knows something about fun. Killing off characters. Characters only mind, murder is bad kids. Play again? Type 'Y' or 'N'");
            		if(answerFour === 'Y') {
              			doThirdPrompt();
            		}
            		else {
              		break;
            		}
				break;

				case "3":
					prompt("You bravely pour the purple smoking liquid right down. The crew goes completely silent with shock. Suddenly your memory is filled with the experiences of thousands of pirate skills. Your body develops muscles perfect for pulling rope and climbing rigging. The purple potion has made you the perfect pirate!");
        			goToSwordFight();
				break;
		
				default: 
					prompt("Okay. If you haven't figured out the type 1, 2, or 3 thing by now you probably never will. Keep trying though I'm not going to be the one to destroy your delicate self-esteem.");
        			doThirdPrompt();
			}
		}
	}

	function goToSwordFight(){
  		doFourthPrompt();
  		function doFourthPrompt(){
  			prompt("The captain bursts in and demands, 'Which of you lagabouts stole me magic pirate potion'");
  			question5 = prompt("He sees the half empty cup of purple liquid in your hand and draws his sword. Choose a weapon to defend yourself! 1) Grab a nearby pillow 2) Use the cup of potion as a weapon 3) Swordfish, a real swordfish hanging on the wall");
    		switch (question5) {
				case "1":
					prompt("You grab a pillow from the nearest hammock and fwap the captain across the face. The flimsy material gives way releasing dozens of gray feathers into the air. You have an allergic sneezing fit and while you are unable to defend yourself the captain runs you through!");
        			var answerFive = prompt("You brought a pillow to a sword fight? Hint: don't defend yourself with pillow when the other guy has a sword. That's worse than bringing a knife to a gunfight. Play again? Type 'Y' or 'N'");
            		if(answerFive === 'Y') {
              			doFourthPrompt();
            		}
            		else {
              		break;
            		}
				break;

				case "2":
					prompt("You let out a shriek of fright and splash the remainder of the purple liquid into the captain's face. This turns out to be a mistake as he opens his mouth and slurps every last drop. He immediately becomes faster and stronger and slices and dices you in mere moments. Maybe it would have been better to grab a weapong of some kind.");
       				var answerSix = prompt("Yikes! Clearly the captain has had many a drink splashed in his face. Play again? Type 'Y' or 'N'");
            		if(answerSix === 'Y') {
              			doFourthPrompt();
            		}
            		else {
              		break;
            		}
				break;

				case "3":
					prompt("You sieze a large swordfish decoration from the wall and turn to defend yourself. Unfortunately, in spite of it's name, the swordfish is not as efficient a weapon as you had imagined. You manage to successfully thrust the pointy fish at the captain enough to keep him from sticking you but it is hardly an attack. Suddenly the crew around you rise up and one of them pushes the captain towards you where he is impaled on the end of the fish. Another whips the captains hat off his head and places it upon your own. 'Three cheers to the new captain' one of the pirates shouts. 'We never really liked the captain anyway' another whispers to you");
        			goToStoryFin();
				break;
		
				default: 
					prompt("Honestly? How does this keep happening to you. Type 1, 2, or 3. Here I'll do it for you. ... ... Okay, this is harder than I thought.");
        			doFourthPrompt();
			}
		}
	}

	function goToStoryFin(){
  		doFifthPrompt();
  		function doFifthPrompt(){
			prompt("Now thoroughly confused but immensly relieved to be alive you embark on an exciting new career as the unwitting captain of your very own pirate crew. You are the very best pirate around, thanks to the super pirate juice, but sometimes you wish you could just go back to the way things used to be.");
       		alert("You have completed the game. Kinda short and not a great end but this is a lot harder than you think. In any case, thanks for playing!");
		}
	}