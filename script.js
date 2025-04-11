// Exibe a mensagem ao clicar no botão e a esconde após 6 segundos
function showMessage() {
    const message = document.getElementById('message');
    message.classList.remove('hidden');
    message.style.display = 'block';

    // Esconde a mensagem após 6 segundos
    setTimeout(() => {
        message.style.display = 'none';
    }, 6000);
}