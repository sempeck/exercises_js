function arrayToList (ar) {
	var list = null;
	for (var i=ar.length-1;i>=0;i--) {
		list = {value: ar[i], rest: list};
	}
		return list;
};

function listToArray (list) {
	var ar = [];
	for (var counter = list; counter; counter = counter.rest) {
		ar.push(counter.value);
	}
	return ar;
}

function prepend (element, list) {
	return {value: element, rest: list}
}

function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
