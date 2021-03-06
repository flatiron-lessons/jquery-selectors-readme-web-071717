function paragraphSelector() {
	// The function should use an element selector to select the p tags in index.html and return those elements
	return $('p')
}

function lastImageSelector() {
	// The function should use the last jQuery selector to return the last image in index.html
	return $('img:last')
}

function ninjaBabySelector() {
	// The function should use an ID selector to return the ninja baby image
	return $('#baby-ninja')
}

function divSelector() {
	// The function should use a class selector to return the two divs with the class pics
	return $('.pics')
}

function firstListItem() {
	// The function should use a first-child selector to return the first list item in the ul with the ID pic-list
	return $('ul li:first-child')
}