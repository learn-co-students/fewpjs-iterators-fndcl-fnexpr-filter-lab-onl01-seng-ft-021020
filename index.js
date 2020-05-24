// Code your solution here
function findMatching(driverArray, string){
    let matching = driverArray.filter(driver => {
        return driver.toLowerCase() === string.toLowerCase()
    })
    return matching
}

function fuzzyMatch(driverArray, string){
    let matching = driverArray.filter(driver => {
        return driver.startsWith(string)
    })
    return matching  
}

function matchName(driverArray, string){
    let matching = driverArray.filter(driver => {
        return driver.name === string
    })
    return matching
}
