function openExam() {
    const url = document.getElementById("urlInput").value;
    const frame = document.getElementById("examFrame");

    frame.src = url;
    frame.style.display = "block";

    // paksa status fokus
    const status = document.getElementById("statusText");
    if (status) {
        status.innerText = "FOKUS";
        status.style.color = "lime";
    }
}
