document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reportForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio do formulário por padrão

        // Coletar os valores dos campos
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const estado = document.getElementById('estado').value;
        const cidade = document.getElementById('cidade').value;
        const coordenadas = document.getElementById('coordenadas').value.trim();
        const tipoProblema = document.getElementById('tipo-problema').value;
        const descricao = document.getElementById('descricao').value.trim();

        // Validar os campos
        if (nome === '' || email === '' || telefone === '' || estado === '' || cidade === '' || coordenadas === '' || tipoProblema === '' || descricao === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }
         // Gerar código de rastreamento
         function gerarCodigoRastreamento() {
            return 'DEN' + Date.now() + Math.floor(Math.random() * 1000);
        }
        
        const codigoRastreamento = gerarCodigoRastreamento();

        // Enviar os dados (simulação)
        enviarDenuncia(codigoRastreamento, nome, email, telefone, estado, cidade, coordenadas, tipoProblema, descricao);

        // Mostrar o código de rastreamento para o usuário
        alert('Denúncia enviada! Seu código de rastreamento é: ' + codigoRastreamento);

        // Limpar o formulário após o envio 
        form.reset();
    });

    function enviarDenuncia(codigoRastreamento, nome, email, telefone, estado, cidade, coordenadas, tipoProblema, descricao) {
        // Aqui você pode enviar os dados para o servidor
        console.log('Dados da denúncia enviados:');
        console.log('Código de Rastreamento:', codigoRastreamento);
        console.log('Nome:', nome);
        console.log('E-mail:', email);
        console.log('Telefone:', telefone);
        console.log('Estado:', estado);
        console.log('Cidade:', cidade);
        console.log('Coordenadas:', coordenadas);
        console.log('Tipo de Problema:', tipoProblema);
        console.log('Descrição:', descricao);
    }
});
