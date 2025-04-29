document.getElementById('converter').addEventListener('click', async () => {
    const valor = document.getElementById('valor').value;
    const de = document.getElementById('de').value;
    const para = document.getElementById('para').value;
    const resultado = document.getElementById('resultado');
  
    if (!valor || valor <= 0) {
      resultado.textContent = "Digite um valor válido.";
      return;
    }
  
    try {
      const resposta = await fetch(`https://api.exchangerate.host/convert?from=${de}&to=${para}&amount=${valor}`);
      const dados = await resposta.json();
      resultado.textContent = `${valor} ${de} = ${dados.result.toFixed(2)} ${para}`;
    } catch (erro) {
      resultado.textContent = "Erro ao converter. Tente novamente.";
    }
  });
  