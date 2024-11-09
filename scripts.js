// Sort songs alphabetically on page load
window.onload = function() {
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
};

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
