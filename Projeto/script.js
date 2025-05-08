 function AdicionarTarefa(){
    const input = document.getElementById('butaoinput')
    const texto = input.value.trim();
    if (texto === "") return;

    const li = document.createElement('li');
    li.textContent = texto;

    const botoes = document.createElement('div');
    botoes.className = 'botoes';

    const btncncl = document.createElement('button')
    btncncl.textContent = "✔";
    btncncl.onclick = () => li.classList.toggle('concluida');

    const btnrv = document.createElement('button');
    btnrv.textContent = ("✖");
    btnrv.onclick = () => li.remove();

    botoes.appendChild(btncncl);
    botoes.appendChild(btnrv);
    li.appendChild(botoes);

    document.getElementById('lista').appendChild(li);

    input.value = "";
    input.focus();

 }