// Constructor
function Flower(type, color, petals, smellsPretty, length, needsSunlight, needsWater) {
	this.type = type;
	this.color = color;
	this.petals = petals;
	this.smellsPretty = smellsPretty;
	this.length = length;
	this.needsSunlight = needsSunlight;
	this.needsWater = needsWater;

	// Create a method called crossPollinate
	// The method will have another Flower object as a parameter.
	this.crossPollinate = function(otherFlower) {

		// Return a new Flower. Make the Flower's color a mix of both 
		// 'parent' colors. (i.e. red, yellow = "red-yellow") We don't 
		// care about the color wheel.		
		// Example: return daisy.color + '-' + rose.color; 
	    var combined_color = this.color + '-' + otherFlower.color; 

		// Make the new petal count an average between the two parents' 
		// petal counts.	    	
	    var petals = ((this.petals + otherFlower.petals)/ 2); 
	    	 
		// The smellPretty gene is recessive unfortunately. This means 
		// that a flower will smell pretty IF and only IF both flowers 
		// smell pretty.
		if (this.smellsPretty === true && otherFlower.smellsPretty === true){
			return true; 
		}else {
			return false; 
			}
		};
	    
	// Create a method within the Flower object that will render a description 
	// of your flower along with all of its vital statistics we have collected 
	this.render = function(otherFlower) {
		var vital_statistics= this.type + "," + this.color + "," + this.petals + "," + this.smellsPretty + "," + this.length + "," + this.needsSunlight + "," + this.needsWater;

	// as well as an image to a simple website.
	// Name your webpage "The San Francisco First Annual General Assembly Parade 
	// of Flowers."
	// If we are consistent botanists all of our objects will have the same methods 
	// and properties.   

};
} 

// Created two new Flowers
var rose = new Flower("rose", "red", 10, true, 3, true, true);
var daisy = new Flower("daisy", "white", 5, false, 5, false, true);

rose.crossPollinate(daisy);