document.addEventListener('DOMContentLoaded', function () {
    const mensagens = [
        "Tentando me pegar?",
        "Quase lá!",
        "Ops, escapou!",
        "Mais rápido na próxima!",
        "Não é fácil, hein?",
        "Tente novamente!",
        "Estou aqui... ou aqui?",
        "Você é rápido, mas eu sou mais!",
        "Quase acertou!",
        "Essa foi por pouco!"
    ];

    let contagemMouseover = 0;

    document.getElementById('btn-igual').addEventListener('mouseover', function () {
        var maxWidth = window.innerWidth - this.offsetWidth;
        var maxHeight = window.innerHeight - this.offsetHeight;

        var novoX = Math.random() * maxWidth;
        var novoY = Math.random() * maxHeight;

        this.style.position = 'fixed';
        this.style.left = `${novoX}px`;
        this.style.top = `${novoY}px`;

        var mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
        document.getElementById('display').value = mensagemAleatoria;

        contagemMouseover++;
        if (contagemMouseover === 5) {
            document.body.style.backgroundImage = "url('https://wallpapers.com/images/hd/troll-face-alaprykufdrn7tdo.jpg')";
            contagemMouseover = 0;
        }
    });
});
