var productNamesArray = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'cthulhu', 'chair', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can','wine-glass'];
console.log(productNamesArray.length);
var productObjectsArray = [];

function ProductObject(name, location){
  this.name = name;
  this.location = location;
  this.clickCounter = 0;
  productObjectsArray.push(this);
}
new ProductObject('bag', 'assets/bag.jpg');

function productCreation(){
  for(var i = 0; i < productNamesArray.length; i++){
    console.log(i);
    if(i === 17){
      console.log(17);
      new ProductObject(productNamesArray[i], 'assets/' + productNamesArray[i] + '.gif');
    }
    else{
      console.log(i);
      new ProductObject(productNamesArray[i], 'assets/' + productNamesArray[i] + '.jpg');
    }
  }
}
productCreation();
// (function productObjectCreation() {
//   for(i = 0; i < productNamesArray.Length; i++){
//     if(i === 17){
//       new ProductObject(productNamesArray[i], 'assets/' + productNamesArray[i] + '.gif');
//     }
//     else{
//       new ProductObject(productNamesArray[i], 'assets/' + productNamesArray[i] + '.jpg');
//     }
//   }
// })();
console.log(productObjectsArray);
