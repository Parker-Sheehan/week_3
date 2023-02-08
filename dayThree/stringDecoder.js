const decoder = (code) => {
    let decoded = ''
    code.split('')
    for(let i =0; i < code.length; i++){
        if(Number.isInteger(Number(code[i]))){
            decoded += `${code[i+(Number(code[i]))+1]}`
        }
    }
    return decoded
}
