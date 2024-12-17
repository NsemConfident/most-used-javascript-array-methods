

const ul = document.querySelector('ul');
//creating an element
const li = document.createElement('li');
//modifying the text
li.innerText = "pineaple"

//addindg element
ul.append(li)

//modifying attributes and classes and adding styles

// li.setAttribute('id', 'main_heading')
// li.remove('id')

// classList items

li.classList.add('list_items')
li.classList.remove('list_items')

console.log(li.classList.contains('list_items'))


// removing items from the dom
li.remove()

// parent | childrend | sibling node traversal

console.log("parent Node", ul.parentNode.parentNode)
console.log("parent Element: ", ul.parentElement.parentElement)

console.log("child Nodes of ul: ", ul.childNodes)
console.log("First child of ul: ", ul.firstChild)
console.log("Last Child of ul: ", ul.lastChild)

ul.childNodes[1].style.backgroundColor = 'blue' // adding style to the second child in the node

console.log("display all the children of ul: ", ul.children)

console.log("display previous sibling of ul: ", ul.previousElementSibling)
console.log("display the next sibling of ul: ",ul.nextElementSibling)



