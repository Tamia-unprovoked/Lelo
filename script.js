/*==================================================
        FOR MY LOVE ❤️
        script.js — PART 1
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
      Smooth Navigation
    =========================================*/

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth",
                    block: "start"

                });

            }

        });

    });

    /*=========================================
      Scroll Reveal Animation
    =========================================*/

    const revealElements = document.querySelectorAll(

        ".section, .photo-card, .song-card, .poem-card, .ending"

    );

    const revealObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    }, {

        threshold: .15

    });

    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });

    /*=========================================
      Secret Tulip
    =========================================*/

    let tulipClicks = 0;

    const tulip = document.querySelector(".secret-tulip");

    const loveLetter = document.querySelector(".love-letter");

    if (tulip && loveLetter) {

        tulip.addEventListener("click", () => {

            tulipClicks++;

            tulip.style.transform = "scale(1.05)";

            setTimeout(() => {

                tulip.style.transform = "";

            }, 180);

            if (tulipClicks === 2) {

                loveLetter.classList.remove("hidden");

                loveLetter.classList.add("show");

                loveLetter.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    }

    /*=========================================
      Floating Petals
    =========================================*/

    const petalContainer = document.querySelector(".petals");

    function createPetal() {

        if (!petalContainer) return;

        const petal = document.createElement("div");

        petal.className = "petal";

        petal.innerHTML = "❀";

        petal.style.left = Math.random() * 100 + "vw";

        petal.style.animationDuration =

            (6 + Math.random() * 8) + "s";

        petal.style.opacity =

            (0.2 + Math.random() * .6);

        petal.style.fontSize =

            (12 + Math.random() * 20) + "px";

        petal.style.transform =

            `rotate(${Math.random()*360}deg)`;

        petalContainer.appendChild(petal);

        setTimeout(() => {

            petal.remove();

        }, 15000);

    }

    setInterval(createPetal, 500);

    /*=========================================
      20 Second Surprise
    =========================================*/

    setTimeout(() => {

        const overlay = document.createElement("div");

        overlay.className = "surprise-overlay";

        overlay.innerHTML = `

            <div class="surprise-box">

                <h2>🌷</h2>

                <h3>One More Thing...</h3>

                <p>

                    I'd choose you

                    in every lifetime.

                </p>

                <button id="closeSurprise">

                    ❤️

                </button>

            </div>

        `;

        document.body.appendChild(overlay);

        const closeBtn = document.getElementById("closeSurprise");

        closeBtn.addEventListener("click", () => {

            overlay.style.opacity = "0";

            setTimeout(() => {

                overlay.remove();

            }, 60000);

        });

    }, 600000);

    /*=========================================
      Hero Button Glow
    =========================================*/

    const heroButton = document.querySelector(".hero-btn");

    if (heroButton) {

        setInterval(() => {

            heroButton.classList.toggle("pulse");

        }, 2200);

    }

});

/*==================================================
      Dynamic Petal CSS
==================================================*/

const style = document.createElement("style");

style.innerHTML = `

.petal{

    position:fixed;

    top:-30px;

    color:white;

    pointer-events:none;

    z-index:0;

    animation:fall linear forwards;

    text-shadow:0 0 8px rgba(255,255,255,.8);

}

@keyframes fall{

    0%{

        transform:translateY(-30px) rotate(0deg);

    }

    100%{

        transform:

            translateY(110vh)

            translateX(80px)

            rotate(360deg);

    }

}

/* Surprise Popup */

.surprise-overlay{

    position:fixed;

    inset:0;

    display:flex;

    justify-content:center;

    align-items:center;

    background:rgba(0,0,0,.45);

    backdrop-filter:blur(8px);

    z-index:99999;

    animation:fadeIn .60s ease;

}

.surprise-box{

    width:min(420px,90%);

    background:white;

    border-radius:24px;

    padding:40px;

    text-align:center;

    box-shadow:0 25px 60px rgba(0,0,0,.15);

}

.surprise-box h2{

    font-size:3rem;

}

.surprise-box h3{

    margin:15px 0;

    color:#8A69C7;

    font-family:"Playfair Display",serif;

}

.surprise-box p{

    line-height:1.8;

    margin-bottom:25px;

}

.surprise-box button{

    border:none;

    cursor:pointer;

    width:60px;

    height:60px;

    border-radius:50%;

    font-size:1.5rem;

    color:white;

    background:#8A69C7;

    transition:.3s;

}

.surprise-box button:hover{

    transform:scale(1.1);

}

.pulse{

    animation:pulseGlow 1.2s ease;

}

@keyframes pulseGlow{

    0%{

        box-shadow:0 0 0 rgba(138,105,199,0);

    }

    50%{

        box-shadow:0 0 35px rgba(138,105,199,.5);

    }

    100%{

        box-shadow:0 0 0 rgba(138,105,199,0);

    }

}

@keyframes fadeIn{

    from{

        opacity:0;

    }

    to{

        opacity:1;

    }

}

`;

document.head.appendChild(style);

/*==================================================
            END OF SCRIPT.JS PART 1
==================================================*/
/*==================================================
        FOR MY LOVE ❤️
        script.js — PART 2
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
      IMAGE LIGHTBOX
    =========================================*/

    const images = document.querySelectorAll(".photo-card img");

    if (images.length > 0) {

        const lightbox = document.createElement("div");
        lightbox.className = "lightbox";

        lightbox.innerHTML = `
            <span class="close-lightbox">&times;</span>
            <img class="lightbox-image" src="">
        `;

        document.body.appendChild(lightbox);

        const lightboxImage = lightbox.querySelector(".lightbox-image");
        const closeButton = lightbox.querySelector(".close-lightbox");

        images.forEach(image => {

            image.style.cursor = "zoom-in";

            image.addEventListener("click", () => {

                lightboxImage.src = image.src;

                lightbox.classList.add("show");

                document.body.style.overflow = "hidden";

            });

        });

        closeButton.addEventListener("click", closeLightbox);
        lightbox.addEventListener("click", function(e){

            if(e.target === lightbox){

                closeLightbox();

            }

        });

        function closeLightbox(){

            lightbox.classList.remove("show");

            document.body.style.overflow = "";

        }

    }

    /*=========================================
      PARALLAX HERO
    =========================================*/

    const hero = document.querySelector("header");

    window.addEventListener("scroll", () => {

        const offset = window.scrollY;

        if(hero){

            hero.style.backgroundPositionY = offset * 0.35 + "px";

        }

    });

    /*=========================================
      MOUSE GLOW
    =========================================*/

    const glow = document.createElement("div");

    glow.className = "cursor-glow";

    document.body.appendChild(glow);

    document.addEventListener("mousemove",(e)=>{

        glow.style.left = e.clientX + "px";

        glow.style.top = e.clientY + "px";

    });

    /*=========================================
      RANDOM SPARKLES
    =========================================*/

    function createSparkle(){

        const sparkle = document.createElement("div");

        sparkle.className = "sparkle";

        sparkle.innerHTML = "✦";

        sparkle.style.left = Math.random()*100+"vw";

        sparkle.style.top = Math.random()*100+"vh";

        sparkle.style.fontSize =
            (8 + Math.random()*12)+"px";

        document.body.appendChild(sparkle);

        setTimeout(()=>{

            sparkle.remove();

        },2500);

    }

    setInterval(createSparkle,1200);

    /*=========================================
      PHOTO TILT EFFECT
    =========================================*/

    document.querySelectorAll(".photo-card").forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateY = ((x / rect.width)-0.5)*10;
            const rotateX = ((y / rect.height)-0.5)*-10;

            card.style.transform = `
                perspective(900px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale(1.04)
            `;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="";

        });

    });

    /*=========================================
      HEART CONFETTI
    =========================================*/

    function heartBurst(){

        for(let i=0;i<18;i++){

            const heart=document.createElement("div");

            heart.className="mini-heart";

            heart.innerHTML="❤";

            heart.style.left=(45+Math.random()*10)+"vw";

            heart.style.top="92vh";

            heart.style.fontSize=
                (12+Math.random()*18)+"px";

            heart.style.setProperty(
                "--x",
                (-150+Math.random()*300)+"px"
            );

            document.body.appendChild(heart);

            setTimeout(()=>{

                heart.remove();

            },3500);

        }

    }

    setInterval(heartBurst,15000);

});

