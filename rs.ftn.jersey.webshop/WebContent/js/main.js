/**
 * 
 */

var rootURL = "../rs.ftn.jersey.webshop/rest/proizvodi/add";
var rootURL2 = "../rs.ftn.jersey.webshop/rest/proizvodi/getJustProducts";

findAll();

// TODO 1 : Pozvati rest metodu koja vraca sve proizvode koji se nalaze u WebShopu i prikazati ih na stranici (iskoristiti metodu renderList i ajax poziv)
function findAll() {
	console.log('findAll');
}

function renderList(data) {
	// JAX-RS serializes an empty list as null, and a 'collection of one' as an object (not an 'array of one')
	var list = data == null ? [] : (data instanceof Array ? data : [ data ]);
	var forma = $("#productsform");
	
	$.each(list, function(index, product) {
        var forma = $('<form method="get" class="productsform" action="ShoppingCartServlet"></form>');
        var tr = $('<tr></tr>');
        tr.append('<td>' + product.name + '</td>' +
                '<td>' + product.price + '</td>');
        forma.append('<input type="text" size="3" name="count">' +
                '<input type="hidden" name="id" value='+ product.id +'>' +
                '<input type="submit" value="Dodaj">');
        var td = $('<td></td>');
        td.append(forma);
        tr.append(td);
        $('#tabela').append(tr);
	});
}

// TODO 2: Koristeci ajax poziv dodati odredjeni proizvod u ShoppingCart
// Iskoristiti toast da se obavesti korisnik o uspesnom dodavanju u korpu
$(document).on('submit', '.productsform', function(e) {
	e.preventDefault();
	console.log("add product");
	var id = $(this).find("input[type=hidden]").val();
	var count = $(this).find("input").val();
});

//Helper function to serialize all the form fields into a JSON string
function formToJSON(id, count) {
	return JSON.stringify({
		"id" : id,
		"count" : count,
	});
}