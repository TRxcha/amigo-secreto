let list = [];

function adicionarAmigo() {
    let name = document.querySelector('input').value;
    if (name === "") {
        alert("Insira um nome válido");
    } else {
        list.push(name);
        let amg = document.getElementById('listaAmigos');
        amg.innerHTML = "";

        list.forEach(function(nome) {
            let li = document.createElement('li');
            li.textContent = nome;
            amg.appendChild(li);
        });
        clf()
        console.log(list);
        console.log(name);
    }
}

function clf(){
    let name = document.querySelector('input');
    name.value = '';
}
function sortearAmigo() {
    if (list == ""){
        alert("Insira, no mínimo, um nome")
    } else {
        let limit = parseInt((list.length));
        let nmr = Math.floor(Math.random()* limit );
        console.log(nmr);
        let choose = list[nmr];
        console.log(choose);
        let result = document.getElementById('resultado');
        result.innerHTML = choose;
        list = [];
        let amg = document.getElementById('listaAmigos');
        amg.innerHTML = "";
    }
}