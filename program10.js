


function pyramid(){
    
	let rows =10;
	let currentLine="";
	let i = 0;
	do
	{
		currentLine = "";

		let spaces = 0;
		while(spaces < rows-i-1){
			currentLine=currentLine+" ";
			spaces++;
		}

		let stars = 0;
		while(stars < (2*i)+1){
			currentLine=currentLine+"*";
			stars++;
		}

		
		console.log(currentLine);

		i++;
	}while(i<rows)
	
}
pyramid();
