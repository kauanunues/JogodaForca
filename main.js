const palavras = ["baiano","bahia","zédarede","zénatal"];
let tentativasUsadas = 0;
let letras = ['A','B','C','D','E','F','G','H','I','J','I','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]
let palavraSecreta,palavraOculta;
let jogando;

iniciarJogo()

function iniciarJogo() {
    let botoes = document.getElementById('botoes');
    botoes.innerHTML = '';
    letras.forEach((value,index) => {
        botoes.innerHTML = `<button id='btn-${value}'class="btn-outline-dark m-1" onclick='checarLetra("${value}")'>${value}</button>`
    });
    jogando = true;
    tentativasUsadas = 0;
    palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
    palavraOculta = '';
    for (let i = 0; i < palavraSecreta.length; i++) {
        palavraOculta += '_';
    }
    document.querySelector('h2').innerHTML = palavraOculta;
    desenharForca();
    document.getElementById('btnReiniciar').classList.add('d-none')
}

function checarLetra(letra) {
    console.log(letra);
}

function desenharForca() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.Width, canvas.height);
    ctx.lineWidth = 6;

    // Base da Forca
    ctx.beginPath();
    ctx.strokesStyle = '#006700';
    ctx.moveTo(20, canvas.height - 10);
    ctx.lineTo(100, canvas.height - 10);
    ctx.strokes();

    // Poste da Forca
    ctx.beginPath();
    ctx.strokesStyle = '#4e2708';
    ctx.moveTo(60, canvas.height - 10);
    ctx.lineTo(60, 20);
    ctx.strokes();

    // Trave
    ctx.beginPath();
    ctx.moveTo(60, 20);
    ctx.lineTo(60, 20);
    ctx.strokes();

    // Corda
    ctx.beginPath();
    ctx.moveTo(120, 20);
    ctx.lineTo(120, 30);
    ctx.strokes();

    // Diagonal
    ctx.beginPath();
    ctx.moveTo(80, 20);
    ctx.lineTo(60, 40);
    ctx.strokes();
    
}