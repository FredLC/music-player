const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

const songs = [
    {
        name: 'song1',
        displayName: 'High Octane',
        artist: 'Bensound',
    },
    {
        name: 'song2',
        displayName: 'Infinite Chills',
        artist: 'Bensound',
    },
    {
        name: 'song3',
        displayName: 'Bauhaus Punk',
        artist: 'Bensound',
    },
    {
        name: 'song4',
        displayName: 'Rythmic Beach',
        artist: 'Bensound',
    },
    {
        name: 'song5',
        displayName: 'Post-Punk Vibe',
        artist: 'Bensound',
    },
    {
        name: 'song6',
        displayName: 'Jazzy Groovy',
        artist: 'Bensound',
    },
];

let isPlaying = false;

function playSong() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
}

let songIndex = 4;

function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

loadSong(songs[songIndex]);

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
