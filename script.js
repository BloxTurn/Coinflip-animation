document.getElementById("flipButton").addEventListener("click", flipCoin);
document.getElementById("okButton").addEventListener("click", closePopup);

function flipCoin() {
  const coin = document.getElementById("coin");
  const resultPopup = document.getElementById("resultPopup");
  const resultText = document.getElementById("resultText");

  // Ocultar el popup si está visible
  resultPopup.classList.add("hidden");

  // Generar un resultado aleatorio (Heads o Tails)
  const isHeads = Math.random() < 0.5; // true para Heads, false para Tails

  // Reiniciar la animación
  coin.style.animation = "none"; // Detener cualquier animación existente
  void coin.offsetWidth; // Forzar reflujo para reiniciar animación

  // Aplicar animación basada en el resultado
  coin.style.animation = isHeads
    ? "spin-heads 6s cubic-bezier(0.25, 1, 0.5, 1)"  // Aceleración inicial más rápida
    : "spin-tails 6s cubic-bezier(0.25, 1, 0.5, 1)";   // Aceleración inicial más rápida

  // Mostrar el resultado después de la animación
  setTimeout(() => {
    resultText.textContent = isHeads ? "Heads" : "Tails";
    resultPopup.classList.remove("hidden");
  }, 6000); // Tiempo sincronizado con la duración de la animación
}

function closePopup() {
  const resultPopup = document.getElementById("resultPopup");
  resultPopup.classList.add("hidden"); // Ocultar el popup
}
