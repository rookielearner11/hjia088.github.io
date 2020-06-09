	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli 1.99$",
		image:"brocoli.jpg",
		vegetarian: true,
		glutenFree: true,
		fruitNinja: false,
		meatLover: false,
		eatHealthy: true,
		fruitNinjaMeatLover: false,
		fruitNinjaGlutenFree: false,
		meatLoverGlutenFree: false,
		vegetarianGlutenFree: true,
		eatHealthyGlutenFree: true,
		price: 1.99
	},
	{
		name: "bread 2.35$",
		image:"bread.jpg",
		vegetarian: true,
		glutenFree: false,
		fruitNinja: false,
		meatLover: false,
		eatHealthy: true,
		fruitNinjaMeatLover: false,
		fruitNinjaGlutenFree: false,
		meatLoverGlutenFree: false,
		vegetarianGlutenFree: false,
		eatHealthyGlutenFree: false,
		price: 2.35
	},
	{
		name: "apple 2.99$",
		image:"apple.jpg",
		vegetarian: false,
		glutenFree: true,
		fruitNinja:true,
		meatLover: false,
		eatHealthy:true,
		fruitNinjaMeatLover: true,
		fruitNinjaGlutenFree:true,
		meatLoverGlutenFree:false,
		vegetarianGlutenFree:false,
		eatHealthyGlutenFree:true,
		price: 2.99
	},
	{
		name: "mushroom 3.00$",
		image:"mushroom.jpg",
		vegetarian: true,
		glutenFree: true,
		fruitNinja:false,
		meatLover: false,
		eatHealthy: true,
		fruitNinjaMeatLover: false,
		fruitNinjaGlutenFree:false,
		meatLoverGlutenFree: false,
		vegetarianGlutenFree: true,
		eatHealthyGlutenFree:true,
		price: 3.00
	},
	{
		name: "orange 4.99$",
		image:"orange.jpg",
		vegetarian: false,
		glutenFree: true,
		fruitNinja:true,
		meatLover:false,
		eatHealthy:true,
		fruitNinjaMeatLover: true,
		fruitNinjaGlutenFree:true,
		meatLoverGlutenFree:false,
		vegetarianGlutenFree:false,
		eatHealthyGlutenFree:true,
		price: 4.99
	},
	{
		name: "strawberry 5.00$",
		image:"strawberry.jpg",
		vegetarian: false,
		glutenFree: true,
		fruitNinja: true,
		meatLover:false,
		eatHealthy:true,
		fruitNinjaMeatLover: true,
		fruitNinjaGlutenFree: true,
		meatLoverGlutenFree: false,
		vegetarianGlutenFree: false,
		eatHealthyGlutenFree:true,
		price: 5.00
	},
	{
		name: "spinach 5.99$",
		image:"spinach.jpg",
		vegetarian: true,
		glutenFree: true,
		fruitNinja:false,
		meatLover: false,
		eatHealthy: true,
		fruitNinjaMeatLover: false,
		fruitNinjaGlutenFree:false,
		meatLoverGlutenFree: false,
		vegetarianGlutenFree: true,
		eatHealthyGlutenFree:true,
		price: 5.99
	},
	{
		name: "Organic Tomato 8.00$",
		image:"salmon.jpg",
		vegetarian: true,
		glutenFree: true,
		fruitNinja:true,
		meatLover: false,
		eatHealthy: false,
		fruitNinjaMeatLover: true,
		fruitNinjaGlutenFree: true,
		meatLoverGlutenFree: true,
		vegetarianGlutenFree: true,
		eatHealthyGlutenFree: true,
		price: 10.00
	},
	{
		name: "Organic cucumber 9.00$",
		image:"salmon.jpg",
		vegetarian: true,
		glutenFree: true,
		fruitNinja:true,
		meatLover: false,
		eatHealthy: false,
		fruitNinjaMeatLover: true,
		fruitNinjaGlutenFree: false,
		meatLoverGlutenFree: true,
		vegetarianGlutenFree: false,
		eatHealthyGlutenFree: false,
		price: 10.00
	},

	{
		name: "salmon 10.00$",
		image:"salmon.jpg",
		vegetarian: false,
		glutenFree: true,
		fruitNinja:false,
		meatLover: true,
		eatHealthy: false,
		fruitNinjaMeatLover: true,
		fruitNinjaGlutenFree: false,
		meatLoverGlutenFree: true,
		vegetarianGlutenFree: false,
		eatHealthyGlutenFree: false,
		price: 10.00
	},
	
	
	
	{
		name: "chicken wings 10.00$",
		image:"chickenwings.jpg",
		vegetarian: false,
		glutenFree: true,
		fruitNinja: false,
		meatLover:true,
		eatHealthy:false,
		fruitNinjaMeatLover: true,
		fruitNinjaGlutenFree: false,
		meatLoverGlutenFree: true,
		vegetarianGlutenFree: false,
		eatHealthyGlutenFree: false,
		price: 10.00
	},
	{
		name: "pork rib 12.00$",
		image:"ribs.jpg",
		vegetarian: false,
		glutenFree: true,
		fruitNinja:false,
		meatLover: true,
		eatHealthy: false,
		fruitNinjaMeatLover: true,
		fruitNinjaGlutenFree:false,
		meatLoverGlutenFree: true,
		vegetarianGlutenFree: false,
		eatHealthyGlutenFree: false,
		price: 12.00
	},
	{
		name: "beef 13.97$",
		image:"beef.jpg",
		vegetarian: false,
		glutenFree: true,
		fruitNinja:false,
		meatLover:true,
		eatHealthy:false,
		fruitNinjaMeatLover: true,
		fruitNinjaGlutenFree: false,
		meatLoverGlutenFree:true,
		vegetarianGlutenFree: false,
		eatHealthyGlutenFree: false,
		price: 13.97
	}

];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
			document.getElementById(i.toString()).style.display = "block";
		

		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
			document.getElementById(i.toString()).style.display = "block";
		
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
			document.getElementById(i.toString()).style.display = "block";
		
		}
		else if ((restriction == "FruitNinja") && (prods[i].fruitNinja == true)){
			product_names.push(prods[i].name);
			document.getElementById(i.toString()).style.display = "block";
		
		}
		else if ((restriction == "MeatLover") && (prods[i].meatLover == true)){
			product_names.push(prods[i].name);
			document.getElementById(i.toString()).style.display = "block";
		
		}
		else if ((restriction == "EatHealthy") && (prods[i].eatHealthy == true)){
			product_names.push(prods[i].name);
			document.getElementById(i.toString()).style.display = "block";
					}
		else if ((restriction == "FruitNinja&GlutenFree") && (prods[i].fruitNinjaGlutenFree == true)){
			product_names.push(prods[i].name);
			document.getElementById(i.toString()).style.display = "block";
			
		}
		else if ((restriction == "Vegetarian&GlutenFree") && (prods[i].vegetarianGlutenFree == true)){
			product_names.push(prods[i].name);
			document.getElementById(i.toString()).style.display = "block";
			
		}
		else if ((restriction == "MeatLover&GlutenFree") && (prods[i].meatLoverGlutenFree == true)){
			product_names.push(prods[i].name);
			document.getElementById(i.toString()).style.display = "block";
			
		}
		else if ((restriction == "EatHealthy&GlutenFree") && (prods[i].eatHealthyGlutenFree == true)){
			product_names.push(prods[i].name);
			document.getElementById(i.toString()).style.display = "block";
			
		}
		else if ((restriction == "FruitNinja&MeatLover") && (prods[i].fruitNinjaMeatLover == true)){
			product_names.push(prods[i].name);
			document.getElementById(i.toString()).style.display = "block";
		
		}
	}
	
	return product_names;
}


// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}

function applyfilter(){
		if (document.getElementById("vegetables").checked == true){
		document.getElementById("brocolilabel").style.display = "block";
		document.getElementById("mushroomlabel").style.display = "block";
		document.getElementById("spinachlabel").style.display = "block";
		document.getElementById("tomatoeslabel").style.display = "block";
		document.getElementById("cucumberlabel").style.display = "block";
		}
		if (document.getElementById("meat").checked == true){
			document.getElementById("salmonlabel").style.display = "block";
			document.getElementById("chickenwingslabel").style.display = "block";
			document.getElementById("ribslabel").style.display = "block";
			document.getElementById("beeflabel").style.display = "block";
		}

		if (document.getElementById("fruits").checked == true){
			document.getElementById("applelabel").style.display = "block";
			document.getElementById("orangelabel").style.display = "block";
			document.getElementById("strawberrylabel").style.display = "block";
		}
		if (document.getElementById("dairyproducts").checked == true){
			document.getElementById("eggs").style.display = "block";
			document.getElementById("milk").style.display = "block";
		}
		if (document.getElementById("juice").checked == true){
			document.getElementById("canadadry").style.display = "block";
			document.getElementById("coke").style.display = "block";
			document.getElementById("orangejuice").style.display = "block";
		}
		if (document.getElementById("cooking").checked == true){
			document.getElementById("oliveoil").style.display = "block";
		}
		if (document.getElementById("none").checked == true){
			document.getElementById("brocolilabel").style.display = "block";
		document.getElementById("mushroomlabel").style.display = "block";
		document.getElementById("spinachlabel").style.display = "block";
		document.getElementById("tomatoeslabel").style.display = "block";
		document.getElementById("cucumberlabel").style.display = "block";
		document.getElementById("salmonlabel").style.display = "block";
			document.getElementById("chickenwingslabel").style.display = "block";
			document.getElementById("ribslabel").style.display = "block";
			document.getElementById("beeflabel").style.display = "block";
			document.getElementById("eggs").style.display = "block";
			document.getElementById("milk").style.display = "block";
			document.getElementById("canadadry").style.display = "block";
			document.getElementById("coke").style.display = "block";
			document.getElementById("orangejuice").style.display = "block";
			document.getElementById("oliveoil").style.display = "block";
			document.getElementById("oliveoil").style.display = "block";
		}

		

	return; 
}
function getshoptotal(){
	var result = 0;
	if (document.getElementById("a").checked == true){
		result=result+1.99;
	}
	if (document.getElementById("m").checked == true){
		result=result+2;
	}
	if (document.getElementById("n").checked == true){
		result=result+2.5;
	}
	if (document.getElementById("x").checked == true){
		result=result+2.99;
	}
	if (document.getElementById("b").checked == true){
		result=result+2.99;
	}
	if (document.getElementById("c").checked == true){
		result=result+3;
	}
	if (document.getElementById("egg").checked == true){
		result=result+3.99;
	}
	if (document.getElementById("d").checked == true){
		result=result+4.99;
	}
	if (document.getElementById("e").checked == true){
		result=result+5;
	}
	if (document.getElementById("y").checked == true){
		result=result+5.5;
	}
	if (document.getElementById("f").checked == true){
		result=result+5.99;
	}
	if (document.getElementById("z").checked == true){
		result=result+7.5;
	}
	if (document.getElementById("g").checked == true){
		result=result+8;
	}
	if (document.getElementById("h").checked == true){
		result=result+9;
	}
	if (document.getElementById("i").checked == true){
		result=result+10;
	}
	if (document.getElementById("j").checked == true){
		result=result+10;
	}
	if (document.getElementById("k").checked == true){
		result=result+12;
	}
	if (document.getElementById("l").checked == true){
		result=result+13.97;
	}
	document.getElementById("totalselected").innerHTML=result;
	window.alert("The total price is " + result);
	return;
}

