function bubbleSort(array){
  var length = array.length;
  for(var j = 0; j < array.length; j++){
    for(var i = 0; i < length; i++){
      if(array[i]  > array[i + 1]){
        var swapValue = array[i];
        array[i] = array[i + 1];
        array[i + 1] = swapValue;
      }
    }
    length--;
  }
}
