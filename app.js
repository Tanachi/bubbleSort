function bubbleSort(array){
  if(typeof array !== typeof []){
    throw  new TypeError('argument is not a array');
  }
  var length = array.length;
  array.forEach(function(){
     for(var i = 0; i < length; i++){
      if(isNaN(array[i])){
        throw  new TypeError('array has non numbers');
      }
      if(array[i]  > array[i + 1]){
        var swapValue = array[i];
        array[i] = array[i + 1];
        array[i + 1] = swapValue;
        if(isNaN(array[i])){
          throw  new TypeError('array has non numbers');
        }
      }
    }
    length--;
  });

}
