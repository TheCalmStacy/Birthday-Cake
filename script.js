console.log("Website loaded!");

const messageBox = document.getElementById("messageBox");

messageBox.style.opacity = "1";

const candles = document.querySelectorAll(".candle");

const messages = [
    "💚 happy 21st birthday u nonchalant ragebaiting racist little motherflipper 🐍",
    "💰 i wish u the same amount of money u have in gta 5 💸",
    "🍀 i wish u the strenght to climb any mountain u want 🏔",
    "🪼 and a billion oceans to dive into 🪸",
    "🫶🏿 i hope u get that freaking audi 🚜"
];

let litCandles = 0;

candles.forEach((candle, index) => {

    candle.addEventListener("click", function () {

    if (candle.classList.contains("lit")) return;

    candle.classList.add("lit");
    candle.classList.add("dropped");

litCandles++;

messageBox.classList.remove("show-message");

messageBox.textContent = messages[index];

void messageBox.offsetWidth;

messageBox.classList.add("show-message");

if (litCandles === 5) {

    messageBox.classList.remove("show-message");

    messageBox.textContent =
        "🎉 HAPPY BIRTHDAY AND FRICK YOU (if u gonna roast me for making that website istg you're GONE) 🎉";

    void messageBox.offsetWidth;

    messageBox.classList.add("show-message");

    confetti({
    particleCount: 200,
    spread: 90,
    origin: {
        y: 0.6
    }
});

}

});

});
const cake = document.getElementById("cake");

let cakeClicks = 0;


cake.addEventListener("click", function () {
    cakeClicks++;

if (cakeClicks === 10) {

    alert("u were told to click the candles. not the cake. -1000 aura");

}

const audio = new Audio("sounds/vine-boom.mp3");
audio.play();
});






const music = document.getElementById("bgMusic");

music.volume = 0.010;

document.addEventListener("click", async () => {
    try {
        await music.play();
    } catch (err) {
        console.error(err);
    }
}, { once: true });