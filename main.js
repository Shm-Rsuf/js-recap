//01. Destructring arrays
/* const arr = [10, 20, 30, 40, 50];
const [fNum, secondNum, , fourNum] = arr;
console.log(fNum, secondNum, fourNum); */

//02. Destructring objects
/* const student = {
  fName: "Shm",
  lName: "Usuf",
  id: "D-16008",
};

const { fName, lName } = student;
console.log(fName, lName); */

//03. The Spread Operator (...)
/* const arr = [1, 3, 4, 5, 6, 9];
const newArr = [...arr];
newArr.pop();

console.log(arr);
console.log(newArr);

const human = {
  name: "Jhon Doe",
  lang: "English",
};

const animal = { ...human };
animal.name = "Tiger";
animal.lang = "null";
console.log(human);
console.log(animal); */

//04. Rest Pattern and Parameters
/* const friends = ["atik", "jony", "arif", "alia"];
const [closeFriend, ...others] = friends;
// console.log(closeFriend, others);

const user = {
  name: "John",
  age: 25,
  skills: "programmer",
  income: 15000,
};

const { name, skills, ...rest } = user;
console.log(name, skills, rest); */

// 05. Short Circuiting (&& and ||)
// let money = 100;
// money >= 50 && console.log("I am rich");

// 06. The Nullish Coalescing Operator (??)
/* let money = 0;
money ?? (money = 10);
console.log(money); */

// 07. Enhanced Object Literals
/* let burgerPrice = 250;
const restaurant = {
  name: "Puran Dhaka Burger House",
  burgerPrice,
};

console.log(restaurant); */

// 08. Optional Chaining (?.)
/* const obj = {
  title: "javaScript",
  frameworks: [
    {
      dist: "angular",
      mata: "unknown",
      year: 2010,
    },
    {
      dist: "vue",
      mata: {
        title: "mata",
      },
      year: 2015,
    },
  ],
};

console.log(obj.frameworks[1].mata?.title?.name); */

// 09. Looping Objects: Object Keys, Values, and Entries
/* const player = {
  name: "Messi",
  country: "Argentina",
  goals: 800,
  awards: "unknown",
};
const playerKeys = Object.keys(player);
const playerValues = Object.values(player);
const playerEntries = Object.entries(player);
// 10. Looping Arrays: The for-of Loop
for (const key of playerKeys) {
  // console.log(key);
}

for (const value of playerValues) {
  // console.log(value);
}

for (let [key, value] of playerEntries) {
  console.log(key, value);
} */
// 11. Primitives vs. Objects (Primitive vs. Reference Types)
// 12. The this Keyword
/* var birthYear = 2002;
const student1 = {
  name: "Atik",
  birthYear: 1996,
  calcAge: () => {
    console.log(new Date().getFullYear() - this.birthYear);
  },
};
const student2 = {
  name: "Jony",
  birthYear: 1999,
  calcAge: student1.calcAge,
};

// student1.calcAge();
student2.calcAge(); */
// 13. Regular Functions vs. Arrow Functions
/* function power(a, b = 0) {
  return a ** b;
}
console.log(power(2));

const product = function (a, b) {
  return a * b;
};
console.log(product(5, 6));

const diff = (a, b) => {
  return a - b;
};
console.log(diff(10, 5));
 */

const add = (a, b, ...rest) => {
  return a + b;
};
console.log(add([5, 10, 15, 20]));
