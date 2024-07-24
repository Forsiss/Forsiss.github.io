/*
const myArray = [10, 20, 30];
myArray[2] = 99;
console.log(myArray);



function getLastValue(array){
    const lastIndex = array.length - 1;
    return array[lastIndex];
};

console.log(getLastValue([1, 20, 22, 24, 5, 10]));
console.log(getLastValue(['hi','hello','hey']));



function arraySwap(array){
    const firstValue = array[0];
    const lastIndex = array.length - 1;
    const lastValue = array[lastIndex];

    array[0] = lastValue;
    array[lastIndex] = firstValue;
    

    return array
};
 
console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(['hi','hello','good']));
*/


/*
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
  }
*/

/*
for (let i = 5; i >= 0; i --) {
    console.log(i);
}
*/

/*
let aArray = [1, 2, 3];

let bArray = [];

for(let i = 0; i < aArray.length; i++){
    bArray.push(aArray[i] + 1);
};

console.log(bArray);
*/

/*
function addOne(array){
    const newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(array[i] + 1);
    }
    
    return newArray;
};

console.log(addOne([1, 2, 3]));
console.log(addOne([-2, -1, 0, 99]));

function addNum(array, num){
    const newArray = [];
    for(let i = 0; i < array.length; i ++) {
        newArray.push(array[i] + num);
    } 
    
    return newArray;
};

console.log(addNum([1,2,3], 2));
console.log(addNum([1,2,3], 3));
*/
/*
function addArrays(array1, array2){
    const newArray = [];
    for(let i = 0; i < array1.length; i++){
        newArray.push(array1[i] + array2[i]);
    }

    return newArray
};

console.log(addArrays([1, 1, 2],[1, 1, 3]));
*/
/*
function countPositive(nums){
    let result = 0;
    for (let i = 0; i < nums.length; i++){
        if(nums[i] > 0){
            result ++
        }
    }
    return result;
};

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

function minMax(nums){
    let result = {
        min: nums[0],
        max: nums[0]
    };
    for(let i = 0; i < nums.length; i++){
        const value = nums[i];
        if(value < result.min){
            result.min = value
        };
        if(value > result.max){
            result.max = value;
        };
    }

    return result;
}

console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));
console.log(minMax([3]));
console.log(minMax([]));

function countWords(words) {
    const result = {};

    for (let i = 0; i < words.length; i++) {
      const word = words[i];

      if (!result[word]) {
        result[word] = 1;
      } else {
        result[word]++;
      }
    }

    return result;
  }

  console.log(countWords(['apple', 'grape', 'apple', 'apple', 'banana', 'banana']));
*/



