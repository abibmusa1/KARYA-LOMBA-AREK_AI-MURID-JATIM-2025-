document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('menu-toggle').addEventListener('click', ()=>{
  alert("Menu belum dibuat interaktif, ini hanya contoh.");
});

const form = document.getElementById('contact-form');
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  alert("Pesan dikirim! (Simulasi)");
  form.reset();
});

