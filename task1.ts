const names: string[] = [
  'Paul',
  'Oliver',
  'Jack',
  'Harry',
  'Jacob',
  'Charlie',
  'Paul',
  'Kyle',
  'George',
  'Damian',
  'Charlie',
  'Robert',
  'Michael',
  'David',
  'Ethan',
  'Reece',
  'Thomas',
  'Charlie',
  'Mason',
  'Oliver',
  'Joanne',
];

//Returns array sorted alphabetically
const getSortedNames = (names: string[]): string[] => {
  return names.sort((a: string, b: string) => a.localeCompare(b));
};

console.log(getSortedNames(names));

//Returns array without duplicates
const getUniqueNames = (names: string[]): string[] => {
  return names.reduce((acc: any[], item: string) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
};

console.log(getUniqueNames(names));

//Returns array without duplicates if I can use a Set
const getUniqueNamesWithSet = (names: string[]): string[] => {
  return Array.from(new Set(names));
};
console.log(getUniqueNamesWithSet(names));

//Returns array with only first letters of each name
const getFirstLetters = (names: string[]): string[] => {
  return names.map((name) => name[0]);
};

console.log(getFirstLetters(names));
