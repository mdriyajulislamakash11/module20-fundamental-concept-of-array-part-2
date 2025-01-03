//_________________ module 20 part-2 _______________________/
//20.5_1 Array Traversal using for and while Loop.

const frinen = ["abul", "babul", "kabul", "habu", "basar"];
for(let i of frinen){
      // console.log(i)
};
_____________________________________________/


//____________________ foor loop with array of string _______________________/
let frinend = ["abul", "babul", "kabul", "habu", "basar"];
for(let i = 0; i <= frinend.length; i++){
      // console.log(i)
      console.log(frinend[i])
};
//______________________________________________/.



//____________________ foor loop with array of number _______________________/
const number = [11, 42, 432, 53, 53, 325, 63];
for(let i = 0; i < number.length; i++){
      // console.log(i)
      console.log(number[i])
};
//______________________________________________/.


//____________________ while loop with array of string _______________________/
let frinend = ["abul", "babul", "kabul", "habu", "basar"];
let i = 0;
while(i < frinend.length){
      // console.log(i)
      console.log(frinend[i])
      i++;
}
//______________________________________________/.



//____________________ while loop with array of number _______________________/
const number = [11, 42, 432, 53, 53, 325, 63];
let n = 0;
while(n < number.length){
      // console.log(n);
      console.log(number[n]);
      n++;
};
//\________________________________________/.





// \_________________ module 20 part-2 _______________________/
//20.5_2 Reversing an array with/without reverse method.
//      \________________ reverse _________________/
const numbers = [11, 22, 33, 44, 55, 66, 77, 88];
console.log(numbers.reverse()) 
const reverse = numbers.reverse();
console.log(reverse)

//______________ for of __________________/
const rev_numbers = [];
for(const i of numbers){
      rev_numbers.unshift(i)
} 
console.log(rev_numbers)



//______________ for loop __________________/
const numbers = [11, 22, 33, 44, 55, 66, 77, 88];
const reverse = [];
for(let i = 0; i < numbers.length; i++){
      const num = numbers[i];
      reverse.unshift(num)
};
console.log(reverse)
//_____________________________________________________/

//__________ reverse way to loop _____________/
//way 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const reverse = [];
for(let i = numbers.length -1; i >= 0; i--){
      const num = numbers[i];
      reverse.unshift(num)
}
console.log(reverse)

//way 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const reverse = [];
for(let i = numbers.length -1; i >= 0; i--){
      const num = numbers[i];
      reverse.push(num)
}
console.log(reverse)
// \_____________________________________________/.



// \_________________ module 20 part-2 _______________________/
//20.5_3 Sort an array problems and solution.
//      \________________ sort() _________________/
const person = ["rakib", "bakib", "akib", "vaiya", "raiya", "taniya","samiya",];
const sortPerson = person.sort();
console.log(sortPerson);

const number = [32, 42, 13, 42, 11, 33, 22, 44, 33, 77, 88, 99];
const sortNumber_asc = [...number].sort(function(a , b){return a - b});
const sortNumber_dsc = [...number].sort(function(a , b){return b - a});
console.log(sortNumber_asc)
console.log(sortNumber_dsc)

//sort 2 prokar.

Ascending -----> smaller to larger: [1, 2, 3, 4, 5, 6, 7, 8];
Descending ----> larger to smalller: [8, 7, 6, 5, 4, 3, 2, 1];
//________________________________________________________________________/