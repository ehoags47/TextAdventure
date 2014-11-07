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