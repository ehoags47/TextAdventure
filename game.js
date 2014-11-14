var makePlayer = function(name, maxhealth){
   var newPlayer = {
                name: name,
                maHealth: maxHealth,
                items: []
        };
   newPlayer.pickUp = function(item){
                this.items.push(item);
        };
   newPlayer.drop = function(item){
                var itemLocation = this.items.indexOf(item);
                if (itemLocation > 0){
                        this.items.splice(item, 1);
                }
        }
    newPlayer.toString = function(){
                return "You have: " + this.items.toString();
        };
  return newPlayer;
}

function interpret(input){
  console.log(" interpret");
  var trimmedStr = input.trim();
  var splitStr = trimmedStr.split();
  var action = splitStr.shift();
  var target = splitStr.join();
}
function execute(command){
  console.log(" execute");
  var action = command.action;
  var actionFunction = player[action];
  \actionFunction(.......................);
}
function report(){
  console.log(" report");
}
function gameStep(input){
  console.log("Stepping...");
  var command = interpret(input);
  execute(command);
  report();
}
function gameStart(){
  console.log("Starting...");
  var inputBox = document.querySelector("input");
  inputBox.addEventListener("keyup", function(event){
    if(event.keycode === 13){
      var inputText = this.value;
      gameStep(inputText);
    }
  });
}

window.onload = gameStart









var playing around = funtion(){
  var descripElem = document.getElementById('descrip');
  
  console.log(descripElem.tagname); //should print p
  console.log(descripElem.parentNode.tagname); //should print OUTPUT
  console.log(descripElem.innerHTML); //should print the paragraph text\

  var inputBox = document.querySelector('#action');
  console.log(inputBox.tagname); //should print INPUT
  console.log(inputBox.value); //should print nothing
  
}

window.onload = playingAround