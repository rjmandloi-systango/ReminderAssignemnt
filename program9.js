let currentLine="";
let rows=10;
for( let i = 0; i<rows; i++){
    currentLine = "";

    for( let space = 0; space < rows-i-1; space++)
    { currentLine=currentLine+" "; }

    for( let stars = 0; stars < (2*i)+1; stars++)
    { currentLine=currentLine+"*"; }

    
    console.log(currentLine);
}