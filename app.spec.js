var expect = chai.expect;

describe('bubbleSort()', function () {


  describe('sort', function (){
    it('should sort the numbers to in order', function (){
      var numbers = [6,7,1,9,5,2,3,8,4];
      var sortedNumbers = [1,2,3,4,5,6,7,8,9];
      bubbleSort(numbers);
      expect(numbers).to.deep.equal([1,2,3,4,5,6,7,8,9]);
    });
  });
});