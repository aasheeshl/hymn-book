function sortSongs() {
    let list = document.getElementById('songList');
    let songs = Array.from(list.querySelectorAll('li'));

    // Sort the songs alphabetically by their text content
    songs.sort((a, b) => a.textContent.localeCompare(b.textContent));

    // Clear the list and re-append the sorted items
    list.innerHTML = '';
    songs.forEach(song => list.appendChild(song));
}



function filterSongs() {
    const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const songs = document.getElementById('songList').getElementsByTagName('li');

    for (let i = 0; i < songs.length; i++) {
        const song = songs[i].getAttribute('data-transliteration');
        if (song.toLowerCase().indexOf(searchInput) > -1) {
            songs[i].style.display = "";
        } else {
            songs[i].style.display = "none";
        }
    }
}
