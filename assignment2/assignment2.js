

//forEach method 
//function
Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}


//map method
//function
Array.prototype.myMap = function (callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]));
    }
    return newArray;
}

//filter method
//function
Array.prototype.myFilter = function (callback){
    let newArray = [];
    for (let i = 0; i < this.length; i ++) {
        if(callback(this[i])){
            newArray.push(this[i]);
        }
    }
    return newArray;
}

//some method
//function 
Array.prototype.mySome = function (callback){
    for (let i = 0; i < this.length; i++){
        if(callback(this[i])){
            return true;
        }
    }
    return false;
}

//every method
//function
Array.prototype.myEvery = function (callback){
    for (let i = 0; i < this.length; i ++){
        if(!callback(this[i])){
            return false;
        }
    }
    return true;

}

//reduce method
//function
Array.prototype.myReduce = function (callback, initial){
    let accumulator = initial !== undefined ? initial : this[0];

    for (let i = initial !== undefined ? 0 : 1; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    
    return accumulator;

}

//include method
//function
Array.prototype.myInclude = function(searchEle, fromIndex){
    const startIndex = fromIndex !== undefined ? fromIndex: 0;
    for(let i = startIndex; i < this.length; i ++){
        if(this[i] === searchEle){
            return true;
        }
    }
    return false;
}

//indexOf method
//function
Array.prototype.myIndexOf = function(searchEle, fromIndex){
    const startIndex = fromIndex !== undefined ? fromIndex: 0;
    for(let i = startIndex; i < this.length; i ++){
        if(this[i] === searchEle){
            return i;
        }
    }
    return -1;
}

//push method
//function
Array.prototype.myPush = function(...elements){
    const origLength = this.length;
    for(let i = 0; i < elements.length; i++){
        this[origLength + 1] = elements[i];
    }
}

//lastIndexOf method
//function
Array.prototype.myLastIndexOf = function(searchEle, fromIndex){
    const startIndex = fromIndex !== undefined ? fromIndex: this.length - 1;
    for(let i = startIndex; i >= 0; i--){
        if(this[i] === searchEle){
            return i;
        }
    }
    return -1;
}

//Object.keys()
//function
function grabKeys(obj){
    let keys = [];

    for(let key in obj){
        keys.push(key);
    }
    return keys;
}

//Object.values()
//function
function grabValues(obj){
    let values = [];

    for(let key in obj){
        values.push(obj[key]);
    }
    return values;
}

//miscellaneous problems
//range function
function getRange(start, end, step){
    
    const calStep = step !== undefined ? step : (start <= end ? 1 : -1);
    console.log(end);
    const range = [];
    if(calStep > 0){
        
        for(let i = start; i <= end; i += calStep){
            range.push(i);
        }
    }else if(calStep < 0){

        for(let i = start; i >= end; i += calStep){
            range.push(i);
        }
    }
    return range;

}
//sum function
function getSum(numbers){
    let sum = 0;
    for (let num of numbers){
        sum += num;
    }
    return sum;
}

//reverseArray
function reverseArray(arr){
    const reversed = [];
    for(let i = arr.length - 1; i >= 0; i--){
        reversed.push(arr[i]);
    }
    return reversed;
}

function reverseArrayInPlace(arr){
    const indexOfHalf = Math.floor(arr.length / 2);
    const length = arr.length;
    for(let i = 0; i < indexOfHalf; i++){
        //swap
        let temp = arr[i];
        arr[i] = arr[length - 1 - i];
        arr[length - 1 - i] = temp;

    }
    return arr;
}

function prepend(element, list) {
    return { value: element, rest: list };
}

function arrayToList(array){
    let newList = null;
    for(let i = array.length - 1; i >= 0; i--){
        newList = prepend(array[i], newList);
    }
    return newList;
}

function listToArray(list){
    let newArr = [];
    while(list){
        newArr.push(list.value);
        list = list.rest;
    }
    return newArr;
}

//nth
function nth(list, pos){

    if (pos === 0) {    
        return list.value;
    } else {
        return nth(list.rest, pos - 1);
    }
    return undefined;
}

//deep Equal - not tested
function deepEqual(a, b){
    if(typeof a === typeof b || a === null || b === null){
        return false;
    }

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if(keysA !== keysB){
        return false;
    }
    for(let key of keysA){
        if(!keysB.includes(key)){
            if(a[key] !== b[key]){
                return false
            }
        } else {
            return false;
        }
    }
    return true;

}

//move zeros 
function moveZeros(nums){
    let lastNonZeroIndex = 0;
    for (let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[lastNonZeroIndex] = nums[i];
            lastNonZeroIndex ++;
        }
    }
    for(let i = lastNonZeroIndex; i < nums.length; i++){
        nums[i] = 0;
    }
    return nums
}


//testing
const numbers1 = [1, 2, 3];
let sum = 0;
numbers1.myForEach(function (number) {
    sum += number;
}
);

const newArray1 = numbers1.myMap(function(number){
    return number * 2;
}
);

const newArray2 = numbers1.myFilter(function(number){
    return number % 2 === 0;
});

const checkCond1 = numbers1.mySome(function(number){
    return number % 5 === 0;
});

const checkCond2 = numbers1.myEvery(function(number){
    return number % 1 === 0 ;
});
const sum2 = numbers1.myReduce(function(accumulator, current){
    return accumulator + current;
});

const sum3 = numbers1.myReduce(function(accumulator, current){
    return accumulator + current;
}, 2);

const incluEle = numbers1.myInclude(8);
const indexOfEle = numbers1.myIndexOf(2);


let pushEle = numbers1;
pushEle.push(4,3);

const lastIndexOfEle = numbers1.myLastIndexOf(3);

const testObj = {name: "student1", subjA: 30};

console.log(sum);
console.log(newArray1);
console.log(newArray2);
console.log(checkCond1);
console.log(checkCond2);
console.log(sum2);
console.log(sum3);
console.log(incluEle);
console.log(indexOfEle);
console.log(pushEle);
console.log(lastIndexOfEle);
console.log(grabKeys(testObj));
console.log(grabValues(testObj));
console.log(getRange(10, 1));
console.log(getSum(getRange(3,1)));
console.log(reverseArray(getRange(1,5)));
console.log(reverseArrayInPlace(getRange(1,5)));
console.log(listToArray(arrayToList([1,2,3,4])));
console.log(nth(arrayToList([1,2,3,4]), 1));
console.log(moveZeros([1,2,0,3,0,5]));

