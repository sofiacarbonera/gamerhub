function botaoAcao() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let descricao = "";

    for (let dado of dados) {
        if (dado.categoria === "ACAO") {
        //cria um novo elemento
        resultados += `
        <div class="item-resultado">
        <img src=${dado.imagem} alt="imagem-jogo">
        <div>
            <h3>
                <a href=${dado.site} target="_blank">${dado.titulo}</a>
            </h3>
            <p class="descricao-meta">${dado.descricao}</p>
            <div class="links">
                <a href=${dado.trailer} target="_blank">Trailer</a>
                <a href=${dado.review} target="_blank">Review</a>
            </div>
            </div>
        </div>
        `;}
    };

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;

};

function botaoFps() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let descricao = "";

    for (let dado of dados) {
        if (dado.categoria === "FPS") {
        //cria um novo elemento
        resultados += `
        <div class="item-resultado">
        <img src=${dado.imagem} alt="imagem-jogo">
        <div>
            <h3>
                <a href=${dado.site} target="_blank">${dado.titulo}</a>
            </h3>
            <p class="descricao-meta">${dado.descricao}</p>
            <div class="links">
                <a href=${dado.trailer} target="_blank">Trailer</a>
                <a href=${dado.review} target="_blank">Review</a>
            </div>
            </div>
        </div>
        `;}
    };

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;

};

function botaoRpg() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let descricao = "";

    for (let dado of dados) {
        if (dado.categoria === "RPG") {
        //cria um novo elemento
        resultados += `
        <div class="item-resultado">
        <img src=${dado.imagem} alt="imagem-jogo">
        <div>
            <h3>
                <a href=${dado.site} target="_blank">${dado.titulo}</a>
            </h3>
            <p class="descricao-meta">${dado.descricao}</p>
            <div class="links">
                <a href=${dado.trailer} target="_blank">Trailer</a>
                <a href=${dado.review} target="_blank">Review</a>
            </div>
            </div>
        </div>
        `;}
    };

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;

};

function botaoSimulacao () {
        // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let descricao = "";

    for (let dado of dados) {
        if (dado.categoria === "SIMULACAO") {
        //cria um novo elemento
        resultados += `
        <div class="item-resultado">
        <img src=${dado.imagem} alt="imagem-jogo">
        <div>
            <h3>
                <a href=${dado.site} target="_blank">${dado.titulo}</a>
            </h3>
            <p class="descricao-meta">${dado.descricao}</p>
            <div class="links">
                <a href=${dado.trailer} target="_blank">Trailer</a>
                <a href=${dado.review} target="_blank">Review</a>
            </div>
            </div>
        </div>
        `;}
    };

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;

};

function botaoEstrategia() {
        // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let descricao = "";

    for (let dado of dados) {
        if (dado.categoria === "ESTRATEGIA") {
        //cria um novo elemento
        resultados += `
        <div class="item-resultado">
        <img src=${dado.imagem} alt="imagem-jogo">
        <div>
            <h3>
                <a href=${dado.site} target="_blank">${dado.titulo}</a>
            </h3>
            <p class="descricao-meta">${dado.descricao}</p>
            <div class="links">
                <a href=${dado.trailer} target="_blank">Trailer</a>
                <a href=${dado.review} target="_blank">Review</a>
            </div>
            </div>
        </div>
        `;}
    };

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;

};

function botaoCorrida() {
        // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let descricao = "";

    for (let dado of dados) {
        if (dado.categoria === "CORRIDA") {
        //cria um novo elemento
        resultados += `
        <div class="item-resultado">
        <img src=${dado.imagem} alt="imagem-jogo">
        <div>
            <h3>
                <a href=${dado.site} target="_blank">${dado.titulo}</a>
            </h3>
            <p class="descricao-meta">${dado.descricao}</p>
            <div class="links">
                <a href=${dado.trailer} target="_blank">Trailer</a>
                <a href=${dado.review} target="_blank">Review</a>
            </div>
            </div>
        </div>
        `;}
    };

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;

};

function botaoCasual() {
     // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let descricao = "";

    for (let dado of dados) {
        if (dado.categoria === "CASUAL") {
        //cria um novo elemento
        resultados += `
        <div class="item-resultado">
        <img src=${dado.imagem} alt="imagem-jogo">
        <div>
            <h3>
                <a href=${dado.site} target="_blank">${dado.titulo}</a>
            </h3>
            <p class="descricao-meta">${dado.descricao}</p>
            <div class="links">
                <a href=${dado.trailer} target="_blank">Trailer</a>
                <a href=${dado.review} target="_blank">Review</a>
            </div>
            </div>
        </div>
        `;}
    };

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;

};

function botaoTerror() {
        // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let descricao = "";

    for (let dado of dados) {
        if (dado.categoria === "TERROR") {
        //cria um novo elemento
        resultados += `
        <div class="item-resultado">
        <img src=${dado.imagem} alt="imagem-jogo">
        <div>
            <h3>
                <a href=${dado.site} target="_blank">${dado.titulo}</a>
            </h3>
            <p class="descricao-meta">${dado.descricao}</p>
            <div class="links">
                <a href=${dado.trailer} target="_blank">Trailer</a>
                <a href=${dado.review} target="_blank">Review</a>
            </div>
            </div>
        </div>
        `;}
    };

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;

};

function botaoIndie() {
        // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let descricao = "";

    for (let dado of dados) {
        if (dado.categoria === "INDIE") {
        //cria um novo elemento
        resultados += `
        <div class="item-resultado">
        <img src=${dado.imagem} alt="imagem-jogo">
        <div>
            <h3>
                <a href=${dado.site} target="_blank">${dado.titulo}</a>
            </h3>
            <p class="descricao-meta">${dado.descricao}</p>
            <div class="links">
                <a href=${dado.trailer} target="_blank">Trailer</a>
                <a href=${dado.review} target="_blank">Review</a>
            </div>
            </div>
        </div>
        `;}
    };

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;

};

function botaoAventura() {
        // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let descricao = "";

    for (let dado of dados) {
        if (dado.categoria === "AVENTURA") {
        //cria um novo elemento
        resultados += `
        <div class="item-resultado">
        <img src=${dado.imagem} alt="imagem-jogo">
        <div>
            <h3>
                <a href=${dado.site} target="_blank">${dado.titulo}</a>
            </h3>
            <p class="descricao-meta">${dado.descricao}</p>
            <div class="links">
                <a href=${dado.trailer} target="_blank">Trailer</a>
                <a href=${dado.review} target="_blank">Review</a>
            </div>
            </div>
        </div>
        `;}
    };

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;

};

function pesquisar() {

    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhum jogo encontrado. Para a pesquisa você deve escrever um nome de jogo ou escolher uma das categorias</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let descricao = "";

    // altera sobre cada dado da lista de dados
    for (let dado of dados) {
        // coloca todas as letras em minusculo
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
        //cria um novo elemento
        resultados += `
        <div class="item-resultado">
        <img src=${dado.imagem} alt="imagem-jogo">
        <div>
            <h3>
                <a href=${dado.site} target="_blank">${dado.titulo}</a>
            </h3>
            <p class="descricao-meta">${dado.descricao}</p>
            <div class="links">
                <a href=${dado.trailer} target="_blank">Trailer</a>
                <a href=${dado.review} target="_blank">Review</a>
            </div>
        </div>
    </div>
        `;}
    }

    if (!resultados) {
        resultados = "<p>Jogo não encontrado.</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
};