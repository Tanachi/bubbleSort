var expect = chai.expect;

describe('bubbleSort()', function () {


  describe('sort', function (){
    it('should sort the numbers to in order', function (){
      var numbers = [6,7,1,9,5,2,3,8,4];
      expect(numbers.bubbleSort()).to.equal(19);
      expect(numbers).to.deep.equal([1,2,3,4,5,6,7,8,9]);
    });
  });
  describe('errorCheck', function (){
    it('should throw a error if argument is not a array', function (){
      expect(bubbleSort.bind('hello')).to.throw();
      expect(bubbleSort.bind([1,2,3,'d'])).to.throw();
    });
  });
});