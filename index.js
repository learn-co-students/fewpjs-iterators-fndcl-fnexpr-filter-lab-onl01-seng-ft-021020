// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter( e =>
        e.toLowerCase() === name.toLowerCase()
    );
}

function fuzzyMatch(drivers, startingLetters) {
    return drivers.filter( e =>
        e.toLowerCase().indexOf(startingLetters.toLowerCase()) === 0
    )
}

function matchName(drivers, searchedName) {
    return drivers.filter(e =>
        e.name === searchedName
    )
} 