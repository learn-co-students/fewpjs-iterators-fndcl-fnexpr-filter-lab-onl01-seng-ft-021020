// Code your solution here
function findMatching(array, string) { 
    let match = array.filter(d => { 
        return d.toUpperCase() == string.toUpperCase();
    });
    return match
};

function fuzzyMatch(array, string) { 
    return array.filter(d => d.slice(0, string.length) === string)
}

function matchName(obj, str) { 
    return obj.filter(d => d.name === str)
}