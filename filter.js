const Items = [
  {
    name: "Confident",
    price: 202,
  },
  {
    name: "Ambo",
    price: 380,
  },
  {
    name: "Victory",
    price: 8480,
  },
  {
    name: "Gilbert",
    price: 383,
  },
  {
    name: "Echema",
    price: 8374,
  },
  {
    name: "Nsem",
    price: 3838,
  },
  {
    name: "Nsem",
    price: 838,
  },
];

// using the filter method
const filteredItem = Items.filter((item)=>{
    return item.price >2022
})

console.log("Filtered Item:",filteredItem);
console.log("Filtered Item length:",filteredItem.length);


// using the filter method
const ItemName = Items.map((item)=>{
    return item.name;
})

console.log("Item name: ",ItemName )


//using the find method

const foundItem =  Items.find((item)=>{
    return item.name ==="Nsem"
})

console.log("item with name Nsem: ", foundItem)
//note that find returns just the very first item 
//that matches the condition given, in this case
// item.name === "Nsem"

//using the forEach method

Items.forEach((item)=>{
    return console.log("Name of Item: ",item.name)
})

//using the some method

const InExpensiveItem = Items.some((item)=>{
    return item.price <200
})

console.log("Are there inexpensive items(price <200): ",InExpensiveItem);

//check if atleast one of the item's price is less than 200

//using the every method

const ExpensiveItem = Items.every((item)=>{
    return item.price >200
})
console.log("Are the Expensive Items: ", ExpensiveItem)

//using the reduce method to get total price

const total = Items.reduce((CurrentTotal, item)=>{
    return item.price + CurrentTotal;
}, 0)

console.log("total price: ", total)

//using the includes method

const Id = [1, 2, 3, 8, 29, 4, 93];
const AvailableId = Id.includes(3);
console.log("Is this ID available",AvailableId)

//include method checks if the item is available in the array

//using the array slice method

const between2and5 = Items.slice(2, 5);
console.log("Items between 2 and 5: ", between2and5);
const last3 = Items.slice(-3);
console.log("last 3 items: ", last3)
const fromsecondtolast = Items.slice(1);
console.log("form second to the last Item",fromsecondtolast)

//using the array sort method ============================
const NewItems = Items.map((item)=>{
    return item.name;
});

NewItems.sort();
console.log("new array after the sort: ",NewItems)
//by default, sort is in ascending order

//sort by number, we use a sort function, let's use the id above
console.log("Initaial id: ",Id)
function compare(a, b){
    return a-b
}
Id.sort(compare)

console.log("sorted Id", Id)
//now sorting base on the price
function comparePrice(a, b){
    return a.price - b.price
}

Items.sort(comparePrice)
console.log(Items)


//using the array splice method. 

const deletedItem = Items.concat().splice(3, 5)
console.log("this are the deleted elements", deletedItem)

//using the array concat method

const newItem = [
  {
    name: "Ndobo",
    price: 380,
  },
  {
    name: "Sheridan",
    price: 8480,
  },
]

const MergedItem = Items.concat(newItem);
console.log("the array of Item merged with array of newItem",MergedItem);

//using the array fill method
const priceIsNowAllZero = newItem.fill(0)
console.log("all new items array element is now 0: ",priceIsNowAllZero)

function fillInNumber (n){
  return Array(n).fill(0).map((_, index)=>{
    return index + 1;
  })
}

console.log("fill in numbers: ", fillInNumber(10));//this will print numbers from 1 to 10


//using the array join method 

const joinWithArrow = Items.map((item)=>item.name).join(' => ')
console.log("Items joined with dash",joinWithArrow)

//reversing the items

const inReversedOrder = Items.concat().reverse();
console.log("Items in Reverse Order: ",inReversedOrder)

console.log('child grand mother'.split(" ").reverse().join(' - '))

//using the array push method

const addItem = Items.push({name: "rapheal", price: 499})

console.log("new array with added Item",addItem, Items)

//using array pop method
console.log("last item removed: ", Items.pop())

// using the unshift method. add alement at the beginning

console.log("add at beginning: ", Items.unshift({name: "Nkuma", price: 38}));

//using the shift method to remove from beginning 

console.log("removed Item", Items.shift());

//using the a findIndex method. 

const res = Items.findIndex(findVictoty);
function findVictoty(value){
  return value.name === "Victory";
}

console.log("position of victory: ",res);

//using the array from method

const str = "123456789";

const numberStr = Array.from(str, x => Number(x));

console.log("normal string to number: ", str,numberStr )

//removing duplicate values

const originalArray = [1,2,3,4,2,4,6,7,8,9,1,3];
const newArray = Array.from(new Set(originalArray))
console.log("orignalArray and newArray: ",originalArray, newArray);


//isArray method. 
console.log("check if is array", Array.isArray(originalArray), Array.isArray(Items[2]))






