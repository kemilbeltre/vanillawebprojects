const body = document.body;
let overflowY = body.style.overflowY;
const hamburgerToggle = document.querySelector(".toggle");

hamburgerToggle.addEventListener("change", (e) => {
    e.target.checked
        ? (overflowY = "hidden")
        : (overflowY = "scroll");
});
