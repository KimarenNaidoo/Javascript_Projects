const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

// Search the json file and filter it
const searchStates = async searchText => {
    const res = await fetch('../data/za.json');
    const states = await res.json();

    // Filter
    let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi'); // ^ means to start with - gi means lower or upper case
        return state.city.match(regex) || state.admin_name.match(regex);
    });
    

    // clear the array
    if(searchText.length === 0){
        matches = [];
        matchList.innerHTML = '';
    }

    outputHmtl(matches);
};

// Show results
const outputHmtl = matches => {
    if(matches.length > 0) {
        const html = matches.map(match => `
        <div class="card card-body mb-1">
            <h4>${match.city} (${match.admin_name}) <span class="text-primary">${match.population}</span></h4>
            <small>Lat: ${match.lat} / Long: ${match.lng}</small>
        </div>
        `).join('');
        matchList.innerHTML = html;

        
    }
};

// Event Listener
search.addEventListener('input', () => searchStates(search.value));