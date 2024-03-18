document.getElementById('addButton').addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const valor = parseFloat(document.getElementById('valor').value);
    
    if (nome && valor) {
        adicionarItemLista(nome, valor);
        document.getElementById('nome').value = '';
        document.getElementById('valor').value = '';
    } else {
        alert('Por favor, preencha o nome e o valor do item.');
    }
});

document.getElementById('calcularButton').addEventListener('click', function() {
    const totalGastos = calcularTotalGastos();
    
    document.getElementById('totalGastos').innerText = `R$ ${totalGastos.toFixed(2)}`;
});

function adicionarItemLista(nome, valor) {
    const listaItens = document.getElementById('listaItens');
    const newItem = document.createElement('li');
    newItem.innerHTML = `<strong>${nome}:</strong> R$ ${valor.toFixed(2)}`;
    listaItens.appendChild(newItem);
}

function calcularTotalGastos() {
    const valoresItens = document.querySelectorAll('#listaItens li');
    let total = 0;
    
    valoresItens.forEach(item => {
        const valor = parseFloat(item.innerText.split('R$')[1]);
        total += valor;
    });
    
    return total;
}
