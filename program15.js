
salaries= {
    "A"  : 3000,
    "B"  : 4000,
    "C"  : 5000
    }
    sales= {
        "A"  : 30400,
        "B"  : 4056800,
        "C"  : 5085600
        }

function sumOfSalaries(salaries){
	sum = 0;
	for (let key in salaries) {
        sum = sum + salaries[key]; 
    }

	console.log("TOTAL SUM OF SALARIES - "+sum);
}
sumOfSalaries(salaries);
sumOfSalaries(sales);

