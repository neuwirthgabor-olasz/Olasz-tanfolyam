document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("darkModeBtn");

  if (localStorage.getItem("darkmode") === "true") {
    document.body.classList.add("dark");
  }

  if (button) {
    button.addEventListener("click", function () {
      document.body.classList.toggle("dark");
      localStorage.setItem("darkmode", document.body.classList.contains("dark"));
    });
  }
});
let flipped = false;

function flipCard(){
  const card = document.getElementById("flashcard");
  if(!card) return;

  if(flipped){
    card.innerHTML = 'Ciao<small>Koppints a fordításhoz</small>';
  } else {
    card.innerHTML = 'Szia<small>Koppints vissza az olaszhoz</small>';
  }

  flipped = !flipped;
}

function speakItalian(){
  if (!window.speechSynthesis) {
    alert("A böngésződ nem támogatja a felolvasást.");
    return;
  }

  speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance("Ciao");
  utterance.lang = "it-IT";
  utterance.rate = 0.8;
  utterance.pitch = 1;

  speechSynthesis.speak(utterance);
}
