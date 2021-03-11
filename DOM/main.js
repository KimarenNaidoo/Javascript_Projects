let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

// Filter event
filter.addEventListener('keyup', filterItems);

function addItem(e){
    e.preventDefault();

    // get input value
    let newItem = document.getElementById('item').value;

    // Create new li element
    let li = document.createElement('li');

    // Add class
    li.className = 'list-group-item';
    // console.log(li);

    // Add textNode with input value
    li.appendChild(document.createTextNode(newItem));

    // Create the delete button element
    let deleteBtn = document.createElement('button');

    // add classes to deletebtn
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // append textnode
    deleteBtn.appendChild(document.createTextNode("X"));

    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}

// remove item
function removeItem(e){
    // now it will work if we click the element , we want to click the x so add if stm
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li = e.target.parentElement;// get the paren and remove the entire li
            itemList.removeChild(li);
        }
    }

}

// filter item
function filterItems(e){ // search item it will show but press something else will disappear
    // convert to lowercase
    let text = e.target.value.toLowerCase();
    // get all the elements
    let items = itemList.getElementsByTagName('li');
    // Convert to array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){ // if its not a match (-1)
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
}