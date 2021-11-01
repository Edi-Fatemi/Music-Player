const title = document.querySelector(".title");
const prev = document.querySelector(".prev");
const playPause = document.querySelector(".playPause");
const next = document.querySelector(".next");
const audio = document.querySelector("audio");

let songList = [
  // https://www.youtube.com/watch?v=ILHkWfe901g
  {
    path: "https://open.spotify.com/track/5uScszzCJQzbtMgt9I2bYy?si=5efcb7b0fa574578",
    songName: "Spark Of Light - Vlad Gluschenko",
  },
  {
    path: "https://dl.avangtv.com/music/99-01/Shadmehr-Aghili-Bi-Ehsas.mp3",
    songName: "Shadmehr-Aghili",
  },
  {
    path: "https://www.youtube.com/watch?v=gA483GNWyvc",
    songName: "Stay With Me - Onycs",
  },
  {
    path: "https://www.youtube.com/watch?v=3wW6onn9puk",
    songName: "Starry Night - 六角猫",
  },
  {
    path: "https://www.youtube.com/watch?v=xBeCgq2e4Mg",
    songName: "Paraglide - Scandinavianz",
  },
  {
    path: "https://www.youtube.com/watch?v=RrB9qAHay7U",
    songName: "Hold On - Vlad Gluschenko",
  },
];

let songPlaying = false;

function playSong() {
  songPlaying = true;
  audio.play();
  playPause.classList.add("active");

  //Change Play Icon

  playPause.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
}

function pauseSong() {
  songPlaying = false;
  audio.pause();
  playPause.classList.remove("active");

  //Change Play Icon On Pause
  playPause.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
}

playPause.addEventListener("click", () =>
  songPlaying ? pauseSong() : playSong()
);

//Load Songs
function loadSong(songList) {
  title.textContent = songList.songName;
  audio.src = songList.path;
}

let i = 0;

loadSong(songList[i]);

// Go To Previous Song On Click
function prevSong() {
  i--;

  if (i < 0) {
    i = songList.length - 1;
  }
  loadSong(songList[i]);
  playSong();
}
prev.addEventListener("click", prevSong);

// Go To Next Song On Click
function nextSong() {
  i++;

  if (i > songList.length - 1) {
    i = 0;
  }
  loadSong(songList[i]);
  playSong();
}
next.addEventListener("click", nextSong);
