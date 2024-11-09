// Sort songs alphabetically on page load
window.onload = function() {
    const songList = document.getElementById('songList');
    const songs = Array.from(songList.getElementsByTagName('li'));

    // Sort the songs array based on 'data-transliteration' attribute
    songs.sort((a, b) => {
        const transliterationA = a.getAttribute('data-transliteration').toLowerCase();
        const transliterationB = b.getAttribute('data-transliteration').toLowerCase();
        return transliterationA.localeCompare(transliterationB, 'en', { sensitivity: 'base' });
    });

    // Append sorted songs back to the song list
    songs.forEach(song => songList.appendChild(song));
};

function filterSongs() {
    const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const songs = document.getElementById('songList').getElementsByTagName('li');

    for (let i = 0; i < songs.length; i++) {
        const song = songs[i].getAttribute('data-transliteration');
        
        // Display all items if search bar is empty, otherwise filter based on search term
        if (searchInput === "" || song.toLowerCase().includes(searchInput)) {
            songs[i].style.display = "";
        } else {
            songs[i].style.display = "none";
        }
    }
}

