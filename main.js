function calcularIMC() {
  const peso = document.getElementById('peso').value;
  const altura = document.getElementById('altura').value;

  if (peso && altura) {
    const imc = (peso / (altura * altura)).toFixed(2);
    let mensagem = '';

    if (imc < 18.5) {
      mensagem = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
      mensagem = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
      mensagem = 'Sobrepeso';
    } else {
      mensagem = 'Obesidade';
    }

    document.getElementById('resultado').innerHTML = `Seu IMC é ${imc} (${mensagem})`;
  } else {
    document.getElementById('resultado').innerHTML = 'Preencha todos os campos.';
  }
}
