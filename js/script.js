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
// Lista de cidades costeiras por estado
const cidadesPorEstado = {
    'AP': ['Amapá', 'Calçoene', 'Macapá', 'Oiapoque'],
    'PA': ['Augusto Corrêa', 'Bragança', 'Chaves', 'Curuçá', 'Maracanã', 'Salinópolis', 'Soure', 'Vigia'],
    'MA': ['Alcântara', 'Apicum-Açu', 'Bacuri', 'Barreirinhas', 'Bequimão', 'Cândido Mendes', 'Carutapera', 'Cedral', 'Cururupu', 'Guimarães', 'Humberto de Campos', 'Icatu', 'Paulino Neves', 'Primeira Cruz', 'Raposa', 'Santo Amaro do Maranhão', 'São José de Ribamar', 'São Luís', 'Tutóia'],
    'PI': ['Cajueiro da Praia', 'Ilha Grande', 'Luís Correia', 'Parnaíba'],
    'CE': ['Acaraú', 'Amontada', 'Aquiraz', 'Aracati', 'Barroquinha', 'Beberibe', 'Camocim', 'Cascavel', 'Caucaia', 'Chaval', 'Cruz', 'Fortim', 'Fortaleza', 'Icapuí', 'Itapipoca', 'Itarema', 'Jijoca de Jericoacoara', 'Paraipaba', 'Paracuru', 'São Gonçalo do Amarante', 'Trairi', 'Tururu'],
    'RN': ['Areia Branca', 'Baía Formosa', 'Canguaretama', 'Extremoz', 'Galinhos', 'Grossos', 'Macau', 'Maxaranguape', 'Natal', 'Nísia Floresta', 'Parnamirim', 'Porto do Mangue', 'Rio do Fogo', 'São Miguel do Gostoso', 'Tibau', 'Tibau do Sul', 'Touros'],
    'PB': ['Alhandra', 'Baía da Traição', 'Cabedelo', 'Conde', 'João Pessoa', 'Lucena', 'Mataraca', 'Pitimbu'],
    'PE': ['Abreu e Lima', 'Barra de Jangada', 'Cabo de Santo Agostinho', 'Fernando de Noronha', 'Goiana', 'Ipojuca', 'Itamaracá', 'Itapissuma', 'Jaboatão dos Guararapes', 'Olinda', 'Paulista', 'Recife', 'Rio Formoso', 'São José da Coroa Grande', 'Sirinhaém', 'Tamandaré'],
    'AL': ['Barra de Santo Antônio', 'Barra de São Miguel', 'Coruripe', 'Feliz Deserto', 'Jequiá da Praia', 'Japaratinga', 'Maceió', 'Maragogi', 'Marechal Deodoro', 'Paripueira', 'Piaçabuçu', 'Porto Calvo', 'Porto de Pedras', 'Roteiro', 'São Miguel dos Milagres'],
    'SE': ['Aracaju', 'Barra dos Coqueiros', 'Brejo Grande', 'Estância', 'Indiaroba', 'Itaporanga d\'Ajuda', 'Pacatuba', 'Pirambu'],
    'BA': ['Alcobaça', 'Belmonte', 'Cairu', 'Camaçari', 'Camamu', 'Canavieiras', 'Caravelas', 'Conde', 'Entre Rios', 'Esplanada', 'Ilhéus', 'Itacaré', 'Itaparica', 'Jaguaripe', 'Jandaíra', 'Lauro de Freitas', 'Madre de Deus', 'Maraú', 'Mata de São João', 'Mucuri', 'Nova Viçosa', 'Porto Seguro', 'Prado', 'Salvador', 'Santa Cruz Cabrália', 'São Francisco do Conde', 'São Sebastião do Passé', 'Taperoá', 'Valença', 'Vera Cruz'],
    'ES': ['Anchieta', 'Aracruz', 'Guarapari', 'Itapemirim', 'Linhares', 'Marataízes', 'Piúma', 'Presidente Kennedy', 'Serra', 'São Mateus', 'Vila Velha', 'Vitória'],
    'RJ': ['Angra dos Reis', 'Araruama', 'Armação dos Búzios', 'Arraial do Cabo', 'Cabo Frio', 'Campos dos Goytacazes', 'Carapebus', 'Casimiro de Abreu', 'Iguaba Grande', 'Itaguaí', 'Macaé', 'Mangaratiba', 'Maricá', 'Niterói', 'Paraty', 'Quissamã', 'Rio das Ostras', 'Rio de Janeiro', 'São Gonçalo', 'Saquarema', 'São João da Barra', 'São Pedro da Aldeia'],
    'SP': ['Bertioga', 'Cananéia', 'Caraguatatuba', 'Cubatão', 'Guarujá', 'Iguape', 'Ilhabela', 'Itanhaém', 'Mongaguá', 'Peruíbe', 'Praia Grande', 'Santos', 'São Sebastião', 'São Vicente', 'Ubatuba'],
    'PR': ['Antonina', 'Guaraqueçaba', 'Guaratuba', 'Matinhos', 'Morretes', 'Paranaguá', 'Pontal do Paraná'],
    'SC': ['Araquari', 'Balneário Camboriú', 'Balneário Barra do Sul', 'Barra Velha', 'Biguaçu', 'Bombinhas', 'Camboriú', 'Garopaba', 'Governador Celso Ramos', 'Içara', 'Imbituba', 'Itajaí', 'Itapema', 'Jaguaruna', 'Laguna', 'Navegantes', 'Palhoça', 'Passo de Torres', 'Penha', 'Piçarras', 'Porto Belo', 'São Francisco do Sul', 'São José', 'Tijucas', 'Tubarão', 'Balneário Rincão'],
    'RS': ['Arroio do Sal', 'Balneário Pinhal', 'Capão da Canoa', 'Capivari do Sul', 'Cidreira', 'Imbé', 'Mostardas', 'Osório', 'Palmares do Sul', 'Rio Grande', 'Santo Antônio da Patrulha', 'São José do Norte', 'Tavares', 'Torres', 'Tramandaí', 'Xangri-lá']

};

