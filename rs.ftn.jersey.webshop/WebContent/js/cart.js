var shopping_cart_url = "../rs.ftn.jersey.webshop/rest/proizvodi/getJustSc";
var total_url = "../rs.ftn.jersey.webshop/rest/proizvodi/getTotal";
var clear_cart_url = "../rs.ftn.jersey.webshop/rest/proizvodi/clearSc";

findCart();
getTotal();

// TODO 3 : Prikazati trenutne stavke u ShoppingCartu za korisnika 
function findCart() {
	console.log('findCart');
}

// TODO 4 : Prikazati totalnu sumu za stavke u ShoppingCartu (iskoristiti metodu getTotal) tako da se na stranici ispise Ukupno : xxx dinara
function getTotal() {
	console.log('findAll');
}

// TODO 5 : Na osnovu prethodne metode renderList modifikovati ovu tako da prikazuje stavke u ShoppingCartu
function renderList(data) {
	// JAX-RS serializes an empty list as null, and a 'collection of one' as an object (not an 'array of one')
	var list = data == null ? [] : (data instanceof Array ? data : [ data ]);
}

// TODO 6 : Ocistiti ShoppingCart za korisnika na serveru i iskoristiti ajax da se to prikaze i na stranici bez prethodnog osvezavanja
$(document).on('submit', '.clearForm', function(e) {
	e.preventDefault();
	console.log("remove products from cart");
});
