
let days = ["Sunday", "Monday", "Tuesday", "Wednessday", "Friday", "Saturday"];
let months = ["January", "February","March","April","May","June","July","August","September","October","November","December"];
let currentDate=new Date(); 
let dateFormat1 = `${days[currentDate.getDay()].slice(0,3)}, ${months[currentDate.getMonth()].slice(0,3)} ${currentDate.getDate()}, ${currentDate.getFullYear()}, ${currentDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`;
console.log(dateFormat1);

let dateFormat2=`${currentDate.toLocaleString('en-US', { hour:'numeric', minute: 'numeric', hour12: true })}, ${days[currentDate.getDay()]}, ${currentDate.getDate()} ${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
console.log(dateFormat2);

let dateFormat3=resString = `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()} ${currentDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`;
console.log(dateFormat3);
