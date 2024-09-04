const form = document.querySelector('#form'); // Obtive o form

// Evento de envio do formulário!
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Cancelou envio

    const inputPeso = form.querySelector('#peso'); // Obtive input
    const inputAltura = form.querySelector('#altura'); // Obtive input
    
    // Atribuindo valor do input a uma variável (e convertendo para Number)
    const peso = Number(inputPeso.value); 
    const altura = Number(inputAltura.value);

    // Segurança em caso de NaN
    if(!peso){
        setResultado('Peso inválido!', false);
        return;
    }
    if(!altura){
        setResultado('Altura inválida!', false);
        return;
    }

    //IMC
    const imc = getImc(peso, altura); // Calculou e resgatou o valor
    const nivelImc = getNivelImc(imc); // Condiciona o nível do IMC

    // Mensagem
    const msg = `Seu IMC é ${imc} (${nivelImc}).`; 
    setResultado(msg, true);
});

// Função para condicionar o nivel do IMC

function getNivelImc(imc) {
   const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

   if (imc >= 39.9) return nivel[5];
   if (imc >= 34.9) return nivel[4];
   if (imc >= 29.9) return nivel[3];
   if (imc >= 24.9) return nivel[2];
   if (imc >= 18.5) return nivel[1];
   if (imc < 18.5) return nivel[0];
}

// Função para calcular IMC

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

// Função para criar parágrafos

function criarP() {
    const p = document.createElement('p');
    return p;
}

// Função para adicionar o resultado

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criarP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}

