// Typing effect
const text = "Frontend Developer | Designer | Student";
let index = 0;

function typing() {
    const typingTarget = document.getElementById("typing");
    typingTarget.textContent = text.slice(0, index);

    index++;

    if (index > text.length) {
        index = 0;
        setTimeout(typing, 1200);
    } else {
        setTimeout(typing, 80);
    }
}

typing();

// Button open link new tab
document.querySelectorAll(".button").forEach(btn => {
    btn.addEventListener("click", function(e){
        const url = this.getAttribute("href");
        if(url && url !== "#") {
            window.open(url, "_blank");
        }
    });
});
