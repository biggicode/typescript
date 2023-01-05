export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

type MutateFunction = (item: number) => number;

export function arrayMutate(
  numbers: number[],
  mutate: MutateFunction
): number[] {
  return numbers.map(mutate);
}

const myNewMutateFunction: MutateFunction = (item: number) => item * 10;

console.log(arrayMutate([2, 3, 4], (item) => item * 3));

export type AdderFunction = (orice: number) => number;

export function createAdder(num: number): AdderFunction {
  return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(55));
