function generateButtons() {
  const area = document.getElementById('button-area');
  area.innerHTML = ''; // reset

  const totalButtons = 5;

  for (let i = 0; i < totalButtons; i++) {
    const btn = document.createElement('button');
    btn.textContent = `Tombol ${i + 1}`;

    btn.onclick = function () {
      if (i === 2) { // tombol ke-3
        showVideo();
      } else {
        alert("❌ error!");
        hideVideo(); // baru hilang setelah alert ditutup
      }
    };

    area.appendChild(btn);
  }
}

function showVideo() {
  const video = document.getElementById('memeVideo');
  video.style.display = "block";
  video.play();
}

function hideVideo() {
  const video = document.getElementById('memeVideo');
  video.pause();
  video.currentTime = 0; // reset ke awal
  video.style.display = "none";
}
