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
