//console.log(dados[1].descricao 
//console.log(dados);

function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Se campoPesquisa for vazio, ou seja nada escrito.
    if (!campoPesquisa){   // ou (campoPesquisa == "")
        section.innerHTML = "<p>Favor digitar o que quer pesquisar</p>"
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para concatenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

      //Se o titulo ou alguma palavra da descrição ou alguma tag válida estiver incluso no campoPesquisa
        if (titulo.includes(campoPesquisa) || 
        descricao.includes(campoPesquisa) || 
        tags.includes(campoPesquisa)) {
        // Constrói o HTML para cada item do resultado
        // Usamos template literals para facilitar a interpolação de valores
        // Cria um novo elemento HTML para cada resultado
      
        resultados += `
        <div class="item-resultado">
          <img src="${dado.image}" alt="" />
          <h2><a href="$dado.link" target="_blank">${dado.titulo}</a></h2>
          <p class="descricao-meta">
            ${dado.descricao}
          </p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      `;
    }
      
      
  }

  if (!resultados) {
      resultados = "<p>Nada foi encontrado</p>"
  }
  
    // Adiciona os resultados construídos à seção
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
  }

//Explicação dos comentários:

// . Obtém a seção onde os resultados serão exibidos:      Clarifica o objetivo de getElementById.
// . Inicializa uma string vazia para concatenar os resultados: Explica o propósito de resultados.
// . Itera sobre cada dado da lista de dados: Descreve o funcionamento do loop for...of.
// . Constrói o HTML para cada item do resultado: Indica que estamos montando a estrutura HTML de cada resultado.
// . Usamos template literals para facilitar a interpolação de valores: Justifica a escolha de template literals para construir a string HTML.
// . Adiciona os resultados construídos à seção: Explica o que acontece com a string resultados final.