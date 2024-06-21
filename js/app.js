var listaParticipantes = [];

function adicionar (){
var nomeParticipantes = document.getElementById('nome-amigo');
if(nomeParticipantes.value == ``){
    alert(`Por favor, digite o nome de um amigo para adicionar`);
}else if(listaParticipantes.includes(nomeParticipantes.value)){
    alert(`Esse nome já foi incluído na lista. Verifique se há duas pessoas com o mesmo nome e busque diferenciá-los.`)
}else{
    listaParticipantes.push(nomeParticipantes.value);
    document.getElementById(`lista-amigos`).innerHTML = `<p id="lista-amigos">${listaParticipantes.join(', ')}</p>`;
}

nomeParticipantes.value = "";

}

function sortear (){
    embaralha(listaParticipantes);
    var numeroParticipantes = listaParticipantes.length;
    var listaSorteio = document.getElementById(`lista-sorteio`);
    if(numeroParticipantes < 2){
        alert(`Escolha pelo menos 2 participantes.`);
        return;
    }

    if(listaSorteio.textContent != ``){
        sortearFaltantes();
    }

    for(let i = 0; i < numeroParticipantes; i++){
        if(i == numeroParticipantes - 1){
            listaSorteio.innerHTML = listaSorteio.innerHTML  + `<p id="lista-sorteio">${listaParticipantes[i]} -> ${listaParticipantes[0]}<br></p> `;

        }else {
            listaSorteio.innerHTML = listaSorteio.innerHTML  + `<p id="lista-sorteio">${listaParticipantes[i]} -> ${listaParticipantes[i+1]}<br></p> `;

        }
    }

}

function reiniciar (){
    listaParticipantes = [];
    document.getElementById(`lista-sorteio`).innerHTML = `<p id="lista-sorteio"></p>`;
    document.getElementById(`lista-amigos`).innerHTML = `<p id="lista-amigos"></p>`;

}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function sortearFaltantes() {
    document.getElementById(`lista-sorteio`).innerHTML = `<p id="lista-sorteio"></p>`;
}

function removerAmigo() {
    listaParticipantes.pop();
    document.getElementById(`lista-amigos`).innerHTML = `<p id="lista-amigos">${listaParticipantes.join(', ')}</p>`;
}


