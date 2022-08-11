export default function isBalance(input) {
    let result = null
    let openBrackCount=0
    let closeBrackCount=0
    let openParanCount=0
    let closeParanCount=0
    let openKroshCount=0
    let closeKroshCount=0
    for (const char of input) {
        switch (char){
            case '(':
                openParanCount++;
                break;
            case ')':
                closeParanCount++;
                break;
            case '{':
                openKroshCount++;
                break;
            case '}':
                closeKroshCount++;
                break;
            case '[':
                openBrackCount++;
                break;
            case ']':
                closeBrackCount++;
                break;
            default : break;                    
        }
    }
    if(openBrackCount==closeBrackCount&&openParanCount==closeParanCount&&openKroshCount==closeKroshCount){
        result='isBalance'
    }
    else{
        result='notBalance'
    }
    
    return result

}    

  
