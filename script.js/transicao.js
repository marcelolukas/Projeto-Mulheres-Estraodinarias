document.startViewTransition(() => {
  // troca de conteúdo
})

var indexValue = 0;

function slideShow() {

  const imagens = document.querySelectorAll(".card-imagem img");

  // esconde todas as imagens
  for (let i = 0; i < imagens.length; i++) {
    imagens[i].style.display = "none";
  }

  // passa para próxima
  indexValue++;

  if (indexValue > imagens.length) {
    indexValue = 1;
  }

  // mostra apenas uma
  imagens[indexValue - 1].style.display = "block";

}

// executa a cada 1.5 segundos
setInterval(slideShow, 5000);


var indexValue2 = 0;

function slideShow2() {

  const imagens2 = document.querySelectorAll(".card-imagem-second img");

  // esconde todas as imagens
  for (let i = 0; i < imagens2.length; i++) {
    imagens2[i].style.display = "none";
  }

  // passa para próxima
  indexValue2++;

  if (indexValue2 > imagens2.length) {
    indexValue2 = 1;
  }

  // mostra apenas uma
  imagens2[indexValue2 - 1].style.display = "block";

}

// executa a cada 1.5 segundos
setInterval(slideShow2, 5000);
