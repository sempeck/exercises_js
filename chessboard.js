var szachownica = '';
var n = 8;

for (var i=0; i<n; i++) {
	for (var j=0; j<n; j++) {
	  
	  if (i%2!==0) {
		if (j%2!==0) szachownica += '#';
		else szachownica += ' ';
	    }
	  else {
	  	if (j%2==0) szachownica += '#';
		else szachownica += ' ';
	}
 }
 	    szachownica += '\n';
}

console.log(szachownica);
