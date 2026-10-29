
// 1.
// var → hoisting miatt a deklaráció előtt undefined értéket kapunk.
// var => local vagy function scope-ként viselkedik

// 2.
// let / const → szintén hoisting történik, de inicializálás előtt
// a változó elérése ReferenceError hibát okoz.
// let / const => block scope-ként viselkedik

// 3.
// TDZ: Ebben az időszakban a változó már létezik a scope-ban,
// de még nincs inicializálva, ezért nem lehet hozzáférni.


console.log(a) // undefined → technikailag nincs hiba
console.log(b) // ReferenceError (TDZ) → hiba van
console.log(c) // ReferenceError (TDZ) → hiba van

var a = 10
let b = 20
const c = 30

console.log(a) // 10
console.log(b) // 20
console.log(c) // 30

var a = "alma szöveg" // újra deklaráltható → baj!

// ============================================================

console.log(x) // var global scope

if (true) {
	if (true) {
		if (true) {
			var x = "hello" // block-scope-ként hozom létre, de global-ként viselkedik
			console.log(x)
		}
	}
}

console.log(x) // var global scope

// ============================================================

function test() {
	if (true) {
		var x = "hello" // function scope
	}
	console.log(x) // "hello"
}

test()
console.log(x) // ReferenceError