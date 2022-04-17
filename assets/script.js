const baseURL = "http://localhost:3000/paleta";

async function findAllPaletas() {
  const response = await fetch(`${baseURL}/todas-paletas`);

  const paletas = await response.json();
  paletas.forEach((paleta) => {
    document.getElementById("paletaList").insertAdjacentHTML(
      "beforeend",
      `<div class="PaletaListaItem">
        <div>
            <div class="PaletaListaItem__sabor">${paleta.sabor}</div>
            <div class="PaletaListaItem__preco">R$ ${paleta.preco.toFixed(
              2
            )}</div>
            <div class="PaletaListaItem__descricao">${paleta.descricao}</div>
          </div>
            <img class="PaletaListaItem__foto" src=${
              paleta.foto
            } alt=${`Paleta de ${paleta.sabor}`} />
        </div>`
    );
    VanillaTilt.init(document.querySelectorAll(".PaletaListaItem"), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 1,
    });
  });
}

async function findByIdPaletas() {
  const id = document.querySelector("#idPaleta").value;

  const response = await fetch(`${baseURL}/paleta/${id}`);
  const paleta = await response.json();

  const paletaEscolhidaDiv = document.querySelector("#paletaEscolhida");

  paletaEscolhidaDiv.innerHTML = `<div class="PaletaCardItem">
  <div>
      <div class="PaletaCardItem__sabor">${paleta.sabor}</div>
      <div class="PaletaCardItem__preco">R$ ${paleta.preco.toFixed(2)}</div>
      <div class="PaletaCardItem__descricao">${paleta.descricao}</div>
    </div>
      <img class="PaletaCardItem__foto" src=${
        paleta.foto
      } alt=${`Paleta de ${paleta.sabor}`} />
  </div>`;

  VanillaTilt.init(document.querySelectorAll(".PaletaCardItem"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1,
  });
}

findAllPaletas();
findByIdPaletas();
