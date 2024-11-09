// Sort songs alphabetically on page load
window.onload = function() {
    sortSongs();
};

function sortSongs() {
    const songList = document.getElementById('songList');
    const songs = Array.from(songList.getElementsByTagName('li'));

    // Sort the songs array based on 'data-transliteration' attribute
    songs.sort((a, b) => {
        const transliterationA = a.getAttribute('data-transliteration').toLowerCase();
        const transliterationB = b.getAttribute('data-transliteration').toLowerCase();
        return transliterationA.localeCompare(transliterationB);
    });

    // Append sorted songs back to the song list
    songs.forEach(song => songList.appendChild(song));
}

function filterSongs() {
    const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const songs = Array.from(document.getElementById('songList').getElementsByTagName('li'));

    // Filter and sort the songs
    const filteredSongs = songs.filter(song => {
        const transliteration = song.getAttribute('data-transliteration').toLowerCase();
        return transliteration.includes(searchInput);
    }).sort((a, b) => {
        const transliterationA = a.getAttribute('data-transliteration').toLowerCase();
        const transliterationB = b.getAttribute('data-transliteration').toLowerCase();
        return transliterationA.localeCompare(transliterationB);
    });

    // Display only filtered songs in sorted order
    const songList = document.getElementById('songList');
    songList.innerHTML = ''; // Clear the list
    filteredSongs.forEach(song => songList.appendChild(song)); // Add sorted filtered songs
}
