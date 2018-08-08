let Sale = function (total, salePercent) {
    return total - (total * (salePercent / 100))
}

let result = Sale(40, 25)
console.log(result)
