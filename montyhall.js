var losses = 0;
var wins = 0;

function percent(winsOrLosses, totalGames) {
	return Math.round((winsOrLosses / totalGames) * 100) + "%";
}

function randomize(array) {
	var thisArray = array;
	var a = array.length;
	var b, c;

	while(a) { 
		b = Math.floor(Math.random() * a--); 
		c = thisArray[a];
		thisArray[a] = thisArray[b];
		thisArray[b] = c;
	}

	return thisArray;
}


function montyhall(decision, timesToRun) {

	var count = timesToRun;

	while (count > 0) {
		var doorOrder = randomize(["goat", "goat", "car"]);
		var guess = Math.floor(Math.random() * 3);

		if (doorOrder[guess] == "car") {
			if (decision == "stay") {
				wins++;
			}
			else {
				losses++;
			}
		}
		else {
			if (decision == "stay") {
				losses++;
			}
			else {
				wins++;
			}
		}

		count--;
	}
	return "Wins: " + percent(wins, 1000) + " Losses: " + percent(losses, 1000);
}

console.log(montyhall("switch", 1000));