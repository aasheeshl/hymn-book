function filterSongs() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let list = document.getElementById('songList');
    let songs = Array.from(list.querySelectorAll('li'));

    // Filter and sort the songs that match the search input
    let filteredSongs = songs.filter(song => {
        let text = song.getAttribute('data-transliteration').toLowerCase();
        return text.includes(input);
    });

    filteredSongs.sort((a, b) => a.textContent.localeCompare(b.textContent));

    // Clear the list and re-append only the sorted, filtered items
    list.innerHTML = '';
    filteredSongs.forEach(song => list.appendChild(song));
}

// Call filterSongs on each keystroke in the search bar
document.getElementById('searchBar').addEventListener('keyup', filterSongs);
