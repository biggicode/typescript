import Houses from "./houses.json";

interface House {
  name: string;
  planets: string | string[];
  cool: boolean;
}

interface HouseWithID extends House {
  id: number;
}
function findHouses(
  input: string | House[],
  filter?: (house: House) => boolean
): HouseWithID[] {
  const houses: House[] = typeof input === "string" ? JSON.parse(input) : input;
  return (filter ? houses.filter(filter) : houses).map((house, index) => ({
    id: houses.indexOf(house),
    ...house,
  }));
}

console.log(
  findHouses(JSON.stringify(Houses), ({ name }) => name === "Atreides")
);

console.log(findHouses(Houses, ({ name }) => name === "Harkonnen"));
