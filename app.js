function bubbleSort(){
  var moves = 0;
  if(typeof this !== typeof []){
    throw  new TypeError('argument is not a array');
  }
  var length = this.length;
  for(var j = 0; j < this.length; j++){
     for(var i = 0; i < length; i++){
      if(isNaN(this[i])){
        throw new TypeError('array has no numbers');
      }
      if(this[i]  > this[i + 1]){
        var swapValue = this[i];
        this[i] = this[i + 1];
        this[i + 1] = swapValue;
        moves++;
        if(isNaN(this[i])){
          throw new TypeError('array has no numbers');
        }
        var newDiv = document.createElement('div');
        var newContent = document.createTextNode(this);
        newDiv.appendChild(newContent);
        var currentDiv = document.getElementById("div1");
        document.body.insertBefore(newDiv, currentDiv);
      }
    }
    length--;
  }
  return moves;
}
var numbers = [6,7,1,9,5,2,3,8,4];
Array.prototype.bubbleSort = bubbleSort;
