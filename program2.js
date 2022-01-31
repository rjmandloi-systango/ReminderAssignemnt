
function bin_to_dec(binaryNumber)
{
    
    if(!isNaN(binaryNumber))
    {
     
      return parseInt(binaryNumber ,2);
    }
    else
    {
             return "not a binary number";
    } 
}
console.log(bin_to_dec('10k0'));
console.log(bin_to_dec('110011'));
console.log(bin_to_dec('100'));


