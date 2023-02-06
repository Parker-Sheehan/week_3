const hasMoreVowels = (word) => {
let arr = word.toLowerCase().split('')
let x=0

for (let i = 0; i < arr.length; i++){
    if(arr[i] == "a" || arr[i] == "e" || arr[i] == "i" || arr[i] == "o" || arr[i] == "u"){
        x++
    }
}

return (x > (arr.length/2))
}