const best = (arr) => {
    let low
    let high
    let bestProfit = 0

    for (let i = 0; i < arr.length; i++){
        for (let j = i+1; j < arr.length; j++){
            if(arr[j] - arr[i] > bestProfit){
                low = arr[i]
                high = arr[j]
                bestProfit = arr[j] - arr[i]
            }
        }
    }
    if (bestProfit > 0){
        return (`${bestProfit} - Buy at ${low} sell at ${high}`)
    }else{
        return (0)
    }

}

console.log(best([10, 3, 2, 6, 4, 8, 1]))

