// const TypeWriter = function(txtElement, words, wait = 3000) {
//     this.txtElement = txtElement; // Represent the text
//     this.words = words; // the array of words
//     this.txt = ''; // Represents whatever is in the area when we reload
//     this.wordIndex = 0; // which word we on
//     this.wait = parseInt(wait, 10);
//     this.type();
//     this.isDeleting = false; // Represent the state if its deleting or not
// }

// // Type Method
// TypeWriter.prototype.type = function() {
//     // Current index of word
//     const current = this.wordIndex % this.words.length;
//     // Get full text of the current word
//     const fullTxt = this.words[current];
    
//     // Check if deleting
//     if(this.isDeleting) {
//         // Remove a character
//         this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//         // Add a character
//         this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }

//     // Insert txt into element
//     this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    
//     // Type speed
//     let typeSpeed = 300;
//     if(this.isDeleting) {
//         typeSpeed /= 2;
//     }

//     // Check if word is complete and move on to next word
//     if(!this.isDeleting && this.txt === fullTxt){
//         typeSpeed = this.wait;// pause at the end
//         this.isDeleting = true;
//     } else if(this.isDeleting && this.txt == '') {
//         this.isDeleting = false;
//         // Next word
//         this.wordIndex++;
//         typeSpeed = 500;
//     }

//     setTimeout(() => this.type(), typeSpeed);
// }




// Using ES6 Classes
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement; // Represent the text
        this.words = words; // the array of words
        this.txt = ''; // Represents whatever is in the area when we reload
        this.wordIndex = 0; // which word we on
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of the current word
        const fullTxt = this.words[current];
        
        // Check if deleting
        if(this.isDeleting) {
            // Remove a character
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add a character
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
        
        // Type speed
        let typeSpeed = 300;
        if(this.isDeleting) {
            typeSpeed /= 2;
        }

        // Check if word is complete and move on to next word
        if(!this.isDeleting && this.txt === fullTxt){
            typeSpeed = this.wait;// pause at the end
            this.isDeleting = true;
        } else if(this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Next word
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize when Dom load
document.addEventListener('DOMContentLoaded', init);

// Initialize app
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    new TypeWriter(txtElement, words, wait);
}
