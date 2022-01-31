function decimals(number , decimalPoint)
{
     return number.toFixed(decimalPoint);
  
}
console.log(decimals(10.1496554,2));
console.log(decimals(2.100212, 2)); //=> "2.10"
console.log(decimals(2.100212, 3)); //=> "2.100"
console.log(decimals(2100, 2)); //=> "2100.00"
