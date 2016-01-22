for (var i = 1; i <= 100; i++) {
	var wynik = i, f = 'Fizz', b = 'Buzz';
	if (i % 5 == 0) wynik = b;
	if (i % 3 == 0) {
			wynik = f;
			if (i % 5 == 0) wynik += b;
		}
	console.log(wynik);
}




//for(i=0;i<100;)console.log((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i)
