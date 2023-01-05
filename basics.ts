let username: string = "Corneliu Vadim";
let hasLoggedIn: boolean = true;

// hasLoggedIn += "Ciprian";

console.log(hasLoggedIn);

let myNumber: number = 3;

let myRegEx: RegExp = /foo/;

const names: string[] = username.split(" ");
const myValues: Array<number> = [1, 2, 3];

interface Person {
  first: string;
  last: string;
}

const myPerson: Person = {
  first: "Ion",
  last: "Ionelule",
};

const ids: Record<number, string> = {
  10: "a",
  20: "b",
};

ids[30] = "c";

if (ids[20] === "b") {
}

for (let i = 0; i < 9; i++) {
  console.log(i);
}

[2, 4, 6].forEach((number) => console.log(number));
const arrayOfNumber: number[] = [1, 3, 6].map((number) => number * 10);
