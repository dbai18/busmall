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


//wanted to be sure 0 & 19 were returned
// (function testRandom(){
//   for(i = 0; i < productNamesArray.length * 5; i++){
//     console.log(randomObject());
//   }
// })();

var renderCounter = {
  left: null,
  mid: null,
  right: null,

  left: document.getElementById('left_img'),
  mid: document.getElementById('mid_img'),
  right: document.getElementById('right_img'),

  randomObject: function() {
    return Math.floor(Math.random() * productNamesArray.length);
  },
  showImages: function(){
    renderCounter.left = productObjectsArray[renderCounter.randomObject()];
    renderCounter.mid = productObjectsArray[renderCounter.randomObject()];
    renderCounter.right = productObjectsArray[renderCounter.randomObject()];

    if(renderCounter.left == renderCounter.mid || renderCounter.left == renderCounter.right || renderCounter.mid == renderCounter.right){
      renderCounter.randomObject();
    }
    document.getElementById('left_img').src = renderCounter.left.location;
    document.getElementById('left_img').id = renderCounter.left.name;
    document.getElementById('mid_img').src = renderCounter.mid.location;
    document.getElementById('mid_img').id = renderCounter.mid.name;
    document.getElementById('right_img').src = renderCounter.right.location;
    document.getElementById('right_img').id = renderCounter.right.name;
  }

}
// var randomIndex = [];
// function randomIndexGen(){
//   while (randomIndex.length < 3) {
//         var index = randomObject();
//         if (randomIndex.indexOf(index) === -1) {
//           randomIndex.push(index);
//         }
//       }
//       return randomIndex;
// }
// randomIndexGen();
