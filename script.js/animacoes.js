document.addEventListener("DOMContentLoaded", () => {
  const botaoContato = document.querySelector(".botao-contato");
  const video = botaoContato.querySelector(".icone-punho");

  // garante que o vídeo esteja pronto
  video.load();

  botaoContato.addEventListener("mouseenter", () => {
    video.currentTime = 0;
    video.play();
  });

  botaoContato.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});