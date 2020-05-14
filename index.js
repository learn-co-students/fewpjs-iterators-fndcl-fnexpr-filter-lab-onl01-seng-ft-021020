// Code your solution here

function findMatching(array, string) {
  return array.filter((driver) => driver.toLowerCase() == string.toLowerCase());
}

function fuzzyMatch(array, string) {
  return array.filter((driver) => driver.slice(0, string.length) == string);
}

function matchName(array, string) {
  
  return array.filter(({name}) => name.toLowerCase() == string.toLowerCase());
}
