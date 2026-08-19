/* =====================================
   BIRTHDAY WEBSITE
   Tasfia Shahid Momo
===================================== */


/* =========================
   ELEMENTS
========================= */

const dateInput = document.getElementById("birthdayDate");
const unlockBtn = document.getElementById("unlockBtn");
const errorMessage = document.getElementById("errorMessage");

const dateGate = document.getElementById("dateGate");
const mainWebsite = document.getElementById("mainWebsite");

const music = document.getElementById("birthdayMusic");
const musicButton = document.getElementById("musicButton");

const surpriseButton = document.getElementById("surpriseButton");
const secretMessage = document.getElementById("secretMessage");


/* =========================
   DATE UNLOCK
========================= */

unlockBtn.addEventListener("click", function () {

    if (!dateInput.value) {

        errorMessage.textContent =
            "Please choose a date first 💗";

        return;
    }


    const selectedDate = new Date(dateInput.value);

    const month = selectedDate.getUTCMonth() + 1;
    const day = selectedDate.getUTCDate();


    /*
        Birthday:
        6 October
    */

    if (month === 10 && day === 6) {

        errorMessage.textContent = "";

        unlockWebsite();

    } else {

        errorMessage.innerHTML =
            "Hmm... that's not the special date yet. 🌸<br>Try again.";

        dateInput.classList.add("shake");

        setTimeout(() => {
            dateInput.classList.remove("shake");
        }, 500);
    }

});


/* =========================
   UNLOCK WEBSITE
========================= */

function unlockWebsite() {

    dateGate.style.transition =
        "opacity 1s ease, transform 1s ease";

    dateGate.style.opacity = "0";
    dateGate.style.transform = "scale(1.08)";


    setTimeout(() => {

        dateGate.classList.add("hidden");

        mainWebsite.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

        startMusic();

        createConfetti();

        createFloatingHearts();

    }, 1000);

}


/* =========================
   MUSIC
========================= */

let musicPlaying = false;


function startMusic() {

    music.volume = 0.35;

    music.play()
        .then(() => {

            musicPlaying = true;
            musicButton.textContent = "🔊";

        })
        .catch(() => {

            musicPlaying = false;
            musicButton.textContent = "🎵";

        });

}


musicButton.addEventListener("click", function () {

    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

        musicButton.textContent = "🎵";

    } else {

        music.play();

        musicPlaying = true;

        musicButton.textContent = "🔊";

    }

});


/* =========================
   SURPRISE BUTTON
========================= */

surpriseButton.addEventListener("click", function () {

    secretMessage.classList.add("show");

    surpriseButton.style.display = "none";

    createConfetti();

    window.scrollBy({
        top: 150,
        behavior: "smooth"
    });

});


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const pieces = 80;

    for (let i = 0; i < pieces; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.animationDuration =
            (Math.random() * 3 + 3) + "s";

        confetti.style.animationDelay =
            Math.random() * 1.5 + "s";

        confetti.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        const colors = [
            "#ff7faf",
            "#f7b2cc",
            "#e9558e",
            "#ffd1e1",
            "#ffffff",
            "#d84b82"
        ];

        confetti.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        document.body.appendChild(confetti);


        setTimeout(() => {

            confetti.remove();

        }, 7000);

    }

}


/* =========================
   FLOATING HEARTS
========================= */

function createFloatingHearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.innerHTML =
            ["💗", "💕", "💖", "🌸", "✨"]
            [Math.floor(Math.random() * 5)];

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom = "-30px";

        heart.style.fontSize =
            (Math.random() * 15 + 15) + "px";

        heart.style.opacity = "0.65";

        heart.style.zIndex = "0";

        heart.style.pointerEvents = "none";

        heart.style.transition =
            "transform 6s linear, opacity 6s linear";

        document.body.appendChild(heart);


        setTimeout(() => {

            heart.style.transform =
                `translateY(-110vh) rotate(${Math.random() * 360}deg)`;

            heart.style.opacity = "0";

        }, 100);


        setTimeout(() => {

            heart.remove();

        }, 6500);

    }, 900);

}


/* =========================
   IMAGE CLICK EFFECT
========================= */

const photo = document.querySelector(".photo-frame img");

if (photo) {

    photo.addEventListener("click", function () {

        createConfetti();

    });

}


/* =========================
   SCROLL REVEAL
========================= */

const sections =
    document.querySelectorAll(".section");


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(40px)";

    section.style.transition =
        "opacity 1s ease, transform 1s ease";

    observer.observe(section);

});


/* =========================
   PAGE LOAD
========================= */

window.addEventListener("load", function () {

    dateInput.focus();

});
