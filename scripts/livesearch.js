function liveSearch() {
    let searchTerm = document.getElementById('searchInput').value.toLowerCase();
    let modItems = [];
    modItems = document.getElementsByClassName('moditem-header');

    for (let i = 0; i < modItems.length; i++) {
        let searchableWords = modItems[i].textContent.toLowerCase(); 
        let isMatch = searchableWords.includes(searchTerm);

        if (isMatch) {
            modItems[i].parentElement.classList.remove('hidden');
        } else {
            modItems[i].parentElement.classList.add('hidden');
        }
    }
}