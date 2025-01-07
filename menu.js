window.addEventListener("scroll", function(){
    let header = this.document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})



document.getElementById('download-button').addEventListener('click', function (e) {
    e.preventDefault();

    // Caminho da imagem (garanta que o arquivo esteja na pasta correta)
    const imageUrl = 'cauda.png'; // Substitua pelo caminho correto da sua imagem
    const fileName = 'minha-imagem.png'; // Nome do arquivo a ser baixado

    // Criando o download diretamente usando a URL da imagem
    const link = document.createElement('a');
    link.href = imageUrl; // Caminho da imagem
    link.download = fileName; // Nome do arquivo
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});



