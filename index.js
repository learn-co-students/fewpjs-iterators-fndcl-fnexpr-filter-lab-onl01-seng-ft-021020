// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter( matched => 
        matched.toLowerCase() === string.toLowerCase()
    )
}

function fuzzyMatch(drivers, string) {
    return drivers.filter( matched => 
        matched.toLowerCase().indexOf(string.toLowerCase()) === 0
    )

}

function matchName(drivers, string) {
    return drivers.filter( matched => matched.name === string)
}
