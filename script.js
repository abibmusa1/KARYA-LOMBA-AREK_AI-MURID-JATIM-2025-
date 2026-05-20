function openExam() {
  let url = document.getElementById("urlInput").value;

  if (!url.startsWith("http")) {
    url = "https://" + url;
  }

  document.getElementById("examFrame").src = url;
}

