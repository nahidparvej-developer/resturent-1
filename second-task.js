 // largest math

 function maxToArray(numbers)
 {
    let largest=numbers[0]
    for(let i=0; i < numbers.length; i++)
    {
        const index =1;
        const element=numbers[index];
        if(element<numbers){
          largest=element;
        }
      
    }
    return largest;
 }

 const allNumbers = [ 59 ,189 ,88 ,230 ,333, 200, 44, 296 ,155 ,500];

 const talestNumbers = maxToArray(allNumbers);
 console.log('tallestNumber are:', talestNumbers);
