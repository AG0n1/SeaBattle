let arr = [1,2,2,3,3,4,5,5,5,6,7,7]

function newArr() {
    let arrTwo = []
    arr.forEach(elem => {
        if (arr.indexOf(elem) === arr.lastIndexOf(elem)) {
            arrTwo.push(elem)
        }
    })
    return arrTwo
}

console.log(newArr())