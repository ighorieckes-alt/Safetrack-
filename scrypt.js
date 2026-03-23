// Garante que o código rode apenas quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    
    const slider = document.getElementById('range-sensor');
    const metrosDisplay = document.getElementById('metros');

    // Verifica se os elementos existem na página atual
    if (slider && metrosDisplay) {
        // 'input' detecta a mudança ENQUANTO o usuário arrasta
        slider.addEventListener('input', function() {
            metrosDisplay.innerText = this.value;
        });
    }
});

// Função para o botão de Salvar
function confirmarConfig() {
    const valor = document.getElementById('metros').innerText;
    alert("Configuração Salva! O alarme tocará se a bolsa se afastar " + valor + " metros.");
}

// --- OUTRAS FUNÇÕES DO SEU PROJETO ---

// Simulação de Trava/Destrava (Home)
let conectada = false;
function simularConexao() {
    const status = document.getElementById('status-bolsa');
    if (!status) return;
    conectada = !conectada;
    status.innerHTML = conectada ? "Bolsa Destravada ✅" : "Bolsa Travada 🔒";
    status.className = conectada ? "status-on" : "status-off";
}

// Cadastro
function realizarCadastro() {
    const nome = document.getElementById('nome-user')?.value;
    if (nome) {
        alert(`Sucesso, ${nome}! Sistema IoT ativado.`);
        window.location.href = 'index.html';
    } else {
        alert("Por favor, preencha seu nome.");
    }
}
