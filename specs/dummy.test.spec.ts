import { expect }  from 'chai';

function addOneToEveryArrayItem(arr: number[]) {
    return arr.map(function (arrayitem){
        return arrayitem +1; 
    });
}

function summOfTheArrayItems(arr:number[]){
    let summ = 0;
    for (let i =0; i < arr.length; i++) {
        summ = summ + arr[i];
    }
    return summ;
}

function removeOneFromEveryArrayItem(arr:number[]) {
    return arr.map(function (arrayitem){
        return arrayitem -1; 
    });
}
describe('Some unit tests', function(){
    it ('[P] addOneToEveryArrayItem', function(){
        expect(addOneToEveryArrayItem([1 , 2])).to.deep.equal([2, 3]);
    });
});
it ('[P] summOfTheArrayItems', function(){
    expect(summOfTheArrayItems([1 , 2])).to.deep.equal(3)
});

it ('[P] removeOneFromEveryArrayItem', function(){
    expect(removeOneFromEveryArrayItem([1 , 2])).to.deep.equal([+0 , 1])
});