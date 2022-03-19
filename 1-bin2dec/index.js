// 001b = 1 
// 010b = 2
// 011b = 3

let errMsg;

const btn = document.querySelector("#send");    // Consulta a query do botao converter
btn.addEventListener("click", (e) =>{           // Caso ocorra o click
    e.preventDefault();                         // Evita que o seja enviado o formulario permanecendo na pagina
    const name = document.querySelector("#name");// Consulta o input do usuario
    const val = name.value; // Extrai o valor para uma variavel

    const err = validateValue(val); // Verifica se é uma numero binario
     
    if (err < 0){
        document.querySelector("#msg").innerHTML = errMsg; // Envia mensagem com o erro para a pagina
        document.querySelector("#result").innerHTML = ""       // Apenas para limpar a ultima mensagem
    }
    if (err > 0){
        document.querySelector("#msg").innerHTML = ""; // Apenas para limpar a ultima mensagem
        document.querySelector("#result").innerHTML = `Valor decimal = ${binToDec(val)}`; // Envia valor convertido para a pagina
    }
});

// Função que converte em binario
function binToDec (val) {
 return parseInt(val,2); // parseInt com radix=2 é uma funcao que converte valor binario para decimal
}


function validateValue (val){
    // verifica se valor tem menos de 8 numeros
    if (val.length > 8) {
        errMsg = "Digite no maximo 8 numeros."; 
        return -1;
    }
    // Verifica se o valor é binario
    if (!binToDec(val)) {
        errMsg = "Digite um valor binario."; // NaN é falso entao a forma negada valida a função
        return -1;
    }
    return 1;
}

