const hamburger = document.querySelector(".hamburger");
const Nav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", () => {
    Nav.classList.toggle("mobile-nav-hide");
});
const filterLeftNav = document.querySelector(".filter_left-nav");
const items = document.querySelector(".filter-mobile");

filterLeftNav.addEventListener("click", () => {
    items.classList.toggle("filter-mobile-hide");
});

// Timer js
// Set the date we're counting down to
const countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
let x = setInterval(function () {
    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = `
                <div>
                    <span>Days</span>
                    <h1>${days}</h1>
                </div>
                <span class="dot"> : </span>
                <div>
                    <span>Hours</span>
                    <h1>${hours}</h1>
                </div>
                <span class="dot"> : </span>
                <div>
                    <span>Minutes</span>
                    <h1>${minutes}</h1>
                </div>
                <span class="dot"> : </span>
                <div>
                    <span>Seconds</span>
                    <h1>${seconds}</h1>
                </div>
            `;
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);


const swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });