// --- 1. Loading Screen ---
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";
    setTimeout(() => { loader.style.display = "none"; }, 500);
});

// --- 2. Mobile Menu Toggle ---
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
    } else {
        menu.classList.add("active");
    }
}

// --- 3. Typing Effect ---
const words = ["Flutter Developer", "Tech Enthusiast", "Nature Lover", "Problem Solver"];
let i = 0;
let timer;

function typeWriter() {
    const heading = document.querySelector(".typing");
    const word = words[i];
    let current = heading.textContent;

    if (current.length < word.length) {
        heading.textContent = word.substring(0, current.length + 1);
        timer = setTimeout(typeWriter, 100);
    } else {
        setTimeout(deleteWriter, 2000);
    }
}

function deleteWriter() {
    const heading = document.querySelector(".typing");
    const word = words[i];
    let current = heading.textContent;

    if (current.length > 0) {
        heading.textContent = word.substring(0, current.length - 1);
        timer = setTimeout(deleteWriter, 50);
    } else {
        i = (i + 1) % words.length;
        typeWriter();
    }
}
setTimeout(typeWriter, 1000);

// --- 4. Scroll Animations (The Smooth Effect) ---
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
    }
}
// Trigger once on load
reveal();

// --- 5. Video Modal Logic ---
const modal = document.getElementById('video-modal');
const iframe = document.getElementById('youtube-frame');

function openVideo(videoId) {
    if(videoId === 'VIDEO_ID_HERE') {
        alert("Video coming soon! Stay tuned."); 
        return;
    }
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`;
    modal.style.display = "flex";
}

function closeVideo() {
    iframe.src = "";
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) closeVideo();
}