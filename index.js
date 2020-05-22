// Code your solution here
function findMatching(drivers, string){
    return drivers.filter(n => {
        if(n.toUpperCase() === string.toUpperCase()){
            return n;
        }    
      });

}

function fuzzyMatch(drivers, string){
    return drivers.filter(n => {
        if(n.startsWith(string)){
            return n;
        }    
      });


}

function matchName(drivers, string){
    return drivers.filter(n => {
        if(n["name"] === string){
            return n;
        }  
    })

}