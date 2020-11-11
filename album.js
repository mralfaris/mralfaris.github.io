let data = [
    {"artist": "Coldplay", "song": "A Head Full of Dreams", "album": "A Head Full of Dreams", "genre": "Pop", "time": "3:43", "rating": "5", "albumId": "1"},
    {"artist": "Coldplay", "song": "Birds", "album": "A Head Full of Dreams", "genre": "Rock", "time": "3:49", "rating": "3", "albumId": "1"},
    {"artist": "Coldplay", "song": "Hymn for the Weekend", "album": "A Head Full of Dreams", "genre": "Other", "time": "4:18", "rating": "5", "albumId": "1"},
    {"artist": "Coldplay", "song": "Everglow", "album": "A Head Full of Dreams", "genre": "Country", "time": "4:42", "rating": "3", "albumId": "1"},
    {"artist": "Coldplay", "song": "Adventure of a Lifetime", "album": "A Head Full of Dreams", "genre": "Jazz", "time": "4:23", "rating": "5", "albumId": "1"},
    {"artist": "Linkin Park", "song": "Papercut", "album": "Hybrid Theory", "genre": "Rock", "time": "3:13", "rating": "4", "albumId": "2"},
    {"artist": "Linkin Park", "song": "One Step Closer", "album": "Hybrid Theory", "genre": "Pop", "time": "4:13", "rating": "5", "albumId": "2"},
    {"artist": "Linkin Park", "song": "Points of Authority", "album": "Hybrid Theory", "genre": "Country", "time": "4:07", "rating": "3", "albumId": "2"},
    {"artist": "Linkin Park", "song": "Crawling", "album": "Hybrid Theory", "genre": "Other", "time": "4:41", "rating": "2", "albumId": "2"},
    {"artist": "Linkin Park", "song": "In the End", "album": "Hybrid Theory", "genre": "Jazz", "time": "3:33", "rating": "4", "albumId": "2"},
    {"artist": "Shania Twain", "song": "Juanita", "album": "Up!", "genre": "Country", "time": "3:51", "rating": "3", "albumId": "3"},
    {"artist": "Shania Twain", "song": "Forever and for Always", "album": "Up!", "genre": "Jazz", "time": "4:43", "rating": "4", "albumId": "3"},
    {"artist": "Shania Twain", "song": "What a Way to Wanna Be!", "album": "Up!", "genre": "Rock", "time": "3:36", "rating": "5", "albumId": "3"},
    {"artist": "Shania Twain", "song": "Waiter! Bring Me Water!", "album": "Up!", "genre": "Pop", "time": "3:20", "rating": "3", "albumId": "3"},
    {"artist": "Shania Twain", "song": "She's Not Just a Pretty Face", "album": "Up!", "genre": "Other", "time": "3:49", "rating": "4", "albumId": "3"},
    {"artist": "Nubya Garcia", "song": "Pace", "album": "Source", "genre": "Jazz", "time": "4:43", "rating": "4", "albumId": "4"},
    {"artist": "Nubya Garcia", "song": "The message continues", "album": "Source", "genre": "Rock", "time": "3:36", "rating": "5", "albumId": "4"},
    {"artist": "Nubya Garcia", "song": "Source", "album": "Source", "genre": "Pop", "time": "3:20", "rating": "3", "albumId": "4"},
    {"artist": "Nubya Garcia", "song": "Boundless Beings", "album": "Get Up", "genre": "Other", "time": "3:49", "rating": "4", "albumId": "4"},
    {"artist": "Bryan Adams", "song": "Do What Ya Gotta Do", "album": "Get Up", "genre": "Jazz", "time": "4:43", "rating": "4", "albumId": "4"},
    {"artist": "Bryan Adams", "song": "We Did It All", "album": "Get Up", "genre": "Rock", "time": "3:36", "rating": "5", "albumId": "4"},
    {"artist": "Bryan Adams", "song": "Go Down Rockin", "album": "Get Up", "genre": "Pop", "time": "3:20", "rating": "3", "albumId": "4"},
    {"artist": "Bryan Adams", "song": "You Belong to Me", "album": "Get Up", "genre": "Other", "time": "3:49", "rating": "4", "albumId": "4"}
];

let favdiv = document.getElementById("fav-albums-area");
let resdiv = document.getElementById("results-area");
favdiv.style.display = "none";
resdiv.style.display = "none";

let artist = document.getElementById('artist');
let song = document.getElementById('song');
let album = document.getElementById('album');
let genre = document.getElementById('genre');
let searchBtn = document.getElementById('searchBtn');
let resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', clear);
searchBtn.addEventListener('click', search);
artist.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        search(e);
    }
});
song.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      search(e);
    }
});
album.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        search(e);
    }
});
genre.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        search(e);
    }
});

function clear(e) {
    e.preventDefault();
    artist.value = '';
    song.value = '';
    album.value = '';
    genre.value = '';
}

function search(e) {
    e.preventDefault();
    if (artist.value == '' && song.value == '' && album.value == '' && genre.value == '') {
        window.alert('Please enter search criteria');
    } else {
        var newArray = data.filter(item => (item.album == album.value || item.song == song.value || item.artist == artist.value || item.genre == genre.value));
        fillTable(newArray);
        resdiv.style.display = "block";
    }
}

function fillTable(resultsArray) {
    let table = document.getElementById("songs");
    let rowCount = table.rows.length;
    for (var x=rowCount-1; x>0; x--) {
        table.deleteRow(x);
    }
    let node = document.getElementById("songsBody");
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }
    resultsArray.forEach(function (item) {
        let row = table.insertRow();
        row.insertCell(0).innerHTML= "<label>" + item.artist + "</label>";    
        row.insertCell(1).innerHTML= "<label>" + item.song + "</label>";
        row.insertCell(2).innerHTML= "<label>" + item.time + "</label>";    
        row.insertCell(3).innerHTML= "<label>" + item.album + "</label>";    
        row.insertCell(4).innerHTML= "<label>" + item.rating + "</label>";
        row.insertCell(5).innerHTML= "<label>" + item.genre + "</label>";    
        row.insertCell(6).innerHTML= '<button class="download-btn" onclick="addFavorites('+item.albumId+')">Favorite</button>';
        row.insertCell(7).innerHTML= '<button class="download-btn" onclick="startDownload()">Download</button>';
    });
}

function addFavorites(albumId) {
    favdiv.style.display = "block";
    let table = document.getElementById("albums");
    let row = (table.rows[0] == null) ? table.insertRow() : table.rows[0];
    let exists = false;
    for (i = 0; i < row.cells.length; i++) {
        if (table.tBodies[0].rows[0].cells[i].children[0] != null &&
            table.tBodies[0].rows[0].cells[i].children[0].id == albumId) {
            exists = true;
            break;
        }
    }
    if (!exists) {
        row.insertCell(-1).innerHTML = '<img id="' + albumId + '" src="' + albumId + '.png" onclick="removeFavorite('+albumId+')"></img>';
    }
}

function removeFavorite(albumId) {
    let item = document.getElementById(albumId);
    item.remove();
}

function startDownload() {
    window.alert("Download started");
}