function popularCidades() {
const estadoSelect = document.getElementById('estado');
const cidadeSelect = document.getElementById('cidade');
const estadoSelecionado = estadoSelect.value;

// Limpa as opções existentes
cidadeSelect.innerHTML = '<option value="">Selecione a cidade</option>';

// Verifica se um estado foi selecionado
if (estadoSelecionado !== '') {
    // Popula o campo de cidades com as cidades correspondentes ao estado selecionado
    const cidades = cidadesPorEstado[estadoSelecionado];
    cidades.forEach(cidade => {
        const option = document.createElement('option');
        option.value = cidade;
        option.text = cidade;
        cidadeSelect.appendChild(option);
    });
}
}
function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: userLocation
            });
            var marker = new google.maps.Marker({
                position: userLocation,
                map: map
            });
            document.getElementById('coordinates').innerText = `Latitude: ${userLocation.lat}, Longitude: ${userLocation.lng}`;
        }, function() {
            handleLocationError(true, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, pos) {
    alert(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
}

function copyCoordinates() {
    var coordinates = document.getElementById('coordinates').innerText;
    navigator.clipboard.writeText(coordinates).then(function() {
        alert('Coordenadas copiadas!');
    }, function(err) {
        alert('Erro ao copiar coordenadas: ', err);
    });
}
window.watsonAssistantChatOptions = {
    integrationID: "ca575cf0-19f7-4cfb-8a4f-40899f2b04ce", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "298f15d9-35ac-4698-9cb5-5613e62e70fa", // The ID of your service instance.
    onLoad: async (instance) => {
      await instance.render();
    },
  };
  setTimeout(function () {
    const t = document.createElement("script");
    t.src =
      "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
      (window.watsonAssistantChatOptions.clientVersion || "latest") +
      "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
  document.addEventListener('DOMContentLoaded', function() {
    const rastreioForm = document.getElementById('rastreioForm');

    rastreioForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio do formulário por padrão

        // Coletar o valor do campo de rastreamento
        const codigoRastreamento = document.getElementById('codigo-rastreamento').value.trim();

        // Validar o campo
        if (codigoRastreamento === '') {
            alert('Por favor, insira o código de rastreamento.');
            return;
        }

        // Buscar status da denúncia (simulação)
        buscarStatusDenuncia(codigoRastreamento);
    });

    function buscarStatusDenuncia(codigoRastreamento) {
        // Simulação de busca de status
        const status = 'Recebido'; // Aqui você buscaria o status no banco de dados

        // Exibir o resultado
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = 'Status da denúncia: ' + status;
    }
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    
    // Pega os valores do formulário
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var mensagem = document.getElementById('mensagem').value;

    // Número do telefone para o qual enviar a mensagem (inclua o código do país)
    var numeroWhatsapp = '5511942160622'; // Substitua pelo número desejado

    // Monta a mensagem com as informações do formulário
    var mensagemWhatsapp = 'Olá, eu sou ' + nome  +". "+ mensagem + '. Meu telefone para contato é: ' + telefone;

    // Cria o link do WhatsApp
    var url = 'https://api.whatsapp.com/send?phone=' + numeroWhatsapp + '&text=' + encodeURIComponent(mensagemWhatsapp);

    // Redireciona para a conversa no WhatsApp em uma nova guia
    window.open(url, '_blank');
});
