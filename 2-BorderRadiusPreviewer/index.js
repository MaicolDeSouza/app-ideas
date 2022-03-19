const btn = document.querySelector("#submit");
const btnCopy = document.querySelector("#copy");
const tl = document.querySelector("#tl");
const tr = document.querySelector("#tr");
const bl = document.querySelector("#bl");
const br = document.querySelector("#br");

// Quando botao alterar pressioando
btn.addEventListener("click", (e) =>{           // Caso ocorra o click
    e.preventDefault();     
    //console.log(tl.value, tr.value, bl.value, br.value);
    modifyBorders(tl.value, tr.value, bl.value, br.value); // Chama funcao para alterar valores das bordas
});

// Copia para clipboard os valores dos border radius 
btnCopy.addEventListener("click", (e) =>{           // Caso ocorra o click
    e.preventDefault();  
    modifyBorders(tl.value, tr.value, bl.value, br.value); // Chama funcao para alterar valores das bordas
    // tl.select(); // Caso quisessemos selecionar um elemento especifico
    // tr.select(); 
    //bl.select(); 
    // br.select(); 
    navigator.clipboard.writeText(`${tl.value}px ${tr.value}px ${br.value}px ${bl.value}px`);
    alert("Valores copiados");
});

// Funcao que altera as bordas
function modifyBorders(tl, tr, bl, br) {
    document.querySelector("#box").style.borderTopLeftRadius = `${tl}px`;
    document.querySelector("#box").style.borderTopRightRadius = `${tr}px`;
    document.querySelector("#box").style.borderBottomLeftRadius = `${bl}px`;
    document.querySelector("#box").style.borderBottomRightRadius = `${br}px`;
};