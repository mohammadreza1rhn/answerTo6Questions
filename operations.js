export default function operations(ops) {
    let result=null
    let resultArray = []
    let opsArray=[]
    let tempForMinus=''
   for(let i=0;i<ops.length;i++){
        
        if(ops[i]=='-'){
            tempForMinus=`${ops[i]}${ops[i+1]}`
            opsArray.push(tempForMinus)
            i++
            tempForMinus=''
        }
        else if(ops[i]!=" "){
            opsArray.push(ops[i])
        }
   }
   

   opsArray.forEach(element => {
        if(element=='D'){
            resultArray.push(resultArray[resultArray.length-1]*2)
        }
        else if(element=='R'){
            resultArray.pop()
        }
        else if(element=='+'){
            resultArray.push(resultArray[resultArray.length-1]+resultArray[resultArray.length-2])
        }
        else{
            resultArray.push(element)
        }
   })
   result=0
   resultArray.forEach(item=>{
        result+=Number(item)
   })
  return result
}


