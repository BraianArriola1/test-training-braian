import { expect } from 'chai';

class NumberOperations {
    myNumbers: number[];
    constructor (arr: number[]) {
        this.myNumbers = arr;
    }

    addOneToEveryMyNumbers() {
        return this.myNumbers.map(function(arrayItem) {
            return arrayItem +1;
        });
    }
    findLowestNumberInMyNumbers() {
        return Math.min (...this.myNumbers);
        
    }
}

describe ('NumberOperations', function () {
    it ('[P] NumberOperations.addOneToEveryMyNumbers', function () {
        const myNumberOperation = new NumberOperations( [1, 2, 3, 4]);
        expect(myNumberOperation.addOneToEveryMyNumbers()).to.deep.equal([2,3,4,5]);
    });
    it ('[P] NumberOperations.findLowestNumberInMyNumbers', function () {
        const myNumberOperation = new NumberOperations( [1, 2, 3, 4]);
        expect(myNumberOperation.findLowestNumberInMyNumbers()).to.deep.equal(1);
    });
})