/*=========================================
  DYNAMIC CSS
=========================================*/

const finalStyle=document.createElement("style");

finalStyle.innerHTML=`

/* Lightbox */

.lightbox{

position:fixed;
inset:0;
display:flex;
justify-content:center;
align-items:center;
background:rgba(0,0,0,.85);
backdrop-filter:blur(10px);

opacity:0;
visibility:hidden;
transition:.35s;
z-index:999999;

}

.lightbox.show{

opacity:1;
visibility:visible;

}

.lightbox-image{

max-width:90%;
max-height:85%;
border-radius:18px;
box-shadow:0 30px 60px rgba(0,0,0,.4);

}

.close-lightbox{

position:absolute;
top:35px;
right:45px;

font-size:3rem;

cursor:pointer;
color:white;

}

/* Cursor Glow */

.cursor-glow{

position:fixed;

width:180px;
height:180px;

border-radius:50%;

pointer-events:none;

background:radial-gradient(
circle,
rgba(255,255,255,.28),
transparent 70%
);

transform:translate(-50%,-50%);
z-index:-1;

}

/* Sparkles */

.sparkle{

position:fixed;

pointer-events:none;

color:#ffffff;

animation:sparkle 2.5s linear forwards;

text-shadow:0 0 12px white;

}

@keyframes sparkle{

0%{

opacity:0;
transform:scale(.3);

}

20%{

opacity:1;

}

100%{

opacity:0;

transform:
translateY(-70px)
scale(1.6)
rotate(180deg);

}

}

/* Hearts */

.mini-heart{

position:fixed;

pointer-events:none;

color:#ff78bc;

animation:heartFloat 3.5s ease forwards;

}

@keyframes heartFloat{

0%{

opacity:1;
transform:translateY(0);

}

100%{

opacity:0;

transform:

translate(
var(--x),
-250px)

rotate(720deg)

scale(1.5);

}

}

/* Mobile */

@media(max-width:900px){

nav{

flex-direction:column;
gap:18px;

padding:18px;

}

nav ul{

flex-wrap:wrap;
justify-content:center;
gap:18px;

}

.hero-content h1{

font-size:3rem;

}

.poem-card{

padding:40px 30px;

}

.song-card{

padding:25px;

}

.section{

padding:90px 7%;

}

.gallery{

grid-template-columns:1fr;

}

.music-grid{

grid-template-columns:1fr;

}

}

`;

document.head.appendChild(finalStyle);

/*==================================================
                END
==================================================*/