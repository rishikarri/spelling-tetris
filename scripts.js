var canvas = document.createElement('canvas');
var context = canvas.getContext('2d'); 

canvas.width = 675; 
canvas.height = 480; 

var backgroundImage = new Image();
backgroundImage.src = "Images/space-background.png"

$(document).ready(()=>{	

	document.getElementById("middle-section").appendChild(canvas);	

})

//create slot constructor

//pass slot a letter and a location for it to then draw a bracket

slotArray = []; 

class Slot{
	constructor(correctLetter, slotPositionX, slotPositionY){
		this.correctLetter = correctLetter; 		
		this.image = new Image(); 
		this.image.src = "Images/letter-slot2.png"
		this.slotPosition = {
			x: slotPositionX,
			y: slotPositionY
		}
	}
}
class SlotHolder{
	constructor(word){
		this.word = word; 		
		this.numSlots = word.length;
		this.createSlots = function(){

			// create slotWidth
			var slotWidth = canvas.width / this.numSlots - 40;
			console.log(slotWidth);
			var slotNumber = 0;
			for (var i = 0; i < this.numSlots; i++){
				//create a name for each slot
				var slotName = "slot" + slotNumber;

				// create SlotPositionX
				var slotPositionX = slotNumber * slotWidth + 50;

				var slotPositionY = 330;
				var correctLetter = this.word[i];
				//create a position object for each slot
				var slotName = new Slot(correctLetter, slotPositionX, slotPositionY);

				slotArray.push(slotName)
				slotNumber++;

			}
		}
	}
}

var catSlotHolder = new SlotHolder('cat');
catSlotHolder.createSlots();

var letterArray = []

var word1 = catSlotHolder.word;

	for (var i = 0; i < word1.length; i++){
		letterArray.push(word1[i]);
	}
console.log(letterArray);


// ----------------------------------------------------------
// ----------------Draw and Update Section-------------------
// ----------------------------------------------------------

function update(){

}
//create draw function
function draw(){
	context.drawImage(backgroundImage, 0, 0)
	for (var i=0; i < slotArray.length; i++){
		context.drawImage(slotArray[i].image, slotArray[i].slotPosition.x, slotArray[i].slotPosition.y)
	}
	requestAnimationFrame(draw);
}

draw();