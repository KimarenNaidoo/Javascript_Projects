// Create event listener
document.getElementById('button').addEventListener('click', loadText);

function loadText(){
    // Create XHR object
    let xhr = new XMLHttpRequest();

    // OPEN - type, url/file name - async
    xhr.open('GET', 'sample1.txt', true);

    // we can use either onreadystatechange(but it is outdated),
    // best to use onload
    xhr.onload = function() {
        if(this.status == 200) {
            //console.log(this.responseText);
            document.getElementById('text').innerHTML = this.responseText;
        }else if(this.status == 404) {
            document.getElementById('text').innerHTML = 'Error: Not Found';
        }
    }

    xhr.onerror = function() {
        console.log('Request Error...');
    }

    // Have to add this send() - sends req
    xhr.send();
}

// xhr.readyState returns a number from 1 - 4, 4 is good
// when using onreadystatechange, have to check if xhr.readyState == 4
// OPTIONAL - above onload - used for loaders(waiting for something)
// xhr.onprogress will return readyState = 3, which means that it is processing the reqs

