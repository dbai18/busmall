var productNamesArray = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'cthulhu', 'chair', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can','wine-glass'];
// console.log(productNamesArray.length);
var productObjectsArray = [];

function ProductObject(name, location){
  this.name = name;
  this.location = location;
  this.clickCounter = 0;
  productObjectsArray.push(this);
}

(function productObjectCreation() {
  for(i = 0; i < productNamesArray.length; i++){
    if(i === 17){
      new ProductObject(productNamesArray[i], 'assets/' + productNamesArray[i] + '.gif');
    }
    else{
      new ProductObject(productNamesArray[i], 'assets/' + productNamesArray[i] + '.jpg');
    }
  }
})();
// console.log(productObjectsArray);

function randomObject(){
    return Math.floor(Math.random() * productNamesArray.length);
}

//wanted to be sure 0 & 19 were returned
// (function testRandom(){
//   for(i = 0; i < productNamesArray.length * 5; i++){
//     console.log(randomObject());
//   }
// })();

function showImages(){
  var index = randomObject();
  document.getElementById('left_img').src = productObjectsArray[randomObject()].location;
  document.getElementById('mid_img').src = productObjectsArray[randomObject()].location;
  document.getElementById('right_img').src = productObjectsArray[randomObject()].location;
}
showImages();
