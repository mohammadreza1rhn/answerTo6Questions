export default function encoder(inputString, repeatCount) {
    let result =[]

    // line 5 to 7 tried to move last letter of inputString to first letter of inputString
    let lastChar=inputString.slice(inputString.length-1,inputString.length)
    inputString=inputString.slice(0,inputString.length-1)
    let movedString=lastChar+inputString

    // handle the encryption by asciCode of each element
    let asciCode=-1
    for (let item of movedString) {
        if(item.charCodeAt()+repeatCount>122){
            asciCode=((item.charCodeAt()+repeatCount)%122)+96
        }else{
            asciCode=(item.charCodeAt()+repeatCount)
        }
        
      item=String.fromCharCode(asciCode);
      result.push(item)
    }
    result=result.join('')
    return result
}  



