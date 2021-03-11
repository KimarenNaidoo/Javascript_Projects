// EXAMINE THE DOCUMENT OBJECT //
// console.dir(document); // will give back all the items within the document obj
// console.log(document.domain);
// console.log(document.URL);
// Console.log(document.title); // gives back the title of the page. 
// not read only only, can change the value;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all); // returns an html collection of the tags in the file
// console.log(document.all[1]);
// document.all[10].textContent = "Hi"; // not the best way to select things
// console.log(document.forms); // returns all the forms in a html collection. this collection 
// cant do array functions.
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById("header-title"));
// let headerTitle = document.getElementById("header-title");
// headerTitle.textContent = "hi";
// headerTitle.innerText = "goodbye"; // innertext pays attention to styling
// headerTitle.innerHTML = "<h3>Hello</h3>"; // places the h3 in th headerTitle
// headerTitle.style.borderBottom = "solid 3px black"; // can change the styles

// GETELEMENTSBYCLASSNAME //
// let items = document.getElementsByClassName("list-group-item");
// console.log(items); // returns am html collec
// console.log(items[1]);
// items[1].textContent = "Hello2";
// items[1].style.fontWeight = "bold";

// items.style.backgroundColor = "yellow"; // will not work, use forloop

// for(let i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = "yellow";
// }

// GETELEMENTBYTAGNAME //
// let li = document.getElementsByTagName("li");
// console.log(li); // returns am html collec
// console.log(li[1]);
// li[1].textContent = "Hello2";
// li[1].style.fontWeight = "bold";

// li.style.backgroundColor = "yellow"; // will not work, use forloop

// for(let i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = "yellow";
// }

// QUERYSELECTOR // 
// Use it for only one item, use for all items will use querySelectorAll
// let header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 3px red";

// let input = document.querySelector("input");
// input.value = "Heloo world"; // it will grab the first input

// let submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// let item = document.querySelector(".list-group-item");
// item.style.color = "red";

// let lastItem = document.querySelector(".list-group-item:last-child");// target the last element
// lastItem.style.color = "blue";

// let secondItem = document.querySelector(".list-group-item:nth-child(2)");// target the second element
// secondItem.style.color = "coral";

// QUERYSELECTORALL // grabs all
// let titles = document.querySelectorAll(".title");
// console.log(titles); // returns a node list but now we can run array functions
// titles[0].textContent = "bye";
// alternate bet even and odd
// let odd = document.querySelectorAll("li:nth-child(odd)");
// let even = document.querySelectorAll("li:nth-child(even)");

// for(let i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = "darkgrey";
//     even[i].style.backgroundColor = "green";
// }

// TRAVERSING THE DOM //
// let itemList = document.querySelector("#items");
// parentNode // gets the parent of the element
// console.log(itemList.parentNode);
// itemList.parentElement.style.backgroundColor = "grey";
// itemList.parentNode.parentNode // access the parents parent

// parentElement // the same as parentNode

// childNodes
//console.log(itemList.childNodes); // return a nodelist of the children
// better use children
//console.log(itemList.children); // returns an html collec
// console.log(itemList.children[1]);  // to access the elements

// firstChild
// console.log(itemList.firstChild); // returns a textNode, kinda useless
// better use firstElementChild - gives the actual element
// console.log(itemList.firstElementChild);
// same thing goes for lastChild and lastElementChild

// nextSibling
// console.log(itemList.nextSibling);
// nextElementSibling
// console.log(itemList.nextElementSibling);
// Same thing for previousSibling and previousElementSibling
// itemList.previousElementSibling.getElementsByClassName.color = "green";

// createElement
// let newDiv = document.createElement("div");
// newDiv.className = "hello";
// newDiv.id = "hello1";
//newDiv.setAttribute("title", "helloTitle");
// Create a text node
// let newDivText = document.createTextNode("Hello World");
// newDiv.appendChild(newDivText);

// let container = document.querySelector("header .container");
// let h1 = document.querySelector("header h1");
// container.insertBefore(newDiv, h1); // inserts the div before the h1 in the container
// console.log(newDiv);
// newDiv.style.fontSize = "30px";

// Events
// Events
// With buttons onclick=can put a function, but best to do an eventlistener
// let button = document.getElementById("button").addEventListener
// ("click", buttonClick);

//function buttonClick(e){ // e is an event parameter
    // console.log("Button clicked");
    // document.getElementById("header-title").textContent = "Changed";
    // document.querySelector("#main").style.backgroundColor = "red";
    // console.log(e); // details of the click

    //console.log(e.target); // gives the element that was clicked
    // console.log(e.target.id); // returns the id 
    // console.log(e.target.classList); // will return the class list of the element 
    // let output = document.getElementById("output");
    // output.innerHTML = "<h3>"+e.target.id+"</h3>";

    // console.log(e.type); // returns the click type
    // console.log(e.clientX); // gets the x coords from the window
    // console.log(e.clientY); // gets the y coords

    // get the actual coord within the element itself
    // console.log(e.offsetX);
    // console.log(e.offsety);

    // console.log(e.altKey); // returns true if you click and press the alt key same time
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);

//}

// let button = document.getElementById("button");
// let box = document.getElementById("box");
// button.addEventListener("click", runEvent);
// button.addEventListener("dblclick", runEvent);
// button.addEventListener("mouseup", runEvent);// event runs when you release the mouse
// button.addEventListener("mousedown", runEvent);// event runs as soon as you click and hold

// box.addEventListener("mouseenter", runEvent); // you enter the div it will run
// box.addEventListener("mouseleave", runEvent); // you leave the div it will run

// box.addEventListener("mouseover", runEvent); // both above does the same thing
// box.addEventListener("mouseout", runEvent);// but the mouse over runs for the inner element , same with mouse out

// box.addEventListener("mousemove", runEvent);// use with output below to get the position of the mouse

// function runEvent(e){// will say the type of eventl
//     console.log("EVENT TYPE: " + e.type);
//     // output.innerHTML = "<h3>MouseX: "+e.offsetX+ " </h3><h3>MouseY: "+e.offsetY+"</h3>";
//     // //Connect the rbg to the offset
//     // box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";


// }

// Keyboard input
// let itemInput = document.querySelector('input[type="text"]');
// let form = document.querySelector('form');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent); // it will run will run when you let go of the key
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent); // when you click in a input box
// itemInput.addEventListener('blur', runEvent);// when you click out the input box

// itemInput.addEventListener('cut', runEvent);// if you select cut in the options it will run
// itemInput.addEventListener('paste', runEvent);// will run if you paste something

// itemInput.addEventListener('input', runEvent);// will run as soon as you do anything , type, cut or paste

// function runEvent(e){// will say the type of eventl
//     console.log("EVENT TYPE: " + e.type);
//     // console.log(e.target.value);// will output what you typing
//     // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';

// }

// let select = document.querySelector('select');
// select.addEventListener('change', runEvent); // will run if an input changes. ex an options tag

// form.addEventListener('submit', runEvent);// to prevent the data to submit to the page add this line in the runEvent
//e.preventDefault(); 