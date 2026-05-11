const formulario = document.getElementById("formulario");

if (formulario) {
  formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede envio padrão do formulário

    // Captura os valores dos campos
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    // Validação de campos vazios
    if (!nome || !email || !mensagem) {
      alert("Preencha todos os campos!");
      return;
    }

    // Validação de e-mail com RegEx (mais rigorosa)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Digite um email válido (exemplo: usuario@dominio.com)!");
      return;
    }

    // Sucesso
    alert("Mensagem enviada com sucesso!");
    formulario.reset();
  });
}