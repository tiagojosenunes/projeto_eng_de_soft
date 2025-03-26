const form = document.getElementById('form-add');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji feliz"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji triste"/>';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado<span/>';
const spanReprovado = '<span class="resultado reprovado">Reprovado<span/>';
const notaMinima = parseFloat(prompt('Digite a nota minima:'));

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    atualizaMedia();
});

function adicionaLinha(){

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
    inputNomeAtividade.focus();
};

function atualizaTabela (){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
} 

function atualizaMedia (){
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado ;
}

function calculaMediaFinal (){
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}