function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();  // Tornando a pesquisa case insensitive
  
   if(campoPesquisa == ""){
        return;
   }

  let resultados = "";

  for (let dado of dados) {
    if (dado.titulo.toLowerCase().includes(campoPesquisa) || dado.posicao.toLowerCase().includes(campoPesquisa)) {
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="${dado.link}" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao} <br>
          <strong>Posição: ${dado.posicao}</strong>
        </p>
        <a href="${dado.link}" target="_blank">Mais informações</a>
      </div>
      `;
    }
  }

  section.innerHTML = resultados;
}
