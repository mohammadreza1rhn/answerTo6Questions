export default function getRepeatedInfo(number) {
    let result = {}
    
    // make an array to keep number of repeats of each element:
    let repeatedArray=['','','','','','','','','']
    // make input number to Array :
    let numberArray=String(number).split('')

    //make input Array number to Number type (Cascade):
    let numberArrayDigit=numberArray.map(item=>{
        return Number(item)
    })
    

    //make an for loop to fill repeatedArray as times a number exist:
    for(let i=0;i<numberArrayDigit.length;i++){
        let temp=numberArrayDigit[i]
        for(let j=0;j<temp;j++){
            repeatedArray[temp-1]+=temp
        }
    }


    // make result object 
    let indexObject=1    
    repeatedArray.forEach(item=>{
        if(item){
            result[indexObject]=item
            indexObject++
        }
        
    })
    
    return result
}    


