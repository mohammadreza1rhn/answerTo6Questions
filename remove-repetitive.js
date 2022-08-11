export default function removerRepetitive(string) {
    let result = []
    let stringArray=string.split('')
    stringArray.forEach(element => {
        if(!result.includes(element)){
            result.push(element)
        }
    })
     
    result=result.join('')
    return result

}    

