function uniqueCharacters(string){
    
    let unique = "";
     
    for(let i = 0; i < string.length; i++){
      
      if(unique.includes(string[i]) === false){
       
        unique += string[i]+",";
      }
    }
    return unique;
  }
   
  console.log(uniqueCharacters("rajatMandloi"));
  console.log(uniqueCharacters("sunilMandloi"));
  console.log(uniqueCharacters("Sample test for unique char check"));