function findMatching(drivers, match) {
  return drivers.filter(driver => driver.toLowerCase() === match.toLowerCase())
}

function fuzzyMatch(drivers, fuzz) {
  return drivers.filter(driver => driver.slice(0, fuzz.length) === fuzz)
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name)
}
