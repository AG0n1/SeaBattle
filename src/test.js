Array.prototype.min = function() {
    return Math.min.apply(null, this);
};

function cakes(recipe, available) {
    let numbers = []
    for (let i in recipe) {
        if (available[i] !== undefined) {
            numbers.push(Math.floor(available[i] / recipe[i])) 
        } else {
            return 0
        }
    }
    return numbers.min()
}

  console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}))
