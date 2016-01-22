function reverseArray(ar){
	var revArr = [];
	for (var i=0;i<ar.length;i++)
		revArr.unshift(ar[i]); 
	return revArr;
}

function reverseArrayInPlace(ar) {
	for (var i=0;i<(Math.floor(ar.length/2));i++){
		  var temp = ar[i];
		  ar[i] = ar[ar.length-1-i];
		  ar[ar.length-1-i] = temp;
		}	  	
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]