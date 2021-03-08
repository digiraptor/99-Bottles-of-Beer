var numberOfBottles = 99

	while (numberOfBottles > (0)) {
		var bottleWord = "bottles";

        if (numberOfBottles === 1) {
			bottleWord = "bottle";
		} 
		console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
		console.log(numberOfBottles + " " + bottleWord + " of beer,");
		console.log("Take one down, pass it around,");
		numberOfBottles--;
		if (numberOfBottles === 1) {
			bottleWord = "bottle";
		} 
		else if (numberOfBottles === 0) {
			numberOfBottles = "No more";
			bottleWord = "bottles"
		}
		console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
	}

console.log("No bottles of beer on the wall");
console.log("No more bottles of beer!");
console.log("Time to go home, get out of town")
console.log("Because there's no more beer on the wall!")
    



