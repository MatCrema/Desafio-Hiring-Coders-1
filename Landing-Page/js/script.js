const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Teste')
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);
    localStorage.setItem('lead', convertData);

    let content = document.getElementById('content');
    let carregando = `<p>Carregando...</p>`;
    let pronto = `<p>Email cadastrado</p>`;

    content.innerHTML = carregando;

    setTimeout(() => {
        content.innerHTML = pronto
    }, 1000)
})

// -- Contador -- //
var countDownDate = new Date("July 23, 2021 17:00:00").getTime(); // Data até onde o contador vai

var x = setInterval(function() { // Aumenta o contador a cada 1 segundo

    var now = new Date().getTime(); // Get todays date and time

    var distance = countDownDate - now; // Calcula quanto tempo há de diferença do dia atual até o final da contagem.

    // Calculo para conseguir os Dias, Horas, Minutos e Segundos
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("dday").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`; // Mostra o resultado do contador onde estiver o id="dday"

    // Quando acaba a contagem escreve a mensagem que estiver aqui
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("dday").innerHTML = "A Black Friday Tech Store já começou!";
    }
}, 1000);