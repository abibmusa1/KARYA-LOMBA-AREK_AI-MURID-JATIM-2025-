function openExam() {
    const url = document.getElementById("urlInput").value;
    const frame = document.getElementById("examFrame");

    frame.src = url;
    frame.style.display = "block";
}
