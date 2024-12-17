// Dom manipulation

// Event listener

// Element.addEventListener('click' function);

// click
function alertBtnTwo() {
  alert("this alert from a script file");
}

const ButtonTwo = document.querySelector(".btn-2");
ButtonTwo.addEventListener("click", alertBtnTwo);

//Mouseover

const newBackgroundColor = document.querySelector(".btn-3");

function changeColor() {
  newBackgroundColor.style.backgroundColor = "rgb(115, 123, 168)";
}
newBackgroundColor.addEventListener("mouseover", changeColor);

//mouseleave
function changeColorMouseLeave() {
  newBackgroundColor.style.backgroundColor = "rgb(27, 42, 131)";
}
newBackgroundColor.addEventListener("mouseleave", changeColorMouseLeave);

const revealBtn = document.querySelector(".reveal-btn");
const hiddenContent = document.querySelector(".hidden-content");

console.log("buttons", revealBtn, hiddenContent);

function revealContent() {
  if (hiddenContent.classList.contains("reveal-btn")) {
    hiddenContent.classList.remove("reveal-btn");
    revealBtn.innerHTML = "Reveal less"
  } else {
    hiddenContent.classList.add("reveal-btn");
    revealBtn.innerHTML = 'Reveal more'
  }
}

revealBtn.addEventListener("click", revealContent);

//Event propagation: It refers to how an event travels throught the dom tree
//*think of it as electricity running throught a wire. an event needs to pass
//though every node until it reaches the end or it is forced to be stopped.

// 3 phases 

// 1. event capturing: starts from root to target and from target to the root.

// 2. Target: 

// 3. event bubbling


//Event delegation: allows users to append a single event listener to 
//parent element that adds it to all of it's  present and future
//descendants that match a selector. 

document.querySelector('#sports').addEventListener('click', function(e){
    console.log(e.target.getAttribute('id') + 'is clicked')
    const target = e.target;
    if(target.matches('li')){
        target.style.backgroundColor = 'lightgrey';
    }
})