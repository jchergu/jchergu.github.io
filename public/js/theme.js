function setTopbarColor(colorClass) {
  const header = document.querySelector("header");
  if (!header) return;

  // Rimuove eventuali vecchie classi che iniziano con bg-primary
  header.classList.forEach(cls => {
    if (cls.startsWith("bg-primary")) {
      header.classList.remove(cls);
    }
  });

  // Aggiunge quella nuova
  header.classList.add(colorClass);

  // Salva scelta in localStorage così resta al refresh
  localStorage.setItem("topbarColor", colorClass);
}

// Quando la pagina carica, applica il colore salvato
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("topbarColor");
  if (saved) setTopbarColor(saved);
});
