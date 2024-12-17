// Dom manipulation

//getElementById()
const title = document.getElementById('main_heading');
console.log(title)
//getElementByClassName()

const ListItems = document.getElementsByClassName('list_items')
console.log("List Items by class name", ListItems)

//getElementByTagName()

const ListItemsByTagName = document.getElementsByTagName('li')
console.log("List Items by tag name: ", ListItemsByTagName)


//querySelector() : 
//-to select the first element that matches the selectors given
//-it can accept all css style selectors i.e class | tag | id 

const HOne = document.querySelector('h1')
console.log("h1: ", HOne)

//querySelectorAll()

const divs = document.querySelectorAll('.container');
console.log("this are the divs: ", divs)