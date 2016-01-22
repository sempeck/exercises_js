function countBs (st) {
	return countChar(st, "B");
}

function countChar (st,ch) {
	var counter = 0;
	for (var i = 0; i < st.length; i++)
		if (st.charAt(i) == ch) counter++;
	return counter;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
