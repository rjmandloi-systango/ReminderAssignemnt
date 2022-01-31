
function leapYear(year)
{ 
((year%4==0) && ((year%400==0) || (year%100!==0)))? console.log( "leap year"):console.log ("not a leap year") ;
}
leapYear(2020);

leapYear(2023);
leapYear(2040);
leapYear(2009);