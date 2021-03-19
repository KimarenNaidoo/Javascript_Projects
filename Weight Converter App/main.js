document.getElementById('output').style.visibility = 'hidden';
const kgInput = document.getElementById('kgInput');

kgInput.addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';
    // Get the input
    let kg = e.target.value;

    // Setting the values of the card
    document.getElementById('gramsOutput').innerHTML = kg*1000;
    document.getElementById('lbsOutput').innerHTML = kg*2.205;
    document.getElementById('ozOutput').innerHTML = kg*35.274;

});